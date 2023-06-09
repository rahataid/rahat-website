import Activity from "@components/activity";
import clsx from "clsx";
import { useState } from "react";
import transactions from "../../data/transactions.json";

const Transactions = ({ space, className, data }) => {
    const [activities, setActivities] = useState(data?.activities || []);

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
                    <div className="col-lg-12 mb_dec--15">
                        <Activity data={{ transactions: transactions }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

Transactions.defaultProps = {
    space: 1,
};

export default ActivityArea;
