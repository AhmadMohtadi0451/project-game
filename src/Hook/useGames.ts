import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Game } from "./useGame";

const apiClient = new APIClient<Game>("/games");

const useGames = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGames;
