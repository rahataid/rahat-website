import SEO from "@components/seo";
import CvaPage from "@containers/cva-page";
import BeneficiaryCommunicationIvrSms from "@containers/beneficiary-communication";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const BeneficiaryCommunication = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Beneficiary Communication (IVR/SMS)" />
            <Header />
            <BeneficiaryCommunicationIvrSms />
            <Footer />
        </Wrapper>
    );
};

export default BeneficiaryCommunication;

