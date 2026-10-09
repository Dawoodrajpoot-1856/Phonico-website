export async function getOtp(email: string) {
  const payload = { email };

  try {
    const res = await fetch("https://platform.phonico.com/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    console.log("Full Server Response:", data);

    if (!res.ok || data.status === false || data.success === false) {
      let errorMessage = data.message || "Failed to send OTP";

      if (data.errors) {
        const firstErrorKey = Object.keys(data.errors)[0];
        errorMessage = data.errors[firstErrorKey][0];
      }

      throw new Error(errorMessage);
    }

    return data;
  } catch (error: any) {
    throw new Error(error.message || "otp send failed");
  }
}
