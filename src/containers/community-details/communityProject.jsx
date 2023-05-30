import clsx from "clsx";
import { Fragment } from "react";

const Projects = ({ className, projects, id }) => {
    return (
        <div id={id}>
            <Fragment>
                {projects?.map(({ projects }, index) => (
                    <div
                        className={clsx("rn-about-card mt--30", className)}
                        key={`${projects?.id}-${index}`}
                    >
                        <div className="container">
                            <div className="row">
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
                        </div>
                    </div>
                ))}
            </Fragment>
        </div>
    );
};

Projects.defaultProps = {
    space: 1,
};

export default Projects;
