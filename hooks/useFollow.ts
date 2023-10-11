import fetcher from "@/libs/fetcher";
import useSWR from "swr";
import useCurrentUser from "./useCurrentUser";
import useUser from "./useUser";
import LoginModal from "@/components/modals/LoginModal";
import useLoginModal from "./useLoginModal";
import { useCallback, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";


const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(userId);;
  const LoginModal = useLoginModal();
  
  const isFollowing = useMemo(() => {
    const list = currentUser?.currentUser.followingIds || [];
   console.log({list : list})
    return list.includes(userId);
  }, [currentUser, userId]);
  

  const toggleFollow = useCallback(async() => {
    if (!currentUser) {
      LoginModal.onOpen();
    }
    try {
      let request;
      if (isFollowing) {
        request = () => axios.delete("/api/follow" , { data: {userId}});
        console.log({isFollowing_delete : isFollowing})
      } else {
        request = () => axios.post("/api/follow", {userId}); 
        console.log({isFollowing_post : isFollowing})
      }
      await request();
      mutateCurrentUser();
      mutateFetchedUser();
      console.log({afterRequestworks : isFollowing})
      toast.success('Success');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }, [
    LoginModal,
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
  ]);

  return {
    isFollowing,
    toggleFollow,
  };
};

export default useFollow;
