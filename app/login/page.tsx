"use client";
import React, { useState } from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import Link from "next/link";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("signupEmail");
    const storedPassword = localStorage.getItem("signupPassword");

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (email === storedEmail && password === storedPassword) {
      alert("Login Successful!");
      setIsLoggedIn(true);
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("signupEmail");
    localStorage.removeItem("signupPassword");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    alert("Logged out successfully");
  };

  return (
    <>
      <Header />

      <div className="max-w-[1270px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch gap-10 max-w-7xl mx-auto py-6 md:py-10">
          {/* Left Side Banner - Fixed hardcoded internal text offsets and responsive heights */}
          <div
            className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[650px] rounded-2xl overflow-hidden relative bg-cover bg-center flex flex-col justify-between p-6 sm:p-8 md:p-12 shrink-0"
            style={{
              backgroundImage: "url('https://phonico.com/images/authImg.png')",
            }}
          >
            {/* Top Content */}
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Welcome to Phonico
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-sm">
                Your Gateway to USA Connectivity!
              </p>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                Seamless Connectivity
              </h3>
              <p className="text-white/90 text-xs sm:text-sm md:text-base max-w-md">
                Enjoy the best coverage in the USA, Mexico, and Canada!
              </p>
            </div>
          </div>

          {/* Right Side Form Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
            <div className="text-center md:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl text-gray-900 leading-tight">
                Welcome to the USA’s Fastest-{" "}
                <br className="hidden sm:inline" /> Growing eSIM Network!
              </h1>
              <p className="font-semibold text-sm text-gray-500 mt-3 max-w-xl mx-auto md:mx-0">
                Already a Phonico eSIM profile holder? Log in to your account to
                check details or upgrade your Plan.
              </p>
            </div>

            {/* Action Toggle Tabs - Responsive sizing for small mobile viewport widths */}
            <div className="flex flex-row gap-2 bg-gray-100/80 p-1.5 rounded-lg max-w-[550px] w-full self-center md:self-start">
              <Link href="/login" className="flex-1">
                <button className="flex items-center justify-center font-bold text-white py-3 w-full bg-[#ee5e7f] hover:bg-[#ec3c65] rounded-md transition-colors duration-200 shadow-xs">
                  Login
                </button>
              </Link>
              <Link href="/register" className="flex-1">
                <button className="font-semibold rounded-md py-3 text-gray-500 w-full hover:bg-gray-200 transition-colors duration-200">
                  Register
                </button>
              </Link>
            </div>

            {!isLoggedIn ? (
              <div className="flex flex-col gap-4 w-full max-w-[550px] self-center md:self-start">
                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-semibold text-sm text-gray-700"
                  >
                    Enter Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ee5e7f]/40 focus:border-[#ee5e7f] transition-all"
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="font-semibold text-sm text-gray-700"
                  >
                    Enter Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#ee5e7f]/40 focus:border-[#ee5e7f] transition-all"
                  />
                </div>

                {/* Forgot Password Link */}
                <div className="text-right md:text-left">
                  <Link
                    className="text-sm text-blue-500 hover:text-blue-600 font-medium underline transition-colors"
                    href="/forgotpassword"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Form Action Buttons */}
                <button
                  onClick={handleLogin}
                  className="mt-2 w-full text-[#ee5e7f] border border-[#ee5e7f] py-3 font-bold hover:text-white transition duration-200 hover:bg-[#ee5e7f] rounded-lg cursor-pointer"
                >
                  Login
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full max-w-[550px] py-3 text-white bg-red-500 hover:bg-red-600 font-bold rounded-lg transition-colors self-center md:self-start cursor-pointer shadow-xs"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
