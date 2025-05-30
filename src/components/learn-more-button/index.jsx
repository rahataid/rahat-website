import Link from "next/link";
import { useState } from "react";

const LearnMoreButton = ({ linkTo }) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <Link
            href={linkTo}
            target="_blank"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
                color: isHover ? "#000000" : "#2B7EC1",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.3s ease",
            }}
        >
            Learn More
            <i
                className="feather-chevrons-right"
                style={{
                    transition: "transform 0.2s ease",
                    fontSize: "16px",
                    position: "relative",
                    top: "0.5px",
                }}
            ></i>
        </Link>
    );
};

export default LearnMoreButton;
