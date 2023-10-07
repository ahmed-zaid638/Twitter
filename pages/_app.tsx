import Modal from "@/components/Modal";
import Layout from "@/components/layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import EditModal from "@/components/modals/EditModal";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { zhCN } from "date-fns/locale";

export default function App({ Component, pageProps }: AppProps) {
  const [file, setFile] = useState<File | undefined>();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file' , file)
    console.log(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files : FileList
    };
    setFile(target.files[0]);
  };
  

  return (
    <>
      {/* <SessionProvider session={pageProps.session}>
        <Toaster />
        <EditModal />
        <RegisterModal />
        <LoginModal />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider> */}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} name="Image" className="border" />
        <input type="email" name="email" className="border" />

        <button>Submit</button>
      </form>
    </>
  );
}
