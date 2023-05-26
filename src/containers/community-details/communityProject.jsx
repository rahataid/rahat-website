import clsx from "clsx";
import { Fragment } from "react";

const Projects = ({ className, projects }) => {
    console.log(projects);
    return (
        <Fragment>
            {projects?.map((project, index) => {
                <div
                    className={clsx("rn-about-card mt--30", className)}
                    key={index}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="about-wrapper">
                                    <h5>{project?.name}</h5>

                                    <hr className="mt--30" />
                                    <p className="discription">
                                        {project?.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
            })}
        </Fragment>
    );
};

Projects.defaultProps = {
    space: 1,
};

export default Projects;
