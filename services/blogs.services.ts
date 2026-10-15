import { apiClient } from "@/lib/apiClient";
import { cacheLife } from "next/cache";

export async function getBlogs() {
  "use cache";

  cacheLife("hours");

  try {
    const data: any = await apiClient("/landing/blog");
    return data.data || data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}
