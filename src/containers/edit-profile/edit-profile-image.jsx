/* eslint-disable @next/next/no-img-element */

import Image from "next/image";

const EditProfileImage = ({ community, id }) => {
    return (
        <>
            <div id={id} className="login-area message-area">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-6">
                            <div className="rn-address">
                                <div className="inner">
                                    <h4 className="title">{community.title}</h4>
                                    <p>{community.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="connect-thumbnail">
                                <div className="left-image">
                                    <Image
                                        src="/images/portfolio/maps.jpg"
                                        alt="Nft_Profile"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default EditProfileImage;
