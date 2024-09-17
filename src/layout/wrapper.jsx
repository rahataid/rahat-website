import PropTypes from "prop-types";
import ScrollToTop from "@ui/scroll-to-top";
import { ToastContainer } from "react-toastify";
import Head from "next/head";

const Wrapper = ({ children }) => (
    <>
        <Head>
            <script
                type="text/javascript"
                src="https://app.termly.io/resource-blocker/e590ad8e-c2da-4995-a46e-e2638801722f?autoBlock=on"
            ></script>
        </Head>
        {children}
        <ScrollToTop />
        <ToastContainer />
    </>
);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
