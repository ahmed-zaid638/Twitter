import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useCurrentUser =  () => {
  const { data, error, isLoading, mutate } =  useSWR("/api/current", fetcher);
  console.log({"From_UseCurrentUser": data })

  return {
    data,
    error,
    isLoading,
    mutate
  };
};

export default useCurrentUser;


// Normal Fetch 
// import fetcher from "@/libs/fetcher";
// const useCurrentUser = () => {
//   const data = fetcher("/api/current");
//   console.log({ From_UseCurrentUser: data });
// };

// export default useCurrentUser


