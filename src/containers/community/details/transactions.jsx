import Activity from "@components/activity";
import clsx from "clsx";

const CommunityTransactions = ({ space, className, data }) => {

    return (
        <div
            className={clsx(
                "rn-activity-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row">
                    <h3 className="title">Transactions</h3>
                </div>
                <div className="row g-6 activity-direction">
                    {data.map((transaction, index) => (
                        <div key={index} className="col-lg-12 mb_dec--15">
                            <Activity
                                data={transaction}
                                status="offer" // Provide the appropriate status prop
                            />
                        </div>
                    ))}
                </div >
            </div >
        </div >
    );
};

CommunityTransactions.defaultProps = {
    space: 1,
};

export default CommunityTransactions;
