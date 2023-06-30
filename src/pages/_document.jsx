import Document, { Head, Html, Main, NextScript } from "next/document";
// import clsx from "clsx";
// import { useTheme } from "../context/theme-context";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossorigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Raleway&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body style={{ fontFamily: "Poppins,sans-serif" }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
