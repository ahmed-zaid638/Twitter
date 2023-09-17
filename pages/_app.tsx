import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* <div className="text-red-500">.zdv</div> */}
      <Component {...pageProps} />
    </Layout>
  );
}
