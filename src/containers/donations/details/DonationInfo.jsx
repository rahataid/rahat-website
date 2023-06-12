/* eslint-disable @next/next/no-img-element */
const DonationInfo = ({ donation, id }) => {
    console.log("donation", donation);
    return (
        <>
            <div id={id} className="login-area message-area">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12">
                            <div className="rn-address">
                                <div className="inner">
                                    <div>
                                        {donation?.donor?.name} to{" "}
                                        {donation?.donee?.name}
                                        {/* <p style={{ padding: "1rem 0" }}>
                                            Managed By:{" "}
                                            {donation.managers.join(",")}
                                        </p> */}
                                        {/* {donation.tags?.map((tag) => (
                                            <div
                                                className="pill mb--15 mr--5"
                                                key={tag.id}
                                                type="button"
                                            >
                                                {tag.name}
                                            </div>
                                        ))} */}
                                    </div>
                                    <p>{donation?.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DonationInfo;
