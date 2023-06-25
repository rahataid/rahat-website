import TransactionCard from "@components/cards/transaction";
import clsx from "clsx";

const CommunityTransactions = ({ space, className, data }) => {
    console.log("data", data);
    return (
        <div
            className={clsx(
                "rn-Transaction-area",
                space === 1 && "rn-section-gapTop",
                className
            )}
        >
            <div className="container">
                <div className="row">
                    <h3 className="title">Funds Distributed</h3>
                </div>
                <div className="row g-6 activity-direction">
                    {data.map((d, index) => (
                        <div key={index} className="col-lg-12 mb_dec--15">
                            <TransactionCard data={d} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

CommunityTransactions.defaultProps = {
    space: 1,
};

export default CommunityTransactions;
