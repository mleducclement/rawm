import { APIClient } from "@/services/apiClient.ts";
import Game from "@/entities/game.ts";

export default new APIClient<Game>("/games");