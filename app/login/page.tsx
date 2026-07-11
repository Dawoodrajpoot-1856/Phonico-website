"use client";
import React, { useState } from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import Link from "next/link";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initially false

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

      <div className=" max-w-[1270px] mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-7xl mx-auto  py-10">
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
            <h1 className="font-bold ml-5 text-2xl mt-10  sm:text-3xl lg:text-3xl text-center lg:text-left">
              Welcome to the USA’s Fastest- <br /> Growing eSIM Network!
            </h1>
            <p className="font-semibold text-center lg:text-left ml-5 text-gray-500">
              Already a Phonico eSIM profile holder? Log in to your account to
              check
              <br /> details or upgrade your Plan.
            </p>

            <div className="flex flex-row ml-4 p-1">
              <Link href="/login">
                <button className="flex items-center justify-center gap-2 font-bold text-white p-2 h-12 w-68 bg-[#ee5e7f] hover:bg-[#ec3c65] rounded">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="font-semibold rounded p-2 text-gray-500 h-12  w-70  border-gray-300 bg-gray-100">
                  Register
                </button>
              </Link>
            </div>
            {!isLoggedIn ? (
              <>
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
                    className="border border-gray-300 rounded p-3 w-full max-w-[550px] "
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col mt-2 ml-4">
                  <label htmlFor="password" className="font-medium mb-1">
                    Enter Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    className="border border-gray-300 rounded p-3 w-full max-w-[550px]"
                  />
                </div>
                <Link
                  className="ml-5 text-blue-500 underline"
                  href="/forgotpassword"
                >
                  Forgot password?
                </Link>
                <button
                  onClick={handleLogin}
                  className="mt-2 w-full ml-4 text-pink-300 border border-pink-300 max-w-[560px] px-6 py-3 hover:text-white transition duration-200  font-semibold hover:bg-[#ee5e7f] rounded self-center lg:self-start"
                >
                  Login
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="mt-5 w-full sm:w-auto px-6 py-3 text-white bg-red-500 hover:bg-[#f06989] font-bold rounded self-center lg:self-start"
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
