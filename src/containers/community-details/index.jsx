import Contact from "@containers/edit-profile/contact";
import EditProfileImage from "@containers/edit-profile/edit-profile-image";
import PersonalInformation from "@containers/edit-profile/personal-information";
import Statistics from "@containers/edit-profile/statistics";
import Sticky from "@ui/sticky";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-scroll";
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
                                        <Link
                                            activeClass="active"
                                            className="nav-link smoth-animation"
                                            href={`#about`}
                                            to={'about'}
                                            spy
                                            smooth
                                            offset={-200}
                                            duration={500}
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            className="nav-link smoth-animation"
                                            href={`#impact`}
                                            to={'impact'}
                                            spy
                                            smooth
                                            offset={-80}
                                            duration={500}
                                        >
                                            Impact Metrics
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            className="nav-link smoth-animation"
                                            href={`#photos`}
                                            to={'photos'}
                                            spy
                                            smooth
                                            offset={-100}
                                            duration={500}
                                        >

                                            Photos
                                        </Link>
                                        <Link
                                            activeClass="active"
                                            className="nav-link smoth-animation"
                                            href={`#contact`}
                                            to={'contact'}
                                            spy
                                            smooth
                                            offset={-200}
                                            duration={500}
                                        >

                                            Contact Us
                                        </Link>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Sticky>
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <EditProfileImage id='about' community={community} />
                        <Statistics community={community} />
                        <PersonalInformation id='impact' />
                        <Projects id='photos' projects={projects} />
                        <Contact id='contact' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;
