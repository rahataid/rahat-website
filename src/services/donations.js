import client from "@utils/client";

export const DonationsService = {
    getDonationsList: () => {
        return client.get(`/donations`);
    },
    getDonationDetails: (id) => {
        return client.get(`/donations/${id}`);
    },
};
