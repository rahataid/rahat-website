import Contact from "@containers/edit-profile/contact";
import EditProfileImage from "@containers/edit-profile/edit-profile-image";
import PersonalInformation from "@containers/edit-profile/personal-information";
import Statistics from "@containers/edit-profile/statistics";
import { useState } from "react";
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
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <EditProfileImage id="about" community={community} />
                        <Statistics community={community} />
                        <PersonalInformation community={community} id='impact' />
                        <Projects id='photos' projects={projects} />
                        <Contact id='contact' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;
