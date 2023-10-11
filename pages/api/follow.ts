import FollowBar from "@/components/layout/FollowBar";
import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";
import { useId } from "react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "DELETE") {
    return res.status(405).end();
  }
  try {
    const { userId } = req.body;
    console.log({ From_FollowAPi_UserId: userId });
    const { currentUser } = await serverAuth(req, res);
    if (!userId || typeof userId !== "string") {
      throw new Error("Invalid ID");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
    });

     console.log({From_FollowAPi_CurretUser : user})
    if (!user) {
      throw new Error("Invalid ID");
    }
    // updatedFollowingIds
    let updatedFollowingIds = [...user.followingIds || []];
     console.log({ updatedFollowingIds: updatedFollowingIds });
     // POST
    if (req.method === "POST") {
      try {
        updatedFollowingIds.push(userId);
        console.log({ updatedFollowingIds_Array_post: updatedFollowingIds });
      } catch (error) {
        console.log(error);
      }
    }
    // DELETE
    if (req.method === "DELETE") {
      try {
        updatedFollowingIds = updatedFollowingIds.filter((followingId) => followingId !== userId);
        console.log({ updatedFollowingIds_Array_delete: updatedFollowingIds });
      } catch (error) {
        console.log(error);
      }
    }

    // updated user
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        followingIds: updatedFollowingIds,
      },
    });

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}

