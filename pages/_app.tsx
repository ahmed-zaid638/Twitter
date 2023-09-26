import Modal from "@/components/Modal";
import Layout from "@/components/layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Modal isOpen title="Test Modal" onClose= {() => "" } onSubmit={() => "" } actionLabel="submit"/> */}
       <RegisterModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
