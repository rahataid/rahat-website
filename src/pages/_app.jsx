import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { MoralisProvider } from "react-moralis";
import "react-toastify/dist/ReactToastify.css";
import sal from "sal.js";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/css/modal-video.css";
import "../assets/scss/style.scss";

import { Provider as ReduxProvider } from "react-redux";

import App from "next/app";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../redux/store";

const moralisAppId = "Zgi9h3xvYrvXHJZmYjgzbfxlTPnDq6H3RytmW0qt";
const moralisServerURL = "https://mrnuat16od8z.usemoralis.com:2053/server";

const MyApp = ({ Component, ...pageProps }) => {
    const { store, props } = wrapper.useWrappedStore(pageProps);

    const router = useRouter();
    useEffect(() => {
        sal({ threshold: 0.1, once: true });
    }, [router.asPath]);

    useEffect(() => {
        sal();
    }, []);

    useEffect(() => {
        document.body.className = `${pageProps.className}`;
    });

    return (
        <ReduxProvider store={store}>
            <ThemeProvider defaultTheme="dark">
                <PersistGate loading={null} persistor={store.__persistor}>
                    <MoralisProvider
                        appId={moralisAppId}
                        serverUrl={moralisServerURL}
                    >
                        <Component {...props.pageProps} />
                    </MoralisProvider>
                </PersistGate>
            </ThemeProvider>
        </ReduxProvider>
    );
};

MyApp.getInitialProps = wrapper.getInitialAppProps(
    (store) => async (appCtx) => {
        const childrenGip = await App.getInitialProps(appCtx);

        return {
            pageProps: {
                ...childrenGip.pageProps,
                appName: "Rahat",
            },
        };
    }
);

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;
