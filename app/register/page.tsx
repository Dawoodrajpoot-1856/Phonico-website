"use client";
import React, { useState, useEffect, ReactEventHandler } from "react";
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
      let res = await fetch("https://platform.phonico.com/api/register", {
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

      <div className="max-w-[1270px] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-7xl mx-auto py-10">
          <div
            className="md:w-1/2 h-[650px] rounded overflow-hidden relative bg-cover bg-center flex flex-col justify-between p-8"
            style={{
              backgroundImage: "url('https://phonico.com/images/authImg.png')",
            }}
          >
            {/* Top Content */}
            <div>
              <h2 className="text-white text-5xl ml-10 mt-10 font-bold leading-tight">
                Welcome to Phonico
              </h2>
              <p className="text-white/90 mt-3 ml-30 text-lg max-w-md">
                Your Gateway to USA Connectivity!
              </p>
            </div>

            {/* Bottom Content */}
            <div>
              <h3 className="text-white text-4xl ml-14 font-bold">
                Seamless Connectivity
              </h3>
              <p className="text-white/90 mt-2 ml-10">
                Enjoy the best coverage in the USA, Mexico, and Canada!
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="font-bold ml-5 text-2xl mt-10 sm:text-3xl lg:text-3xl text-center lg:text-left">
              Grab Your Phonico eSIM Now!
            </h1>
            <p className="font-semibold text-center lg:text-left ml-5 text-gray-500">
              Already a Phonico eSIM profile holder? Log in to your account to
              check
              <br /> details or upgrade your Plan.
            </p>
            <div className="flex flex-row ml-4 p-1">
              <Link href="/login">
                <button className="font-semibold rounded p-2 text-gray-500 h-12 w-70 border-gray-300 bg-gray-100">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="flex items-center justify-center gap-2 font-bold text-white p-2 h-12 w-68 bg-[#ee5e7f] hover:bg-[#ec3c65] rounded">
                  Register
                </button>
              </Link>
            </div>

            {isSuccess ? (
              <div className="mt-4 ml-4 p-4 max-w-[550px] bg-green-100 border border-green-400 text-green-700 rounded text-center font-semibold animate-fade-in">
                🎉 Registration Successful! Welcome aboard.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col mt-2 ml-4">
                  <label htmlFor="email" className="font-medium mb-1">
                    Enter Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="border border-gray-300 rounded p-3 w-full max-w-[550px]"
                    required
                    disabled={isLoading}
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm ml-4 mt-1">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`mt-2 w-full ml-4 max-w-[560px] px-6 py-3 font-semibold rounded self-center lg:self-start transition duration-200 
                    ${
                      isLoading
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "text-pink-300 border border-pink-300 hover:text-white hover:bg-[#ee5e7f]"
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
