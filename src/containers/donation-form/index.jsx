import { addDonationTransaction } from "@redux/slices/donation";
import {
    getOrganizations,
    selectOrganizationOptions,
} from "@redux/slices/organization";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AsyncSelect from "react-select/async";

const DonateForm = ({ className, space }) => {
    const dispatch = useDispatch();
    const organizations = useSelector(selectOrganizationOptions);
    const [searchedOrganization, setSearchedOrganization] = useState(null);
    const [organizationId, setOrganizationId] = useState(null);
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onChange",
    });

    // const handleOrganizationChange = (selectedOption) => {
    //     if (selectedOption) {
    //         setOrganizationId(selectedOption.value);
    //     } else {
    //         setOrganizationId(null);
    //     }
    // };

    useEffect(() => {
        const filter = { perPage: 100 };
        if (searchedOrganization) {
            filter.name = searchedOrganization;
        }
        dispatch(getOrganizations(filter));
    }, [dispatch, searchedOrganization]);

    const loadOrganizationOptions = (inputValue, callback) => {
        // Simulate API call or async logic to fetch organizations based on the input value
        // const filteredOptions = organizations?.filter((org) =>
        //     org.label.toLowerCase().includes(inputValue.toLowerCase())
        // );

        setSearchedOrganization(inputValue);

        setTimeout(() => {
            callback(organizations);
        }, 1000);
    };

    const onSubmit = (data, e) => {
        const sendData = {
            doneeId: data.donorId?.value,
            amount: +data.amount,
            description: data.description,
            donorId: 1,
            txHash: "0x23123",
        };

        // data.donorId = organizationId;
        dispatch(addDonationTransaction(sendData));
    };

    return (
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
                                            <Controller
                                                control={control}
                                                name="doneeId"
                                                render={({ field }) => (
                                                    <AsyncSelect
                                                        {...field}
                                                        id="doneeId"
                                                        isClearable
                                                        cacheOptions
                                                        defaultOptions
                                                        loadOptions={
                                                            loadOrganizationOptions
                                                        }
                                                        // onChange={
                                                        //     handleOrganizationChange
                                                        // }
                                                    />
                                                )}
                                            />
                                            {organizationId &&
                                                organizations.length === 0 && (
                                                    <ErrorText>
                                                        No organization found
                                                    </ErrorText>
                                                )}
                                            {errors.donorId && (
                                                <ErrorText>
                                                    {errors.donorId.message}
                                                </ErrorText>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-box pb--20">
                                            <label
                                                htmlFor="amount"
                                                className="form-label"
                                            >
                                                Donation amount
                                            </label>
                                            <input
                                                id="amount"
                                                placeholder="$500"
                                                {...register("amount", {
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
                                                    {errors.price.message}
                                                </ErrorText>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-box pb--20">
                                            <label
                                                htmlFor="description"
                                                className="form-label"
                                            >
                                                Description
                                            </label>
                                            <textarea
                                                id="description"
                                                rows="3"
                                                placeholder="e.g. 'After purchasing the product you can get item...'"
                                                {...register("description", {
                                                    required:
                                                        "Description is required",
                                                })}
                                            />
                                            {errors.description && (
                                                <ErrorText>
                                                    {errors.description.message}
                                                </ErrorText>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                                        <div className="input-box">
                                            <Button
                                                type="submit"
                                                className="btn-small"
                                            >
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
    );
};

DonateForm.propTypes = {
    className: PropTypes.string,
    space: PropTypes.oneOf([1]),
};

DonateForm.defaultProps = {
    space: 1,
};

export default DonateForm;
