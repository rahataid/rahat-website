import client from "@utils/impactClient";

export const DonationsService = {
    getDonationsList: (params) => {
        return client.get(`/transactions`, {
            params,
        });
    },
    getDonationDetails: (id) => {
        return client.get(`/transactions/${id}`);
    },
    addDonation: (data) => {
        return client.post(`/transactions`, { ...data });
    },
};
