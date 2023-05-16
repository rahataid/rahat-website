import clsx from "clsx";
import PropTypes from "prop-types";

const AboutArea = ({ className, space, data }) => (
    <div
        className={clsx(
            "rn-about-card mt--30",
            className
        )}
    >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-wrapper">
                        <h5>Rumsan</h5>
                        <p className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae aperiam</p>
                        <hr className="mt--30" />
                        <p className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae aperiam, nulla dicta id tenetur hic inventore eveniet maiores mollitia, voluptatum dolore soluta, voluptate vel error sed incidunt libero dolor!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

AboutArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
    }),
};

AboutArea.defaultProps = {
    space: 1,
};

export default AboutArea;
