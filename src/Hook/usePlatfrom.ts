import platform from "../Data/platform";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

const useplatform = () => ({ data: platform, error: null });

export default useplatform;
