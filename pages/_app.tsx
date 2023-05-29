import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
    //provider - context/providers, themes, data
    //layout
    //add additional props
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        );    
}