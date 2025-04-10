﻿import { APIClient } from "@/services/apiClient.ts";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export default new APIClient<Genre>("/genres");