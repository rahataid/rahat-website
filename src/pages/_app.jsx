import AppContainer from "@containers/AppContainer";
import ProviderExample from "@web3/Provider";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import sal from "sal.js";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import "../assets/css/modal-video.css";
import "../assets/scss/style.scss";
import { wrapper } from "../redux/store";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { IconButton } from "@mui/material";
import Iconify from "@components/iconify";
import { QueryProvider } from "src/providers/query-provider";
import { Wagmi } from "src/providers/wagmi-provider";

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
        document.body.className = `${props.className}`;
    });

    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={store.__persistor}>
                <Wagmi>
                    <QueryProvider>
                        <ThemeProvider defaultTheme="light">
                            <SnackbarProvider
                                maxSnack={5}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                preventDuplicate
                                autoHideDuration={3000}
                                action={(snackbarId) => (
                                    <IconButton
                                        size="small"
                                        onClick={() =>
                                            closeSnackbar(snackbarId)
                                        }
                                        sx={{ p: 0.5 }}
                                    >
                                        <Iconify
                                            width={16}
                                            icon="mingcute:close-line"
                                        />
                                    </IconButton>
                                )}
                            >
                                <AppContainer>
                                    <Component {...props.pageProps} />
                                </AppContainer>
                            </SnackbarProvider>
                        </ThemeProvider>
                    </QueryProvider>
                </Wagmi>
            </PersistGate>
        </ReduxProvider>
    );
};

// MyApp.getInitialProps = wrapper.getInitialAppProps(
//     (store) => async (appCtx) => {
//         const childrenGip = await App.getInitialProps(appCtx);

//         return {
//             pageProps: {
//                 ...childrenGip.pageProps,
//                 appName: "Rahat",
//             },
//         };
//     }
// );

MyApp.propTypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.shape({
        className: PropTypes.string,
    }),
};

export default MyApp;

