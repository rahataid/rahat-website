import CaseStudyPage from "@components/case-study-page";
import ReportsPage from "@components/reports";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import React from "react";

const Reports = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Reports" />
            <Header />
            <ReportsPage />
            <Footer />
        </Wrapper>
    );
};

export default Reports;

