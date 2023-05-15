import AboutArea from "@containers/about/layout-01";
import Sticky from "@ui/sticky";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";

const EditProfile = () => (
    <div className="edit-profile-area">
        <div className="container">

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
                                    <Nav.Link
                                        eventKey="nav-profile"
                                        as="button"
                                    >
                                        <i className="feather-unlock" />
                                        Change Password
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="nav-contact"
                                        as="button"
                                    >
                                        <i className="feather-bell" />
                                        Notification Setting
                                    </Nav.Link>
                                </Nav>
                            </nav>
                        </Sticky>
                        {/* About area Cards */}
                        <AboutArea />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                        <TabContent className="tab-content-edit-wrapepr">
                            <TabPane eventKey="nav-home">
                                {/* <EditProfileImage /> */}
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                                <h3>Edit</h3>
                            </TabPane>
                            <TabPane eventKey="nav-homes">
                                {/* <PersonalInformation /> */}
                                <h3>cards</h3>
                            </TabPane>
                            <TabPane eventKey="nav-profile">
                                {/* <ChangePassword /> */}
                                <h3>password</h3>
                            </TabPane>
                            <TabPane eventKey="nav-contact">
                                {/* <NotificationSetting /> */}
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </TabContainer>
        </div>
    </div>
);

export default EditProfile;
