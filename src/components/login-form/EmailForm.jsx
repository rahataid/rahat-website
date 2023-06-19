import ErrorText from "@ui/error-text";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const EmailForm = ({ onSubmit, errors: errorSer }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting: requestingOtp },
        setError,
    } = useForm({
        mode: "onChange",
    });

    // useEffect(() => {
    //     if (errorSer) {
    //         setError("dbError", errorSer);
    //     }
    // }, [errorSer]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                {errors.email && <ErrorText>{errors.email?.message}</ErrorText>}
            </div>
            <Button
                disabled={requestingOtp}
                type="submit"
                size="medium"
                className="mr--15"
            >
                Request OTP
            </Button>
        </form>
    );
};
