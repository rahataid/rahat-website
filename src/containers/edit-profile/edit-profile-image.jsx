/* eslint-disable @next/next/no-img-element */
import Activity from "@components/activity";
import Image from "next/image";

const EditProfileImage = () => {


    return (
        <>
            <div className="nuron-information">
                <div className="profile-change">
                    <div className="profile-left col-lg-4">
                        <div className="profile-image mb--30">
                            <h6 className="title">Donor Information</h6>
                            <div className="img-wrap">
                                <Image
                                    id="rbtinput1"
                                    src="/images/profile/pepsico.png"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            </div>
                            <h6 className="title">PepsiCo</h6>
                            <span className="latest-bid">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas
                            </span>
                        </div>
                        <div className="button-area">
                            <div className="brows-file-wrapper">
                                <label htmlFor="fatima" title="No File Choosen">
                                    <span className="text-center color-white">
                                        More Info
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="profile-left col-lg-4">
                        <div className="profile-image mb--30">
                            <h6 className="title">Beneficiary Information</h6>
                            <div className="img-wrap">
                                <Image
                                    id="rbtinput1"
                                    src="/images/portfolio/oxfam.jpeg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            </div>
                            <h6 className="title">Oxfam</h6>
                            <span className="latest-bid">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas
                            </span>
                        </div>
                        <div className="button-area">
                            <div className="brows-file-wrapper">
                                <label htmlFor="fatima" title="No File Choosen">
                                    <span className="text-center color-white">
                                        More Info
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt--30">
                <Activity />
            </div>

        </>

    );
};

export default EditProfileImage;
