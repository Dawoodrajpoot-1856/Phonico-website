import { apiClient } from "@/lib/apiClient";
import { cacheLife } from "next/cache";

export async function getGuestPlans() {
  "use cache";
  cacheLife("hours");

  try {
    const data: any = Object(await apiClient("/guest-plans"));
    return data.data || data;
  } catch (error) {
    console.error("Failed to fetch guest plans (Server might be down):", error);
    return [];
  }
}
