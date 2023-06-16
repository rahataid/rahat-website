import Image from "next/image"

const Summary = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="rn-about-card  d-flex justify-content-between align-items-center">
                    <div className="col-lg-4 col-md-12 col-12 text-center">
                        <Image
                            className="mb--15"
                            src={'/images/portfolio/rahat.jpeg'}
                            width={140}
                            height={140}
                        />
                        <h6>Donor Name</h6>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odit nesciunt, ad ullam dolorem sequi sed, numquam consequuntur officia, sunt voluptatem quis soluta accusantium? Consequatur non libero hic nisi exercitationem!
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 text-center">
                        <Image
                            className="mb--15"
                            src={'/images/portfolio/rahat.jpeg'}
                            width={140}
                            height={140}
                        />
                        <h6>Donee Name</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summary
