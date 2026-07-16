import { useRef, useState } from "react";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { set, useForm } from "react-hook-form";
import Image from "next/image";
import Loader from "@components/loader";
import ReCAPTCHA from "react-google-recaptcha";
import { DemoService } from "@services/demo";
import { RECAPTCHA_SITE_KEY } from "@config";

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [captchaError, setCaptchaError] = useState(null);
    const recaptchaRef = useRef(null);

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
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
        if (ok) {
            form.reset();
        }
    };
    const onSubmit = (data, e) => {
        if (!captchaToken) {
            setCaptchaError("Please verify that you are not a robot");
            return;
        }
        setCaptchaError(null);
        setIsLoading(true);
        const form = e.target;
        setServerState({ submitting: true });
        DemoService.submit({
            ...data,
            recaptchaToken: captchaToken,
        })
            .then((_res) => {
                setIsLoading(false);
                handleServerResponse(true, "Thanks! for being with us", form);
            })
            .catch((err) => {
                setIsLoading(false);
                handleServerResponse(
                    false,
                    err.response?.data?.message || "Something went wrong",
                    form
                );
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
                                        pattern: {
                                            value: /^[A-Za-z\s]+$/,
                                            message:
                                                "Numbers and symbols are not allowed",
                                        },
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
                                    htmlFor="contact-organization"
                                    className="form-label"
                                >
                                    Organization Name
                                </label>
                                <input
                                    id="contact-organization"
                                    type="text"
                                    {...register("contactOrganization", {
                                        required:
                                            "Organization name is required",
                                        pattern: {
                                            value: /^[A-Za-z\s]+$/,
                                            message:
                                                "Numbers and symbols are not allowed",
                                        },
                                    })}
                                />
                                {errors.contactOrganization && (
                                    <ErrorText>
                                        {errors.contactOrganization?.message}
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

                            <div className="col-12 d-flex flex-column align-items-center mt-3">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={RECAPTCHA_SITE_KEY}
                                    onChange={(token) => {
                                        setCaptchaToken(token);
                                        setCaptchaError(null);
                                    }}
                                    onExpired={() => setCaptchaToken(null)}
                                />
                                {captchaError && (
                                    <ErrorText>{captchaError}</ErrorText>
                                )}
                            </div>

                            <div className="col-12 d-flex flex-column align-items-center">
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
                                    className={`mt-4 mb-0 font-14 ${
                                        !serverState.status.ok
                                            ? "text-danger"
                                            : ""
                                    }`}
                                    style={
                                        serverState.status.ok
                                            ? { color: "#2C7FBF" }
                                            : undefined
                                    }
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

