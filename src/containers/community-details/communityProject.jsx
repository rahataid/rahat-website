import Image from "next/image";

const Projects = ({ className, projects, id }) => {
    return (
        <div id={id}>
            {/* <Fragment>
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
            </Fragment> */}
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="section-title mt--100 mb--30 text-center">
                            <h2 className="title">Photos</h2>
                            <p className="description">
                                There are many variations of passages of Lorem Ipsum
                                available, <br /> but the majority have suffered
                                alteration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--20">
                        <Image
                            src={"/images/portfolio/tayaba.png"}
                            alt={"NFT_portfolio"}
                            width={533}
                            height={533}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

Projects.defaultProps = {
    space: 1,
};

export default Projects;
