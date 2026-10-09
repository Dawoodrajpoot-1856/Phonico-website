export async function getBlogsData() {
  try {
    const res = await fetch("https://platform.phonico.com/api/landing/blog", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 3600 }, // Caching / Revalidation ke liye
    });

    const data = await res.json();
    if (!res.ok) throw new Error("Failed to fetch blogs");

    return data.data || data;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}
