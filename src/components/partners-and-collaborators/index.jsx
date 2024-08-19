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
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/team-unicef-rahat-logo.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/mit-solve-logo-about-us.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.net/rumsan-group/gsr-foundation-rahat-partner.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://assets.rumsan.net/rumsan-group/circle-rahat-partner.png"
                        alt="Icon 1"
                    />
                </div>

                <div style={iconItemStyles}>
                    <a href="https://bc100plus.org/" target="_blank">
                        <img
                            src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/bc100-icon.png"
                            alt="Icon 1"
                        />
                    </a>
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-calp-network.png"
                        alt="Icon 1"
                    />
                </div>
            </div>
            <div style={iconStyles}>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/team-rahat-usaid-logo.png"
                        alt="Icon 1"
                    />
                </div>
                {/* <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-ccg.png"
                        alt="Icon 1"
                    />
                </div> */}
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-nrcs.png"
                        alt="Icon 1"
                    />
                </div>

                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/team-rahat-collab-partner.png"
                        alt="Icon 2"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/partners-and-collab-tayaba.png"
                        alt="Icon 3"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/village-capital-collab-logo.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/team-dpc-rahat-logo.png"
                        alt="Icon 1"
                    />
                </div>
            </div>
            <div style={iconStyles}>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/team-g20-logo-rahat.png"
                        alt="Icon 1"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/leo-partner-collab-team-rahat.png"
                        alt="Icon 5"
                    />
                </div>

                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/somlang-rahat-logo-partner-collab.png"
                        alt="Icon 7"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/esatya/srso-team-rahat-partner-collab.png"
                        alt="Icon 8"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="/images/logo/GSMA-Logo-Red-RGB.png"
                        alt="Icon 9"
                    />
                </div>
                <div style={iconItemStyles}>
                    <img
                        src="https://rumsan.nyc3.cdn.digitaloceanspaces.com/rumsan-group/google-startup-logo.png"
                        alt="Icon 1"
                    />
                </div>
            </div>
        </div>
    );
};

export default PartnersAndCollab;

