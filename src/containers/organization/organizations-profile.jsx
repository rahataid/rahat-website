import Card from "@components/cards/community";
import clsx from "clsx";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";

const AuthorProfileArea = ({ className, organization }) => {
    // const onSaleProducts = shuffleArray(data.products).slice(0, 10);
    // const ownedProducts = shuffleArray(data.products).slice(0, 10);
    // const createdProducts = shuffleArray(data.products).slice(0, 10);

    return (
        <div className={clsx("rn-authore-profile-area", className)}>
            <TabContainer defaultActiveKey="nav-profile">
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
                                        {/* <Nav.Link
                                            as="button"
                                            eventKey="nav-received"
                                        >
                                            Photos
                                        </Nav.Link> */}
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
                            {organization?.donatedItems?.map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <Card
                                        cover={""}
                                        name={transaction.donee.name}
                                        category={transaction.status}
                                        country={"Nepal"}
                                        currency={"$"}
                                        fundRaisedLocal={transaction.amount}
                                    />
                                </div>
                            ))}
                        </TabPane>
                        {/* <TabPane
                            className="row g-5 d-flex"
                            eventKey="nav-received"
                        >
                            {ownedProducts?.map((prod) => (
                                <div
                                    key={prod.id}
                                    className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
                                >
                                    <Card
                                        cover={""}
                                        name={"Rahat"}
                                        category={"Senior Citizen"}
                                        country={"Nepal"}
                                        currency={"$"}
                                        fundRaisedLocal={"5000"}
                                    />
                                </div>
                            ))}
                        </TabPane> */}
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
