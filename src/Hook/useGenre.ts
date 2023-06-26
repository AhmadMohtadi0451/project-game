import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import APIClient from "../Services/api-client";
import { FetchResponse } from "../Services/api-client";

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

    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenre;
