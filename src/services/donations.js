import client from "@utils/impactClient";

export const DonationsService = {
    getDonationsList: () => {
        return client.get(`/donations`);
    },
    getDonationDetails: (id) => {
        return client.get(`/donations/${id}`);
    },
};
