"use client";
import React, { useState, useEffect } from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import Link from "next/link";

const Page = () => {
  const [apiData, setApiData] = useState(null);
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch("https://platform.phonico.com/api/register");
        let data = await res.json();
        setApiData(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");
    setIsLoading(true);
    try {
      let res = await fetch("https://platform.phonico.com/api/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Error during registration:", error);
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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

          {/* Right Side: Content & Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
            <div className="space-y-3 text-center lg:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900">
                Grab Your Phonico eSIM Now!
              </h1>
              <p className="font-semibold text-gray-500 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                Already a Phonico eSIM profile holder? Log in to your account to
                check details or upgrade your Plan.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-row gap-2 bg-gray-200 w-full max-w-[550px] mx-auto lg:mx-0">
              <Link href="/login" className="flex-1">
                <button className="w-full font-semibold rounded p-2 text-gray-500 h-12 border border-gray-300 bg-gray-100 hover:bg-gray-200 transition">
                  Login
                </button>
              </Link>
              <Link href="/register" className="flex-1">
                <button className="w-full flex items-center justify-center gap-2 font-bold text-white p-2 h-12 bg-[#ee5e7f] hover:bg-[#ec3c65] rounded transition">
                  Register
                </button>
              </Link>
            </div>

            {isSuccess ? (
              <div className="p-4 w-full max-w-[550px] mx-auto lg:mx-0 bg-green-100 border border-green-400 text-green-700 rounded text-center font-semibold animate-fade-in">
                🎉 Registration Successful! Welcome aboard.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full max-w-[550px] mx-auto lg:mx-0"
              >
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
                    className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ee5e7f]"
                    required
                    disabled={isLoading}
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm font-medium">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-6 py-3 font-semibold rounded transition duration-200 
                    ${
                      isLoading
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "text-pink-500 border border-pink-300 hover:text-white hover:bg-[#ee5e7f]"
                    }`}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
