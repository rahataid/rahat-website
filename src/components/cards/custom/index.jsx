import Image from "next/image";
import styles from "./index.module.css";

const CustomCard = ({ title, thumbnail, children }) => {
    return (
        <div
            className="card shadow-sm h-100 border-0"
            style={{
                flexGrow: 1,
                borderRadius: "1.5rem",
                padding: "2rem",
                overflow: "hidden",
            }}
        >
            <div className="thumbnail mb-3">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={489}
                    height={300}
                    className={styles.custom_card_image}
                    priority
                />
            </div>

            <h5
                className="mb-3 fw-semibold"
                style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {title}
            </h5>

            <div className="mt-auto">{children}</div>
        </div>
    );
};

export default CustomCard;
