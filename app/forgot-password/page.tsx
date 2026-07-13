"use client";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/header";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Your API call to /user/send-password-reset-email would go here
      console.log("Sending reset email to:", email);

      // Simulating API success
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 py-10">
          {/* Left Side: Banner Visual */}
          <div
            className="w-full lg:w-1/2 min-h-[500px] lg:h-[650px] rounded overflow-hidden relative bg-cover bg-center flex flex-col justify-between p-6 sm:p-10"
            style={{
              backgroundImage: "url('https://phonico.com/images/authImg.png')",
            }}
          >
            {/* Top Content */}
            <div className="space-y-3">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Welcome to Phonico
              </h2>
              <p className="text-white/90 text-base sm:text-lg max-w-md">
                Your Gateway to USA Connectivity!
              </p>
            </div>

            {/* Bottom Content */}
            <div className="space-y-2 mt-10 lg:mt-0">
              <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
                Seamless Connectivity
              </h3>
              <p className="text-white/90 text-sm sm:text-base">
                Enjoy the best coverage in the USA, Mexico, and Canada!
              </p>
            </div>
          </div>

          {/* Right Side: Content & Form Container */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-10">
            {isSuccess ? (
              <div className="space-y-4 w-full max-w-[550px] mx-auto lg:mx-0">
                <div className="space-y-3 text-center lg:text-left">
                  <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
                    Email Sent!
                  </h1>
                  <p className="font-semibold text-gray-500 text-sm sm:text-base">
                    Please check your inbox for recovery instructions.
                  </p>
                </div>
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded text-center font-semibold animate-fade-in">
                  🎉 Reset link sent! Please check your email.
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[550px] mx-auto lg:mx-0 flex flex-col gap-6">
                {/* Heading placed directly above the input fields */}
                <div className="space-y-3 text-center lg:text-left">
                  <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-gray-700">
                    Forgot Password
                  </h1>
                  <p className="font-semibold text-gray-500 text-sm sm:text-base">
                    Don’t Worry! We are here to help recover your password.
                    Remember your details?{" "}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="font-medium mb-1 text-gray-700"
                    >
                      Enter Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="border mt-2 border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ee5e7f]"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="`w-full mt-4 px-6 py-3 font-semibold rounded transition duration-200 hover:bg-[#ee5e7f] hover:text-white border border-[#ee5e7f] text-[#ee5e7f]"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
