useRegisterModal;
import React, { useCallback, useState } from "react";
import { NextPageContext } from "next";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

function LoginModal() {
  const RegisterModal = useRegisterModal();
  const LoginModal = useLoginModal();

  const [email, setEmail] = useState("");
  const [usernmame, setUserName] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Modal toggle
  const onToggle = useCallback (() => { 
     RegisterModal.onClose()
     LoginModal.onOpen()
    
  } , [])

  // onSubmit
  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      RegisterModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [RegisterModal]);
  // bodyContent
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
        type="text"
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={usernmame}
        disabled={isLoading}
        type="text"
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
        type="email"
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  );
  // footerContent
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="
            text-white 
            cursor-pointer 
            hover:underline
          "
        >
          {" "}
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Create an acount"
      actionLabel="Register"
      onClose={RegisterModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default LoginModal;
