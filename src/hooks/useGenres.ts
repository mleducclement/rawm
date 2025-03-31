import useData from "@/hooks/useData.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;