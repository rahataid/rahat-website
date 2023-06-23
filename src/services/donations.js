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
    addDonation: (payload) => {
        return client.post(`/transactions`, { payload });
    },
};
