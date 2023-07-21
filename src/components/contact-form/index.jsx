import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { set, useForm } from "react-hook-form";
import Image from "next/image";
import Loader from "@components/loader";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
            submitting: false,
            status: { ok, msg },
        });
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e) => {
        setIsLoading(true);
        const form = e.target;
        setServerState({ submitting: true });
        // axios({
        //     method: "post",
        //     url: "/api/contactForm",
        //     body: JSON.stringify(data),
        // })
        axios
            .post("/api/contactForm", data)
            .then((_res) => {
                setIsLoading(false);
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch((err) => {
                handleServerResponse(false, err.response.data.error, form);
            });
    };

    return (
        <>
            <div className="rn-author-bg-area position-relative ptb--150">
                <Image
                    src="/images/banner/contact-main-banner.jpg"
                    alt="Slider BG"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />

                <div className="overlay"></div>
            </div>
            <div className="row padding-tb-50 align-items-center d-flex">
                <div className="col-lg-12 custom-page-banner">
                    <div className="author-wrapper">
                        <div className="author-inner">
                            <div className="rn-author-info-content-custom">
                                <h4 className="title">Contact</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt--100">
                <div className="form-wrapper-one registration-area">
                    <form
                        className="rwt-dynamic-form"
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="row">
                            <div className="col-12 col-lg-4 col-sm-12 col-md-12 mb-5">
                                <label
                                    htmlFor="contact-name"
                                    className="form-label"
                                >
                                    Your Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    {...register("contactName", {
                                        required: "Name is required",
                                    })}
                                />
                                {errors.contactName && (
                                    <ErrorText>
                                        {errors.contactName?.message}
                                    </ErrorText>
                                )}
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12 col-md-12 mb-5">
                                <label
                                    htmlFor="contact-email"
                                    className="form-label"
                                >
                                    Email
                                </label>
                                <input
                                    name="contact-email"
                                    type="email"
                                    {...register("contactEmail", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "invalid email address",
                                        },
                                    })}
                                />
                                {errors.contactEmail && (
                                    <ErrorText>
                                        {errors.contactEmail?.message}
                                    </ErrorText>
                                )}
                            </div>
                            <div className="col-12 col-lg-4 col-sm-12 col-md-12 mb-5">
                                <label
                                    htmlFor="contact-phone"
                                    className="form-label"
                                >
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    type="number"
                                    {...register("contactPhone", {
                                        required: "Phone number is required",
                                    })}
                                />
                                {errors.contactPhone && (
                                    <ErrorText>
                                        {errors.contactPhone?.message}
                                    </ErrorText>
                                )}
                            </div>

                            <div className="col-12 col-lg-12 col-sm-12 col-md-12 mb-5">
                                <label
                                    htmlFor="contact-message"
                                    className="form-label"
                                >
                                    Write Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows="3"
                                    {...register("contactMessage", {
                                        required: "Message is required",
                                    })}
                                />
                                {errors.contactMessage && (
                                    <ErrorText>
                                        {errors.contactMessage?.message}
                                    </ErrorText>
                                )}
                            </div>

                            <div className="col-12 col-lg-3 col-sm-12 col-md-12 mb-5">
                                <div className="d-flex justify-content-between mt-2">
                                    <span>Request for Demo?</span>
                                    <div className="d-flex align-items-center">
                                        <div className="input-box pb--20 rn-check-box">
                                            <input
                                                className="rn-check-box-input"
                                                type="radio"
                                                id="demoYes"
                                                value="Yes"
                                                {...register("isDemo", {
                                                    required:
                                                        "Plesae select an option",
                                                })}
                                            />
                                            <label
                                                className="rn-check-box-label"
                                                htmlFor="demoYes"
                                                style={{
                                                    marginLeft: "20px",
                                                }}
                                            >
                                                Yes
                                            </label>
                                        </div>
                                        <div className="input-box pb--20 rn-check-box">
                                            <input
                                                className="rn-check-box-input"
                                                type="radio"
                                                id="demoNo"
                                                value="No"
                                                {...register("isDemo", {
                                                    required:
                                                        "Plesae select an option",
                                                })}
                                            />
                                            <label
                                                className="rn-check-box-label"
                                                htmlFor="demoNo"
                                                style={{
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ marginTop: "-25px" }}>
                                    {errors.isDemo && (
                                        <ErrorText>
                                            {errors.isDemo?.message}
                                        </ErrorText>
                                    )}
                                </div>
                            </div>

                            <div className="col-12 d-flex justify-content-center">
                                <Button
                                    className="mt-5"
                                    type="submit"
                                    size="medium"
                                >
                                    {isLoading ? <Loader /> : "  Send Message"}
                                </Button>
                            </div>
                            {serverState.status && (
                                <p
                                    className={`mt-4 font-14 ${
                                        !serverState.status.ok
                                            ? "text-danger"
                                            : "text-success"
                                    }`}
                                >
                                    {serverState.status.msg}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default ContactForm;

