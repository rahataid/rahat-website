import Sticky from "@ui/sticky";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import { useDispatch } from "react-redux";
import Projects from "./communityProject";

const EditProfile = ({ community, id, projects }) => {
    const dispatch = useDispatch();
    const [eventKey, setEventKey] = useState("nav-homes");
    console.log(projects);
    const changeTab = (event) => {
        setEventKey(event);
    };

    return (
        <div className="rn-authore-profile-area">
            <TabContainer defaultActiveKey="nav-home">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Sticky>
                                <div className="tab-wrapper-one">
                                    <nav className="tab-button-one">
                                        <Nav className="nav nav-tabs ">
                                            <Nav.Link
                                                eventKey="nav-homes"
                                                as="button"
                                                onClick={() => changeTab("nav-homes")}
                                            >
                                                About Us
                                            </Nav.Link>
                                            <Nav.Link
                                                eventKey="nav-projects"
                                                as="button"
                                                onClick={() =>
                                                    changeTab("nav-projects")
                                                }
                                            >
                                                Impact Metrics
                                            </Nav.Link>
                                            <Nav.Link
                                                eventKey="nav-contact"
                                                as="button"
                                                onClick={() => changeTab("nav-contact")}
                                            >

                                                Photos
                                            </Nav.Link>
                                            <Nav.Link
                                                eventKey="nav-contact"
                                                as="button"
                                                onClick={() => changeTab("nav-contact")}
                                            >

                                                Contact Us
                                            </Nav.Link>
                                        </Nav>
                                    </nav>
                                </div>

                                {/* About area Cards */}
                                {/* <AboutArea community={community} /> */}
                            </Sticky>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <TabContent className="tab-content-edit-wrapepr">
                                <TabPane eventKey="nav-home">
                                    {/* <EditProfileImage /> */}
                                    <h3>{community?.title}</h3>
                                    <h6>{community?.description}</h6>
                                </TabPane>
                                <TabPane eventKey="nav-homes">
                                    {/* <PersonalInformation /> */}
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                    <h3>cards</h3>
                                </TabPane>
                                <TabPane eventKey="nav-projects">
                                    {/* <ChangePassword /> */}
                                    <Projects projects={projects} />
                                </TabPane>
                                <TabPane eventKey="nav-contact">
                                    {/* <NotificationSetting /> */}
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </TabContainer>
        </div>
    );
};
export default EditProfile;
