import Contact from "@containers/edit-profile/contact";
import EditProfileImage from "@containers/edit-profile/edit-profile-image";
import PersonalInformation from "@containers/edit-profile/personal-information";
import Statistics from "@containers/edit-profile/statistics";
import CommunityPhotos from "./photos";

const EditProfile = ({ community }) => {
    return (
        <div className="rn-authore-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <EditProfileImage community={community} />
                        <Statistics community={community} />
                        <PersonalInformation community={community} />
                        <CommunityPhotos community={community} />
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;
