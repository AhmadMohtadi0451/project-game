import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient from "../Services/api-client";
import ms from "ms";
const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenre;
