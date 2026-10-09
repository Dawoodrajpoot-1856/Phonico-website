export async function loginUser(credentials: {
  email: string;
  password: string;
}) {
  try {
    const res = await fetch("https://platform.phonico.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const data = await res.json();
    console.log("Backend Response:", data);
    console.log("Response Status:", res.status);

    if (!res.ok || data.status === false) {
      throw new Error(data.message || data.error || "Login failed");
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "Login failed");
  }
}
