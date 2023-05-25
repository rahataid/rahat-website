/* eslint-disable @next/next/no-img-element */
import ProductModal from "@components/modals/product-modal";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateNewArea = ({ className, space }) => {
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);
    const [previewData, setPreviewData] = useState({});

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    const notify = () => toast("Your product has submitted");
    const handleProductModal = () => {
        setShowProductModal(false);
    };

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const onSubmit = (data, e) => {
        const { target } = e;
        const submitBtn =
            target.localName === "span" ? target.parentElement : target;
        const isPreviewBtn = submitBtn.dataset?.btn;
        setHasImageError(!selectedImage);
        if (isPreviewBtn && selectedImage) {
            setPreviewData({ ...data, image: selectedImage });
            setShowProductModal(true);
        }
        if (!isPreviewBtn) {
            notify();
            reset();
            setSelectedImage();
        }
    };
    return (
        <>
            <div
                className={clsx(
                    "create-area",
                    space === 1 && "rn-section-gapTop",
                    className
                )}
            >
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
                                <div className="upload-area">
                                    <div className="upload-formate mb--30">
                                        <h6 className="title">Upload file</h6>
                                        <p className="formate">
                                            Drag or choose your file to upload
                                        </p>
                                    </div>

                                    <div className="brows-file-wrapper">
                                        <input
                                            name="file"
                                            id="file"
                                            type="file"
                                            className="inputfile"
                                            data-multiple-caption="{count} files selected"
                                            multiple
                                            onChange={imageChange}
                                        />
                                        {selectedImage && (
                                            <img
                                                id="createfileImage"
                                                src={URL.createObjectURL(
                                                    selectedImage
                                                )}
                                                alt=""
                                                data-black-overlay="6"
                                            />
                                        )}

                                        <label
                                            htmlFor="file"
                                            title="No File Choosen"
                                        >
                                            <i className="feather-upload" />
                                            <span className="text-center">
                                                Choose a File
                                            </span>
                                            <p className="text-center mt--10">
                                                PNG, GIF, WEBP, MP4 or MP3.{" "}
                                                <br /> Max 1Gb.
                                            </p>
                                        </label>
                                    </div>
                                    {hasImageError && !selectedImage && (
                                        <ErrorText>Image is required</ErrorText>
                                    )}
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="form-wrapper-one">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    Name
                                                </label>
                                                <input
                                                    id="name"
                                                    placeholder="e. g. `Digital Awesome Game`"
                                                    {...register("name", {
                                                        required:
                                                            "Name is required",
                                                    })}
                                                />
                                                {errors.name && (
                                                    <ErrorText>
                                                        {errors.name?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="email"
                                                    className="form-label"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    placeholder="e. g. `Digital Awesome Game`"
                                                    {...register("email", {
                                                        required:
                                                            "Email is required",
                                                    })}
                                                />
                                                {errors.name && (
                                                    <ErrorText>
                                                        {errors.email?.message}
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="Discription"
                                                    className="form-label"
                                                >
                                                    Description
                                                </label>
                                                <textarea
                                                    id="discription"
                                                    rows="5"
                                                    placeholder="e. g. “After purchasing the product you can get item...”"
                                                    {...register(
                                                        "discription",
                                                        {
                                                            required:
                                                                "Description is required",
                                                        }
                                                    )}
                                                />
                                                {errors.discription && (
                                                    <ErrorText>
                                                        {
                                                            errors.discription
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-xl-4">
                                            <div className="input-box">
                                                <Button type="submit" fullwidth>
                                                    Continue
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            {showProductModal && (
                <ProductModal
                    show={showProductModal}
                    handleModal={handleProductModal}
                    data={previewData}
                />
            )}
        </>
    );
};

CreateNewArea.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

CreateNewArea.defaultProps = {
    space: 1,
};

export default CreateNewArea;

