import clsx from "clsx";
import PropTypes from "prop-types";

const AboutArea = ({ className, community }) => (
    <div className={clsx("rn-about-card mt--30", className)}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-wrapper">
                        <h5>{community?.title}</h5>
                        <p className="discription">{community?.title}</p>
                        <hr className="mt--30" />
                        <p className="discription">{community?.description}</p>
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
