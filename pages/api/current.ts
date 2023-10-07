import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse , NextRequest } from 'next/server'
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    // console.log("test 1");
    const  currentUser  = await serverAuth(req, res);
    console.log({From_CurrentApi : currentUser})
    // console.log("test 2");
    return  res.status(200).json(currentUser)
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}




