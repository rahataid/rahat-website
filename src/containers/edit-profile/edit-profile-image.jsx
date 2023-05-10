/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

const EditProfileImage = () => {
    const [selectedImage, setSelectedImage] = useState({
        profile: "",
        cover: "",
    });
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage((prev) => ({
                ...prev,
                [e.target.name]: e.target.files[0],
            }));
        }
    };

    return (
        <div className="nuron-information">
            <div className="profile-change">
                <div className="profile-left col-lg-4">
                    <div className="profile-image mb--30">
                        <h6 className="title">Donor Information</h6>
                        <div className="img-wrap">
                            {selectedImage?.profile ? (
                                <img
                                    src={URL.createObjectURL(
                                        selectedImage.profile
                                    )}
                                    alt=""
                                    data-black-overlay="6"
                                />
                            ) : (
                                <Image
                                    id="rbtinput1"
                                    src="/images/profile/profile-01.jpg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            )}
                        </div>
                        <h6 className="title">PepsiCo</h6>
                        <span className="latest-bid">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas
                        </span>
                    </div>
                    <div className="button-area">
                        <div className="brows-file-wrapper">
                            <input
                                name="profile"
                                id="fatima"
                                type="file"
                                onChange={imageChange}
                            />
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
                            {selectedImage?.profile ? (
                                <img
                                    src={URL.createObjectURL(
                                        selectedImage.profile
                                    )}
                                    alt=""
                                    data-black-overlay="6"
                                />
                            ) : (
                                <Image
                                    id="rbtinput1"
                                    src="/images/profile/profile-01.jpg"
                                    alt="Profile-NFT"
                                    layout="fill"
                                />
                            )}
                        </div>
                        <h6 className="title">Oxfam</h6>
                        <span className="latest-bid">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis suscipit quas
                        </span>
                    </div>
                    <div className="button-area">
                        <div className="brows-file-wrapper">
                            <input
                                name="profile"
                                id="fatima"
                                type="file"
                                onChange={imageChange}
                            />
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
    );
};

export default EditProfileImage;
