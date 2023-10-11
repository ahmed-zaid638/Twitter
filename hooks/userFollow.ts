import fetcher from "@/libs/fetcher";
import useSWR from "swr";

const useFollow = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/follow", fetcher);
  if(data) {
    console.log({From_UseFollow : data})
  }
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};


export default useFollow

