import PersonalInformation from "@containers/edit-user/edit-personal-information";
import EditProfileImage from "@containers/edit-user/edit-profile-image";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Sticky from "@ui/sticky";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";


const EditProfile = () => (
    <Wrapper>
        <Header />
        <div className="edit-profile-area rn-section-gapTop">
            <div className="container">
                <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                    <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                        <h4 className="title-left">Edit Your Profile</h4>
                    </div>
                </div>
                <TabContainer defaultActiveKey="nav-home">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <Sticky>
                                <nav className="left-nav rbt-sticky-top-adjust-five">
                                    <Nav className="nav nav-tabs">
                                        <Nav.Link eventKey="nav-home" as="button">
                                            <i className="feather-edit" />
                                            Edit Profile Image
                                        </Nav.Link>
                                        <Nav.Link eventKey="nav-homes" as="button">
                                            <i className="feather-user" />
                                            Personal Information
                                        </Nav.Link>
                                    </Nav>
                                </nav>
                            </Sticky>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <TabContent className="tab-content-edit-wrapepr">
                                <TabPane eventKey="nav-home">
                                    <EditProfileImage />
                                </TabPane>
                                <TabPane eventKey="nav-homes">
                                    <PersonalInformation />
                                </TabPane>
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
