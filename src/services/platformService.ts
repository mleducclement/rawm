import { APIClient } from "@/services/apiClient.ts";
import Platform from "@/entities/platform.ts";

export default new APIClient<Platform>("/platforms/lists/parents");