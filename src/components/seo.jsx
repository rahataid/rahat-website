import Head from "next/head";

const SEO = ({ pageTitle, description, imageUrl }) => (
    <Head>
        <title>{pageTitle ? `${pageTitle} | Rahat` : "Rahat"}</title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
            name="description"
            content={
                description ||
                "Enhance Humanitarian Aid Distribution with Rahat, an Open-Source Blockchain Solution. Streamline Cash and Voucher Assistance Projects for Transparent and Efficient Transactions. Support Marginalized Communities and Foster Financial Inclusion through Local Vendor Cash Transfers."
            }
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        {/* Add any additional SEO-related meta tags here */}
        <meta name="author" content="Your Name" />
        <meta name="keywords" content="your, keywords, here" />

        {/* Open Graph meta tags for social media */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description || pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={pageTitle} />
        <meta property="og:url" content="https://rahat.io" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageTitle} />
        <meta name="twitter:image" content="/your-image.jpg" />

        {/* Any other future-proof SEO meta tags */}
    </Head>
);

SEO.propTypes = {
    // pageTitle: PropTypes.string.isRequired,
};

export default SEO;
