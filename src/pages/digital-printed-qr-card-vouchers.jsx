import SEO from "@components/seo";
import DigitalPrintedQrCards from "@containers/qr-card-vouchers";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";

const QrCardVoucherDetails = () => {
    return (
        <Wrapper>
            <SEO pageTitle="Digital Printed QR Card Vouchers" />
            <Header />
            <DigitalPrintedQrCards />
            <Footer />
        </Wrapper>
    );
};

export default QrCardVoucherDetails;

