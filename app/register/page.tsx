"use client";
import React, { useState } from "react";
import Header from "@/components/Home/header";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const apiCall = async (endpoint: string, body: any) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      return data;
    } catch (err: any) {
      setErrorMessage(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    await apiCall("/api/auth/send-otp", { email: formData.email });
    setStep(2);
  };
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    await apiCall("/api/auth/verify-otp", {
      email: formData.email,
      otp: formData.otp,
    });
    setStep(3);
  };
  const handleFinalRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    await apiCall("/api/auth/register", formData);
    router.push("/login");
  };

  return (
    <>
      <Header />
      <div className="max-w-[1270px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-stretch gap-10 max-w-7xl mx-auto">
          {/* Banner */}
          <div
            className="w-full md:w-1/2 h-[400px] md:h-[600px] rounded-2xl bg-cover bg-center p-12 flex flex-col justify-end"
            style={{
              backgroundImage: "url('https://phonico.com/images/authImg.png')",
            }}
          >
            <h2 className="text-white text-4xl font-bold">Join Phonico</h2>
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Grab Your Phonico eSIM Now!
              </h1>
              <p className="text-gray-600">
                Stay Connected Across the USA and Beyond with attractive eSIM
                Plans. Let’s get started!
              </p>
            </div>

            {/* Toggle Tabs (Only on Step 1) */}
            {step === 1 && (
              <div className="flex bg-gray-100 p-1 rounded-lg max-w-[550px]">
                <Link href="/login" className="flex-1">
                  <button className="w-full py-3 text-gray-500 font-semibold">
                    Login
                  </button>
                </Link>
                <button className="flex-1 bg-[#ee5e7f] text-white py-3 rounded shadow font-bold">
                  Register
                </button>
              </div>
            )}

            {errorMessage && (
              <div className="p-3 bg-red-100 text-red-700 rounded-lg">
                {errorMessage}
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={
                step === 1
                  ? handleSendOtp
                  : step === 2
                    ? handleVerifyOtp
                    : handleFinalRegister
              }
              className="flex flex-col gap-4 w-full max-w-[550px]"
            >
              {step === 1 && (
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="border border-gray-300 p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              )}
              {step === 2 && (
                <input
                  type="text"
                  required
                  placeholder="Enter 6-digit OTP"
                  className="border p-3 rounded-lg w-full"
                  onChange={(e) =>
                    setFormData({ ...formData, otp: e.target.value })
                  }
                />
              )}
              {step === 3 && (
                <>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="border p-3 rounded-lg w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="border p-3 rounded-lg w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </>
              )}

              <button
                disabled={isLoading}
                className="hover:Lbg-[#ee5e7f] text-pink-300 border-pink-400 border hover:text-white py-3 rounded-lg font-bold hover:bg-[#d64e6d] transition"
              >
                {isLoading
                  ? "Processing..."
                  : step === 1
                    ? "Send OTP"
                    : step === 2
                      ? "Verify OTP"
                      : "Register Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
