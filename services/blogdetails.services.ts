import { apiClient } from "@/lib/apiClient";

export async function getBlogsData() {
  "use cache";

  try {
    const data: any = await apiClient("/landing/blog");
    return data.data || data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

// api client
