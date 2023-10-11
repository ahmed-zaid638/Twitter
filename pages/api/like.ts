import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }
  try {
    const { postId } = req.body;
    const { currentUser } = await serverAuth(req, res);
    if (!postId || typeof postId !== "string") {
      throw new Error("Invalid ID");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (!post) {
      throw Error("Invalid Id");
    }

    console.log({ From_Like_API: post });

    // updatedLikedIds
    let updatedLikedIds = [...(post.likedIds || [])];
    console.log({updatedLikedIds : updatedLikedIds})
    if (req.method === "POST") {
      try {
        updatedLikedIds.push(currentUser.id);
        console.log({updatedLikedIds_POST : updatedLikedIds})
      } catch (error) {
        console.log(error);
      }
    }

    if (req.method === "DELETE") {
      updatedLikedIds = updatedLikedIds.filter(
        (likedId) => likedId !== currentUser?.id
      );
      console.log({updatedLikedIds_DELETE : updatedLikedIds})
    }

    // updatedPost
    const updatedPost =await  prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likedIds: updatedLikedIds,
      },
    });
   console.log({updatedPost : updatedPost})

    return res.status(200).json(updatedLikedIds)
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
