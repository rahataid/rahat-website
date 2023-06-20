import client from "@utils/impactClient";

export const UserService = {
    getUsers: (params) =>
        client.get("/api/v1/users", {
            params,
        }),
};
