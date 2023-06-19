/* eslint-disable @next/next/no-img-element */
import ProductModal from "@components/modals/product-modal";
import { selectCommunities } from "@redux/slices/community";
import { addDonationTransaction } from "@redux/slices/donation";
import {
    getOrganizations,
    selectOrganizations,
} from "@redux/slices/organization";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AsyncSelect from "react-select/async";
const CreateNewArea = ({ className, space }) => {
    const dispatch = useDispatch();
    const organizations = useSelector(selectOrganizations);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [hasImageError, setHasImageError] = useState(false);
    const [previewData, setPreviewData] = useState({});
    const [organizationName, setOrganizationName] = useState("");
    const [organizationId, setOrganizationId] = useState(null);
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

    const options = async (inputValue, cb) => {
        await dispatch(getOrganizations({ name: inputValue }));

        setTimeout(() => {
            cb(
                organizations.map((data) => {
                    return { label: data.name, value: data.id };
                })
            );
            if (!organizations[0]) {
                setShowProductModal(true);
            }
        }, 1000);
    };

    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const handleOrganizationChange = (e) => {
        setOrganizationId(e.value);
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
        data.donorId = organizationId;
        dispatch(addDonationTransaction(data));
    };

    return (
        <>
            <div className={clsx("create-area mt--50", className)}>
                <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <h3 className="mb--25">Donation Form</h3>
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="form-wrapper-one">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="input-box pb--20">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    Organization Name
                                                </label>
                                                <AsyncSelect
                                                    id="donorId"
                                                    loadOptions={options}
                                                    onChange={
                                                        handleOrganizationChange
                                                    }
                                                />

                                                {/* {organizations.map((result) => (
                                                    <div
                                                        key={result.id}
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                            handleOptionChange(
                                                                result
                                                            )
                                                        }
                                                    >
                                                        {result.name}
                                                    </div>
                                                ))} */}

                                                {organizationName &&
                                                    !organizations[0] && (
                                                        <ErrorText>
                                                            No organization
                                                            Found
                                                        </ErrorText>
                                                    )}
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
                                                    htmlFor="price"
                                                    className="form-label"
                                                >
                                                    Donation amount
                                                </label>
                                                <input
                                                    id="price"
                                                    placeholder="$500"
                                                    {...register("price", {
                                                        pattern: {
                                                            value: /^[0-9]+$/,
                                                            message:
                                                                "Please enter a number",
                                                        },
                                                        required:
                                                            "Amount is required",
                                                    })}
                                                />
                                                {errors.price && (
                                                    <ErrorText>
                                                        {errors.price?.message}
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
                                                    id="description"
                                                    rows="3"
                                                    placeholder="e. g. “After purchasing the product you can get item...”"
                                                    {...register(
                                                        "description",
                                                        {
                                                            required:
                                                                "Description is required",
                                                        }
                                                    )}
                                                />
                                                {errors.discription && (
                                                    <ErrorText>
                                                        {
                                                            errors.description
                                                                ?.message
                                                        }
                                                    </ErrorText>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                            <div className="input-box">
                                                <Button type="submit btn-small">
                                                    Donate
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
