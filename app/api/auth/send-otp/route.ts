import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 🚀 Phonico API payload ko standard parameters ke sath bhejein
    const res = await fetch("https://platform.phonico.com/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        type: "register", // 👈 Aksar platforms ko batana parta hai ke register ke liye hai
        channel: "email", // 👈 Kuch APIs channel mangti hain
      }),
    });

    const data = await res.json();

    // 💡 AGAR 422 AYE TO TERMINAL MEIN DETAIL PRINT HOGI KE KYA MISSING HAI
    console.log("Phonico Send-OTP Raw Response:", data);

    if (!res.ok) {
      return NextResponse.json(
        { error: data.message || data.error || "OTP send failed" },
        { status: res.status },
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Send OTP Route Error:", error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
