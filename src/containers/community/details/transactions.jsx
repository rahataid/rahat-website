import TransactionCard from "@components/donations-list";
import clsx from "clsx";

const CommunityTransactions = ({ space, className, data }) => {

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
                    {data.map((index) => (
                        <div key={index} className="col-lg-12 mb_dec--15">
                            <TransactionCard
                                donorImg={data.donorImg}
                                donorName={data.donorName}
                                description={data.description}
                                date={data.date}
                                status={data.status}
                                amount={data.amount}
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
