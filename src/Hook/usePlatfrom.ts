import useData from "./useData";

interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useplatform = () => useData<Platform>("/platforms/lists/parents");

export default useplatform;
