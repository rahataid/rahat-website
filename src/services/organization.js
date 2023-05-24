import client from "@utils/client";

export const OrganizationsService = {
    getOrganizationsList: () => {
        return client.get(`/organizations`);
    },
    getOrganizationDetails: (id) => {
        return client.get(`/organizations/${id}`);
    },
};
