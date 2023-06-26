import { useQuery } from "@tanstack/react-query";
import platform from "../Data/platform";
import APIClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useplatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 6000, //24h
    initialData: { count: platform.length, results: platform },
  });

export default useplatform;
