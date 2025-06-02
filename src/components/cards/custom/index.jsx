import Image from "next/image";
import PropTypes from "prop-types";

const CustomCard = ({ title, thumbnail, children }) => {
    return (
        <div
            className="card p-4 h-100 rounded-4 border-0 shadow-sm"
            style={{
                width: "420px",
                height: "200px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                borderRadius: "1.5rem",
            }}
        >
            <div className="mb-3">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={200}
                    height={100}
                    className="w-100 rounded"
                    style={{ objectFit: "cover" }}
                    priority
                />
            </div>

            <h5 className="mb-3 fw-semibold">
                {title}
                <p
                    className="text-muted"
                    style={{ lineHeight: "1.6", fontSize: "15px" }}
                ></p>
            </h5>

            {children}
        </div>
    );
};

CustomCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default CustomCard;
