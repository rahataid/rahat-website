import client from "@utils/impactClient";

export const DonationsService = {
    getDonationsList: () => {
        return client.get(`/transactions`);
    },
    getDonationDetails: (id) => {
        return client.get(`/transactions/${id}`);
    },
    addDonation: (payload) => {
        return client.post(`/transactions`, { payload });
    },
};
