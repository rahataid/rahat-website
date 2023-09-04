import React from "react";

const iconStyles = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
};

const iconItemStyles = {
    width: "130px" /* Adjust the width of the icon container */,
    // height: "100px" /* Adjust the height of the icon container */,
    margin: "10px" /* Adjust the margin between icons */,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};
const PartnersAndCollab = () => {
    return (
        <div className="mb-5">
            <div style={iconStyles}>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/team-unicef-rahat-logo.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/team-dpc-rahat-logo.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/team-eth-foundation-logo.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <a href="https://bc100plus.org/" target="_blank">
                        <img
                            src="https://assets.rumsan.com/rumsan-group/bc100-icon.png"
                            alt="Icon 1"
                        />
                    </a>
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/team-g20-logo-rahat.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/team-rahat-usaid-logo.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-calp-network.png"
                        alt="Icon 1"
                    />
                </div>
            </div>
            <div style={iconStyles}>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-ccg.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-nrcs.png"
                        alt="Icon 1"
                    />
                </div>

                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/team-rahat-collab-partner.png"
                        alt="Icon 2"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/rumsan-group/partners-and-collab-tayaba.png"
                        alt="Icon 3"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/leo-partner-collab-team-rahat.png"
                        alt="Icon 5"
                    />
                </div>

                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/somlang-rahat-logo-partner-collab.png"
                        alt="Icon 7"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.com/esatya/srso-team-rahat-partner-collab.png"
                        alt="Icon 8"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnersAndCollab;

