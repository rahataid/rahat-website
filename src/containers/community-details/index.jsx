import EditProfileImage from "@containers/edit-profile/edit-profile-image";
import PersonalInformation from "@containers/edit-profile/personal-information";
import Statistics from "@containers/edit-profile/statistics";
import Transactions from "@containers/edit-profile/transactions";
import data from "../../data/innerpages/temp_community_transactions.json";
import CommunityPhotos from "./photos";

const EditProfile = ({ community }) => {
    const transaction = data.filter(
        (transaction) =>
            transaction.donor.address === community.address ||
            transaction.donee.address === community.address
    );
    return (
        <div className="rn-authore-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <EditProfileImage community={community} />
                        <Statistics community={community} />
                        <PersonalInformation community={community} />
                        <CommunityPhotos community={community} />
                        <Transactions data={transaction} />
                        {/* <Contact /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EditProfile;
