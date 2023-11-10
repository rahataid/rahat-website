import React from "react";
import SEO from "@components/seo";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "src/layout/wrapper";
import { Container, Grid } from "@mui/material";
// import Bargraph from "./bar-graph";
// import Piechart from "./pie-chart";
import SummaryCard from "@components/summary-card/summary-card";
import ImpactTrakArea from "@containers/impact-trak";
import data from "src/data/impact-trak.json";
const Index = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Impact Trak" />
            <Header />
            <main id="main-content" className=" p-5">
                <ImpactTrakArea data={data} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default Index;

