import CommunityChart from "@containers/community/details/impact-metrics";
import Statistics from "@containers/community/details/statistics";
import Transactions from "@containers/community/details/transactions";
import { useRouter } from "next/router";
import transaction from "../../../data/temp_community_transactions.json";
import CommunityDescription from "./description";
import CommunityPhotos from "./photos";

const CommunityDetails = ({ community, transactions }) => {

    return (
        <div className="rn-authore-profile-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-9 col-sm-12 mt_sm--30">
                        <CommunityDescription community={community} />
                        <Statistics community={community} />
                        <Transactions data={transactions} />
                        <CommunityChart community={community} />
                        <CommunityPhotos community={community} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CommunityDetails;
