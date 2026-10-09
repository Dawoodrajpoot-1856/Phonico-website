export async function registerUser(formData: {
  name: string;
  email: string;
  password: string;
  otp: string;
}) {
  const payload = {
    name: formData.name,
    email: formData.email,
    password: formData.password,
    otp: formData.otp,
  };

  console.log("=== FINAL PAYLOAD GOING TO SERVER ===", JSON.stringify(payload));

  const res = await fetch("https://platform.phonico.com/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("=== SERVER RESPONSE DATA ===", data);

  if (!res.ok) {
    throw new Error(
      data.message || JSON.stringify(data.errors) || "Registration failed",
    );
  }

  return data;
}
