import Header from "@/components/Header";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import UserHero from "@/components/users/UserHero";
import UserBio from "@/components/users/UserBio";

function UserView() {
  const router = useRouter();
  const userId = router.query;
  const userIdAsString = typeof userId === 'string' ? userId : '';
  const { data: fetchedUser, isLoading } = useUser(userIdAsString);

  // console.log({fromUserId : fetchedUser})

  // if (isLoading || !fetchedUser) {
  //   return (
  //     <div className="flex justify-center items-center h-full">
  //       <ClipLoader color="lightblue" size={60} />
  //     </div>
  //   );
  // }
  return (
    <>
      <Header label={"User View"} showBackArrow={true} />
      <UserHero userId= {userId as unknown as string} />
      <UserBio />
    </>
  );
}

export default UserView;
