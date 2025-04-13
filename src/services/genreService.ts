import { APIClient } from "@/services/apiClient.ts";
import Genre from "@/entities/genre.ts";

export default new APIClient<Genre>("/genres");