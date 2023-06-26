import { useQuery } from "@tanstack/react-query";
import platform from "../Data/platform";
import apiClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useplatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 6000, //24h
    initialData: { count: platform.length, results: platform },
  });

export default useplatform;
