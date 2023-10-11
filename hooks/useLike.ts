import fetcher from "@/libs/fetcher";
import useSWR from "swr";
import useCurrentUser from "./useCurrentUser";
import useUser from "./useUser";
import LoginModal from "@/components/modals/LoginModal";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import usePost from "./usePost";
import usePosts from "./usePosts";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const LoginModal = useLoginModal();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);
  // hasLiked
  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];
    console.log({ list: list });
    return list.includes(currentUser?.currentUser.id);
  }, [fetchedPost, currentUser]);

  // toggleLike
  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      LoginModal.onOpen();
    }
    try {
      let request;
      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: { postId } });
      } else {
        request = () => axios.post("/api/like", { postId });
      }
      await request();
      mutateFetchedPost();
      mutateFetchedPosts();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }, [currentUser, LoginModal, hasLiked, mutateFetchedPost, mutateFetchedPosts, postId]);

  return {
    toggleLike,
    hasLiked,
  };
};

export default useLike;
