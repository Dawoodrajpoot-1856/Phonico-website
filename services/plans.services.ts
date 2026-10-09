import { cacheLife } from "next/cache";

export async function getGuestPlans() {
  "use cache";

  cacheLife("hours");

  const res = await fetch("https://platform.phonico.com/api/guest-plans", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch guest plans");
  }

  const data = await res.json();

  return data.data || data;
}
