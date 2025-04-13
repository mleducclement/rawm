import Platform from "@/entities/platform.ts";
import Genre from "@/entities/genre.ts";
import Publisher from "@/entities/publisher.ts";

export default interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic?: number;
  rating_top: number;
}