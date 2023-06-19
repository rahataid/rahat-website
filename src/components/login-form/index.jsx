import {
    requestOtp,
    selectError,
    selectOtp,
    verifyOtp,
} from "@redux/slices/app";
import ErrorText from "@ui/error-text";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmailForm } from "./EmailForm";
import { OtpForm } from "./OtpForm";

const LoginForm = ({ className }) => {
    const dispatch = useDispatch();
    const errorSer = useSelector(selectError);
    const otp = useSelector(selectOtp);
    const [email, setEmail] = useState(null);
    // const { provider } = useWalletConnector();

    const [hasOtp, setHasOtp] = useState(false);

    const onEmailSubmit = async (data, e) => {
        e.preventDefault();
        await dispatch(requestOtp(data));
        if (otp) {
            setHasOtp(true);
            setEmail(data.email);
        }
    };

    const onOtpSubmit = async (data, e) => {
        e.preventDefault();
        const sendData = {
            email,
            otp: data.otp,
        };
        await dispatch(verifyOtp(sendData));
    };

    return (
        <div className={clsx("form-wrapper-one", className)}>
            <h4>Login</h4>
            {errorSer?.message && <ErrorText>{errorSer?.message}</ErrorText>}

            {!hasOtp && (
                <EmailForm errors={errorSer} onSubmit={onEmailSubmit} />
            )}
            {hasOtp && <OtpForm errors={errorSer} onSubmit={onOtpSubmit} />}
        </div>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string,
};
export default LoginForm;
