import SEO from "@components/seo";
import ImpactDetailsPage from "@containers/impact-trak/details";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import { useRouter } from "next/router";
import React from "react";
import datas from "../../../data/impact-trak.json";

const ImpactTrak = () => {
    const router = useRouter();
    const { address } = router.query;
    const data = datas?.rows?.find(
        (content) => content?.donor?.address === address
    );
    console.log(address);
    return (
        <Wrapper>
            <SEO
            // pageTitle={community?.name}
            // description={community?.description}
            />
            <Header />
            <main id="main-content">
                <ImpactDetailsPage data={data} />
            </main>
            <Footer />
        </Wrapper>
    );
};

export default ImpactTrak;

