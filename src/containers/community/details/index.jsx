import CommunityChart from "@containers/community/details/impact-metrics";
import Statistics from "@containers/community/details/statistics";
import CommunityDescription from "./description";
import CommunityPhotos from "./photos";
import CommunityTransactions from "./transactions";

const CommunityDetails = ({ community, transactions }) => {
    return (
        <div className="rn-authore-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <CommunityDescription community={community} />
                        <Statistics community={community} />
                        <CommunityTransactions data={transactions} />
                        <CommunityChart community={community} />
                        <CommunityPhotos community={community} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CommunityDetails;
