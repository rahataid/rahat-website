import React from "react";

const iconStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
};

const iconItemStyles = {
    // width: "100px" /* Adjust the width of the icon container */,
    // height: "100px" /* Adjust the height of the icon container */,
    // margin: "10px" /* Adjust the margin between icons */,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const CollabAndPartners = () => {
    return (
        <div className="mb-5">
            <div className="row">
                <div className="col-3">
                    <div style={iconStyles}>
                        <div style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/team-unicef-rahat-logo.png"
                                alt="Icon 1"
                            />
                        </div>
                    </div>
                    <div className="mt-3" style={iconItemStyles}>
                        <img
                            src="https://assets.rumsan.com/esatya/team-g20-logo-rahat.png"
                            alt="Icon 1"
                        />
                    </div>
                    <div className="mt-3" style={iconItemStyles}>
                        <img
                            src="https://assets.rumsan.com/rumsan-group/partners-and-collab-nrcs.png"
                            alt="Icon 1"
                        />
                    </div>
                </div>
                <div className="col-3">
                    <div style={iconStyles}>
                        <div style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/team-dpc-rahat-logo.png"
                                alt="Icon 1"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/team-rahat-usaid-logo.png"
                                alt="Icon 1"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/team-rahat-collab-partner.png"
                                alt="Icon 2"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/partners-and-collab-somleng.png"
                                alt="Icon 7"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div style={iconStyles}>
                        <div style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/team-eth-foundation-logo.png"
                                alt="Icon 1"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/partners-and-collab-calp-network.png"
                                alt="Icon 1"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/partners-and-collab-tayaba.png"
                                alt="Icon 3"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/srso-mobile-view-team.png"
                                alt="Icon 8"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div style={iconStyles}>
                        <div style={iconItemStyles}>
                            <a href="https://bc100plus.org/" target="_blank">
                                {" "}
                                <img
                                    src="https://assets.rumsan.com/rumsan-group/bc100-icon.png"
                                    alt="Icon 1"
                                />
                            </a>
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/rumsan-group/partners-and-collab-ccg.png"
                                alt="Icon 1"
                            />
                        </div>
                        <div className="mt-3" style={iconItemStyles}>
                            <img
                                src="https://assets.rumsan.com/esatya/leo-partner-collab-team-rahat.png"
                                alt="Icon 5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollabAndPartners;

