import CommunityChart from "@containers/community-details/communitycharts";

const PersonalInformation = ({ id, community }) => (
    <div id={id} className="container">
        <div className="row g-5">
            <div className="col-lg-12">
                <div className="section-title mt--100 mb--30 text-left">
                    <h2 className="title">Impact Metrics</h2>
                    <p className="description">
                        There are many variations of passages of Lorem Ipsum
                        available, <br /> but the majority have suffered
                        alteration.
                    </p>
                </div>
            </div>
        </div>
        <div className="row">
            <CommunityChart community={community} />
        </div>
    </div>
);

export default PersonalInformation;
