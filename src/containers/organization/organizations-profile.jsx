import Card from "@components/cards/community";
import { bufferToWalletAddress } from "@utils/string";
import clsx from "clsx";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";

const AuthorProfileArea = ({ className, organization }) => {
    return (
        <div className={clsx("rn-authore-profile-area", className)}>
            <TabContainer defaultActiveKey="nav-donated">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tab-wrapper-one">
                                <nav className="tab-button-one">
                                    <Nav
                                        className="nav nav-tabs"
                                        id="nav-tab"
                                        role="tablist"
                                    >
                                        <Nav.Link
                                            as="button"
                                            eventKey="nav-donated"
                                        >
                                            Donated
                                        </Nav.Link>
                                        <Nav.Link
                                            as="button"
                                            eventKey="nav-received"
                                        >
                                            Received
                                        </Nav.Link>
                                    </Nav>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <TabContent className="tab-content rn-bid-content">
                        <TabPane
                            className="row d-flex g-5"
                            eventKey="nav-donated"
                        >
                            {organization?.donatedItems?.map((transaction) => {
                                const address = bufferToWalletAddress(
                                    transaction?.donee?.contractAddress?.data
                                );
                                // const profileImage = transaction?.donee
                                //     ? `${ASSET_VIEW}/${address}/${transaction?.donee?.profileImage}`
                                //     : "/images/portfolio/rahat.jpeg";
                                return (
                                    <div
                                        key={transaction.id}
                                        className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                                    >
                                        <Card
                                            cover={
                                                transaction?.donee?.profileImage
                                            }
                                            address={address}
                                            name={transaction.donee.name}
                                            category={transaction.status}
                                            country={"Nepal"}
                                            currency={"$"}
                                            fundRaisedLocal={transaction.amount}
                                        />
                                    </div>
                                );
                            })}
                        </TabPane>
                        <TabPane
                            className="row d-flex g-5"
                            eventKey="nav-received"
                        >
                            {organization?.receivedItems?.map((transaction) => {
                                const address = bufferToWalletAddress(
                                    transaction?.donor?.contractAddress?.data
                                );
                                // const profileImage = transaction?.donor
                                //     ? `${ASSET_VIEW}/${address}/${transaction?.donor?.profileImage}`
                                //     : "/images/portfolio/rahat.jpeg";
                                return (
                                    <div
                                        key={transaction.id}
                                        className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                                    >
                                        <Card
                                            cover={
                                                transaction?.donor?.profileImage
                                            }
                                            address={address}
                                            name={transaction.donor.name}
                                            category={transaction.status}
                                            country={"Nepal"}
                                            currency={"$"}
                                            fundRaisedLocal={transaction.amount}
                                        />
                                    </div>
                                );
                            })}
                        </TabPane>
                    </TabContent>
                </div>
            </TabContainer>
        </div>
    );
};

// AuthorProfileArea.propTypes = {
//     className: PropTypes.string,
//     data: PropTypes.shape({
//         products: PropTypes.arrayOf(ProductType),
//     }),
// };

export default AuthorProfileArea;
