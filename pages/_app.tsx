import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "@/stores/currencyStore";

/**
 * NextJS default app
 * @param param0
 * @returns
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
