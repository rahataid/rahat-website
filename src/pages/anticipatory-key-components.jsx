import SEO from "@components/seo";
import AnticipatoryLearnMorePage from "@containers/learn-more-anticipatory";
import LearnMorePage from "@containers/learn-more-page";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const RahatBeemaKeyComponentsDetailPage = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Rahat Beema Key Components" />
            <Header />
            <AnticipatoryLearnMorePage />
            <Footer />
        </Wrapper>
    );
};

export default RahatBeemaKeyComponentsDetailPage;

