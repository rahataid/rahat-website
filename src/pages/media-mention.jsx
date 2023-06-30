import React from "react";
import Wrapper from "@layout/wrapper";
import Footer from "@layout/footer";
import Header from "@layout/header";
import SEO from "@components/seo";
import MediaMentionPage from "@components/media-mention-page";

const MediaMentionDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Media Mentions" />
            <Header />
            <MediaMentionPage />
            <Footer />
        </Wrapper>
    );
};

export default MediaMentionDetailPage;

