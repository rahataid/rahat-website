import { useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import axios from "axios";
import { useForm } from "react-hook-form";
import Image from "next/image";

const ContactForm = () => {
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
        const form = e.target;
        setServerState({ submitting: true });
        axios({
            method: "post",
            url: "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
            data,
        })
            .then((_res) => {
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
                <div className="col-lg-12">
                    <div className="author-wrapper">
                        <div className="author-inner">
                            <div className="rn-author-info-content">
                                <h4 className="title">Contact</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container pt--100">
                <div className="form-wrapper-one registration-area">
                    <h3 className="mb--30 text-center">
                        Fill the form to schedule demo
                    </h3>
                    <form
                        className="rwt-dynamic-form"
                        id="contact-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="row">
                            <div className="col-12 col-lg-6 col-sm-12 col-md-12 mb-5">
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
                            <div className="col-12 col-lg-6 col-sm-12 col-md-12 mb-5">
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
                            <div className="col-12 col-lg-6 col-sm-12 col-md-12 mb-5">
                                <label
                                    htmlFor="contact-phone"
                                    className="form-label"
                                >
                                    Phone Number
                                </label>
                                <input
                                    placeholder="Phone Number"
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

                            <div className="col-12 col-lg-12 col-sm-12 col-md-12mb-5">
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
                            <div className="col-12 d-flex justify-content-center">
                                <Button
                                    className="mt-5"
                                    type="submit"
                                    size="medium"
                                >
                                    Send Message
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

