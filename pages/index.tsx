import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useState } from "react";
import Form from "@/components/Form";
import PostFeed from "@/components/posts/PostFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header label={"Home"} showBackArrow={false} />
      <Form placeholder={"Whats happening?"} />
      <PostFeed/>
    </main>
  );
}
