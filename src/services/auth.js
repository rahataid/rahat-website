import client from "@utils/impactClient";

export const AuthService = {
    sendSigned: (signingMessage) => client.post(),

    requestOtp: (data) =>
        client.post("/auth/request-otp", {
            ...data,
        }),

    verifyOtp: (data) =>
        client.post("/auth/verify-otp", {
            ...data,
        }),
};
