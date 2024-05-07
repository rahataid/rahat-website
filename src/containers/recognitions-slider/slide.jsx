import PropTypes from "prop-types";
import Image from "next/image";
import { ImageType } from "@utils/types";

const Portfolio = ({ title, author, path, image }) => (
    <div className="slider-thumbnail thumbnail-overlay">
        {image?.src && (
            <Image
                className="w-100"
                src={image.src}
                alt={image?.alt || "recognitons images"}
                width={image?.width || 658}
                height={image?.height || 615}
                priority
            />
        )}
    </div>
);

Portfolio.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
    path: PropTypes.string.isRequired,
    image: ImageType.isRequired,
};

export default Portfolio;

