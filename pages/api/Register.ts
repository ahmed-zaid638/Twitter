import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismadb";

export default async function  handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { name, username, email, password } = req.body;
    console.log(req.body)
    // console.log({name ,email})
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword)
    const user = await prisma.user.create({
      data: {
        name,
        username,
        email,
        hashedPassword,
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    console.log("Error from Prsima" , error);
  }
}
