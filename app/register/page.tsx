"use client";
import React, { useState } from "react";
import Header from "@/components/Home/header";
import Footer from "@/components/Home/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getOtp } from "@/services/getOtp.services";
import { registerUser } from "@/services/registerUser.services";
import { signIn } from "next-auth/react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    otp: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const router = useRouter();

  const handleSendOtp = async () => {
    if (!formData.email) {
      setErrorMessage("Please enter your email first.");
      return;
    }
    setIsLoading(true);
    setErrorMessage("");
    setIsAlreadyRegistered(false);

    try {
      await getOtp(formData.email);
      setIsOtpSent(true);
    } catch (err: any) {
      let msg = err?.message || "";
      if (msg === "T" || msg.length <= 2) {
        msg = "Account already registered or invalid email!";
      }
      setErrorMessage(msg);

      if (
        msg.toLowerCase().includes("already") ||
        msg.toLowerCase().includes("exist") ||
        msg.includes("T")
      ) {
        setIsAlreadyRegistered(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    if (!formData.otp || formData.otp.trim().length < 4) {
      setErrorMessage("Please enter a valid 4-digit OTP.");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Submitting final registration with:", formData);

      await registerUser(formData);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setErrorMessage("Auto-login failed. Please login manually.");
        router.push("/login");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      let msg = err?.message || "Registration failed";
      if (msg === "T" || msg.length <= 2) {
        msg = "Registration failed. Please check your details or try again.";
      }
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-[1270px] mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-stretch gap-10 max-w-7xl mx-auto">
          <div
            className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[650px] rounded-2xl overflow-hidden relative bg-cover bg-center flex flex-col justify-between p-6 sm:p-8 md:p-12 shrink-0 text-center"
            style={{
              backgroundImage: "url('https://phonico.com/images/authImg.png')",
            }}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Welcome to Phonico
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-sm mx-auto font-medium drop-shadow-md">
                Your Gateway to USA Connectivity!
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                Seamless Connectivity
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-sm mx-auto font-medium drop-shadow-md">
                Enjoy the best coverage in the USA, Mexico, and Canada!
              </p>
            </div>
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

            {errorMessage && (
              <div className="p-4 bg-red-100 text-red-700 rounded-lg max-w-[550px] flex flex-col gap-3">
                <span>{errorMessage}</span>
                {isAlreadyRegistered && (
                  <Link href="/login">
                    <button className="bg-[#ee5e7f] text-white px-4 py-2 rounded-lg font-bold text-sm w-full hover:bg-[#d64e6d] transition">
                      Go to Login Page
                    </button>
                  </Link>
                )}
              </div>
            )}

            <form
              onSubmit={handleFinalRegister}
              className="flex flex-col gap-4 w-full max-w-[550px]"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                disabled={isOtpSent}
                className="border border-gray-300 p-3 rounded-lg w-full disabled:bg-gray-100"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              {!isOtpSent && (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                  className="bg-[#ee5e7f] text-white border border-[#ee5e7f] hover:bg-[#d64e6d] py-3 rounded-lg font-bold transition disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send OTP"}
                </button>
              )}

              {isOtpSent && (
                <>
                  <input
                    type="text"
                    required
                    placeholder="Enter 4-digit OTP"
                    value={formData.otp}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, otp: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    type="password"
                    required
                    placeholder="Password"
                    value={formData.password}
                    className="border border-gray-300 p-3 rounded-lg w-full"
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="bg-[#ee5e7f] text-white border border-[#ee5e7f] hover:bg-[#d64e6d] py-3 rounded-lg font-bold transition disabled:opacity-50"
                  >
                    {isLoading ? "Processing..." : "Register Now"}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
