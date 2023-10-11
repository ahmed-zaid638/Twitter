import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const usePosts = (userId?: string) => {
  const url = userId ? `/api/posts?userId=${userId}` : "/api/posts";
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  if (data) {
    // console.log({ From_UsePosts: data });
  }
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};


export default usePosts;
