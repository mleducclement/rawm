import { APIClient } from "@/services/apiClient.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default new APIClient<Platform>("/platforms/list/parent_platforms");