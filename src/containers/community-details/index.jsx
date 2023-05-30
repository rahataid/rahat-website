import EditProfileImage from "@containers/edit-profile/edit-profile-image";
import Sticky from "@ui/sticky";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
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
            <div className="container">
                <Sticky>
                    <div className="row rbt-sticky-top-adjust-five">
                        <div className="col-12">
                            <div className="tab-wrapper-one">
                                <nav className="tab-button-one">
                                    <div className="nav nav-tabs ">
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
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Sticky>
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <EditProfileImage community={community} />
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
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;
