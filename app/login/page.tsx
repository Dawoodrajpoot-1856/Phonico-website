"use client";
import React, { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from "@/components/Home/header";
import Footer from "@/components/Home/Footer";
import Link from "next/link";

const LoginPage = () => {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password. Please try again.");
      setIsLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-[1270px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-stretch gap-10 max-w-7xl mx-auto py-6 md:py-10">
          {/* Banner Section - Exact Match */}
          <div
            className="w-full md:w-1/2 h-[350px] sm:h-[450px] md:h-[650px] rounded-2xl overflow-hidden relative bg-cover bg-center flex flex-col justify-between p-6 sm:p-8 md:p-12 shrink-0 text-center"
            style={{
              backgroundImage: "url('https://phonico.com/images/authImg.png')",
            }}
          >
            {/* Top Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                Welcome to Phonico
              </h2>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-sm mx-auto font-medium drop-shadow-md">
                Your Gateway to USA Connectivity!
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col gap-2">
              <p className="text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
                Seamless Connectivity
              </p>
              <p className="text-white text-sm sm:text-base md:text-lg max-w-sm mx-auto font-medium drop-shadow-md">
                Enjoy the best coverage in the USA, Mexico, and Canada!
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center">
            {status === "authenticated" ? (
              <div className="text-center p-6 border rounded-lg bg-gray-50">
                <p className="mb-4">
                  Logged in as: <strong>{session?.user?.email}</strong>
                </p>
                <button
                  onClick={() => signOut()}
                  className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <div className="text-center md:text-left">
                  <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">
                    Login to your account
                  </h1>
                </div>

                <div className="flex flex-row gap-2 bg-gray-100/80 p-1.5 rounded-lg max-w-[550px] w-full self-center md:self-start">
                  <button className="flex-1 bg-[#ee5e7f] text-white py-3 font-bold rounded-md shadow-sm">
                    Login
                  </button>
                  <Link href="/register" className="flex-1">
                    <button className="w-full py-3 font-semibold text-gray-500 hover:bg-gray-200 rounded-md transition-colors">
                      Register
                    </button>
                  </Link>
                </div>

                {errorMessage && (
                  <div className="p-4 w-full max-w-[550px] self-center md:self-start bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-semibold">
                    {errorMessage}
                  </div>
                )}

                <form
                  onSubmit={handleLogin}
                  className="flex flex-col gap-4 w-full max-w-[550px] self-center md:self-start"
                >
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-sm text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      required
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#ee5e7f]/40 outline-none"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-semibold text-sm text-gray-700">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      required
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#ee5e7f]/40 outline-none"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="mt-2 w-full py-3 font-bold text-[#ee5e7f] border border-[#ee5e7f] hover:text-white hover:bg-[#ee5e7f] transition duration-200 rounded-lg shadow-sm"
                  >
                    {isLoading ? "Authenticating..." : "Login"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
