import Anchor from "@ui/anchor";
import React, { useState } from "react";

const ReadMoreBtn = ({ linkTo }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        color: isHover ? "#2B7EC1" : "#231F20",
    };

    return (
        <Anchor
            path={linkTo}
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <span style={{ fontSize: "14px" }}>Read More</span>
            <i
                className="feather-chevrons-right"
                style={{
                    fontSize: "16px",
                    padding: "5px",
                    position: "relative",
                    top: "2.5px",
                }}
            />
        </Anchor>
    );
};

export default ReadMoreBtn;

