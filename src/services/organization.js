import client from "@utils/impactClient";

export const OrganizationsService = {
    getOrganizationsList: (query) => {
        return client.get(`/organizations`, { params: query });
    },
    getOrganizationDetails: (id) => {
        return client.get(`/organizations/${id}`);
    },
    getOrganizationTransactions: (walletAddress) => {
        return client.get(`/organizations/${walletAddress}/transactions`);
    },
};
