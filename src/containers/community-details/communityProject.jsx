import clsx from "clsx";
import { Fragment } from "react";

const Projects = ({ className, projects }) => {
    return (
        <Fragment>
            <div className={clsx("rn-about-card mt--30", className)}>
                <div className="container">
                    {projects?.map(({ projects }, index) => (
                        <div className="row" key={`${projects?.id}-${index}`}>
                            <div className="col-12">
                                <div className="about-wrapper">
                                    <h5>{projects?.name}</h5>

                                    <hr className="mt--30" />
                                    <p className="discription">
                                        {projects?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

Projects.defaultProps = {
    space: 1,
};

export default Projects;
