import Activity from "@components/activity";
import SEO from "@components/seo";
import Footer from "@layout/footer/footer-01";
import Header from "@layout/header/header-01";
import Wrapper from "@layout/wrapper";
import { donationDetails } from "@redux/slices/donation";
import { wrapper } from "@redux/store";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import EditProfileImage from "../../../containers/edit-profile/edit-profile-image";

const EditProfile = ({ donations }) => (
    <Wrapper>
        <SEO pageTitle="Donation Details" />
        <Header />
        <div className="edit-profile-area mt--50">
            <div className="container">
                <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                    <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                        <h4 className="title-left">Donation Details</h4>
                    </div>
                </div>
                <TabContainer defaultActiveKey="nav-home">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-12 col-md-12 col-sm-12 mt_sm--30">
                            <TabContent className="tab-content-edit-wrapepr">
                                <TabPane eventKey="nav-home">
                                    <EditProfileImage donations={donations} />
                                </TabPane>
                                <Activity donations={donations} />
                            </TabContent>
                        </div>
                    </div>
                </TabContainer>
            </div>
        </div>
        <Footer />
    </Wrapper>
);

export default EditProfile;
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async ({ query }) => {
        await store.dispatch(donationDetails(query?.id));
        const serializedDonations = store.getState().donation.donation;
        console.log(serializedDonations);
        const serializedError = store.getState().donation.error;
        return {
            props: {
                donations: serializedDonations,
                error: serializedError,
            },
        };
    }
);