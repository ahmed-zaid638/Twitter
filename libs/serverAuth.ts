import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "./prismadb";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (!session?.user?.email) {
    // return
    throw new Error("Not signed in 1");
  }
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
  if (!currentUser) {
    throw new Error("Not signed in 2");
  }
  console.log(currentUser)
  return currentUser ;
};

export default serverAuth;

