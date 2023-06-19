import ErrorText from "@ui/error-text";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const OtpForm = ({ onSubmit }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting: verifyingOtp },
    } = useForm({
        mode: "onChange",
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
                <label htmlFor="otp" className="form-label">
                    OTP
                </label>
                <input
                    type="otp"
                    id="otp"
                    {...register("otp", {
                        required: "OTP is required",
                    })}
                />
                {errors.otp && <ErrorText>{errors.otp?.message}</ErrorText>}
            </div>
            <Button
                disabled={verifyingOtp}
                type="submit"
                size="medium"
                className="mr--15"
            >
                Verify OTP
            </Button>
        </form>
    );
};
