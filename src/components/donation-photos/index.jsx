import Image from "next/image";

const DonationPhotos = ({ className, community, id }) => {
    return (
        <div id={id}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            className="grid-img"
                            src={'/images/portfolio/tayaba.png'}
                            alt={`Donation Image`}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            className="grid-img"
                            src={'/images/portfolio/tayaba.png'}
                            alt={`Donation Image`}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            className="grid-img"
                            src={'/images/portfolio/tayaba.png'}
                            alt={`Donation Image`}
                            width={533}
                            height={533}
                        />
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <Image
                            className="grid-img"
                            src={'/images/portfolio/tayaba.png'}
                            alt={`Donation Image`}
                            width={533}
                            height={533}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationPhotos.defaultProps = {
    space: 1,
};

export default DonationPhotos;
