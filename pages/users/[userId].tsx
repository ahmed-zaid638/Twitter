import Header from "@/components/Header";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";
import PostFeed from "@/components/posts/PostFeed";

function UserView() {
  const router = useRouter();
  const {userId} = router.query;
  const { data: fetchedUser, isLoading  } = useUser(userId as string);
  // console.log({From_UserId: fetchedUser})
  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={50} />
      </div>
    );
  }
  
  return (
    <>
      <Header label={"User View"} showBackArrow={true} />
      <UserHero userId= {userId as string} />
      <UserBio userId={userId as string} />
      <PostFeed userId= {userId as string} />
    </>
  );
}

export default UserView;
