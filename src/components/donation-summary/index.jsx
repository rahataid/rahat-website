import Timeline from "@components/timeline";
import { selectSingleDonation } from "@redux/slices/donation";
import Image from "next/image";
import { useSelector } from "react-redux";

const Summary = () => {
    const donation = useSelector(selectSingleDonation);
    console.log("donations", donation);
    return (
        <div className="container">
            <div className="row">
                <div className="rn-about-card  d-flex justify-content-between align-items-center">
                    <div className="col-lg-4 col-md-12 col-12 text-center">
                        <Image
                            className="mb--15"
                            src={"/images/portfolio/rahat.jpeg"}
                            width={140}
                            height={140}
                        />
                        <h6>{donation?.donor?.name}</h6>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        <Timeline />
                        <p
                            className="text-center"
                            style={{ marginBottom: "5px" }}
                        >
                            Transaction Hash: 0xsjl02323020g0240v0240c3732
                        </p>
                        <p
                            className="text-center"
                            style={{ marginBottom: "5px" }}
                        >
                            Date: 23 June 2023
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 text-center">
                        <Image
                            className="mb--15"
                            src={"/images/portfolio/rahat.jpeg"}
                            width={140}
                            height={140}
                            hideControls={true}
                        />
                        <h6>Donee Name</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="rn-about-card d-flex justify-content-center align-items-center">
                    <div className="col-12">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Error odit nesciunt, ad ullam dolorem sequi
                            sed, numquam consequuntur officia, sunt voluptatem
                            quis soluta accusantium? Consequatur non libero hic
                            nisi exercitationem!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
