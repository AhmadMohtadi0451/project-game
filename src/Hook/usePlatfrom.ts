import { useQuery } from "@tanstack/react-query";
import platform from "../Data/platform";
import APIClient from "../Services/api-client";
import ms from "ms";
import { Platform } from "../Entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const useplatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: platform,
  });

export default useplatform;
