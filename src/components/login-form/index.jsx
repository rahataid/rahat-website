import { loginWithCreds } from "@redux/slices/app";
import Button from "@ui/button";
import ErrorText from "@ui/error-text";
import { useWalletConnector } from "@web3/hooks/useWalletConnector";
import clsx from "clsx";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const LoginForm = ({ className }) => {
    const dispatch = useDispatch();
    const { provider } = useWalletConnector();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data, e) => {
        e.preventDefault();
        dispatch(loginWithCreds(data.email));
        // eslint-disable-next-line no-console
        // router.push({
        //     pathname: "/",
        // });
    };

    const EmailForm = () => (
        <div className="mb-5">
            <label htmlFor="email" className="form-label">
                Email address
            </label>
            <input
                type="email"
                id="email"
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address",
                    },
                })}
            />
            {errors.exampleInputEmail1 && (
                <ErrorText>{errors.email?.message}</ErrorText>
            )}
        </div>
    );

    // const OTPForm = (
    //     <div className="mb-5">
    //         <label htmlFor="exampleInputEmail1" className="form-label">
    //             OTP
    //         </label>
    //         <input
    //             type="text"
    //             id="exampleInputEmail1"
    //             {...register("exampleInputEmail1", {
    //                 required: "OTP is required",
    //             })}
    //         />
    //         {errors.exampleInputEmail1 && (
    //             <ErrorText>{errors.exampleInputEmail1?.message}</ErrorText>
    //         )}
    //     </div>
    // );

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Login</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <EmailForm />
                {/* <OTPForm /> */}

                <Button type="submit" size="medium" className="mr--15">
                    Log In
                </Button>
                <Button path="/sign-up" color="primary-alta" size="medium">
                    Sign Up
                </Button>
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
