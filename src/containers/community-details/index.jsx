import AboutArea from "@containers/about/layout-01";
import { getCommunityProjects, selectProjects } from "@redux/slices/community";
import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import { useDispatch, useSelector } from "react-redux";
import Projects from "./communityProject";
import CommunityChart from "./communitycharts";

const EditProfile = ({ community, id, projects }) => {
    const dispatch = useDispatch();
    const [eventKey, setEventKey] = useState("nav-homes");
    console.log(projects);
    const changeTab = (event) => {
        setEventKey(event);
    };

    return (
        <div className="edit-profile-area">
            <div className="container">
                <TabContainer defaultActiveKey="nav-home">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <nav className="left-nav rbt-sticky-top-adjust-five">
                                <Nav className="nav nav-tabs">
                                    <Nav.Link
                                        eventKey="nav-homes"
                                        as="button"
                                        onClick={() => changeTab("nav-homes")}
                                    >
                                        <i className="feather-user" />
                                        Community Information
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="nav-projects"
                                        as="button"
                                        onClick={() =>
                                            changeTab("nav-projects")
                                        }
                                    >
                                        <i className="feather-book" />
                                        Projects
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey="nav-contact"
                                        as="button"
                                        onClick={() => changeTab("nav-contact")}
                                    >
                                        <i className="feather-bell" />
                                        Notification Setting
                                    </Nav.Link>
                                </Nav>
                            </nav>
                            {/* About area Cards */}
                            <AboutArea community={community} />
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
                                </TabPane>
                                <TabPane eventKey="nav-projects">
                                    {/* <ChangePassword /> */}
                                    <Projects projects={projects} />
                                </TabPane>
                                <TabPane eventKey="nav-contact">
                                    {/* <NotificationSetting /> */}
                                    <CommunityChart community={community} />
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </TabContainer>
            </div>
        </div>
    );
};
export default EditProfile;
