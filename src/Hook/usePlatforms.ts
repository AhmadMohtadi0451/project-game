import useplatform from "./usePlatfrom";

const usePlatforms = (id?: number) => {
  const { data: platforms } = useplatform();
  return platforms?.results.find((p) => p.id === id);
};

export default usePlatforms;
