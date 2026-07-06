"use client";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import { useState, useEffect } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    if (user) {
      setIsLoggedIn(true);
      setUserEmail(user.email);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setUserEmail(email);
    alert("Signed up Successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
    setUserEmail("");
    alert("Logged out Successfully");
  };
  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      <Header />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto px-4 py-10">
        <div className="md:w-1/2">
          <img
            className="w-full h-auto rounded-2xl"
            src="/blue.jpg"
            alt="Phonico eSIM"
          />
        </div>

        <div className="md:w-1/2 space-y-4">
          <h1 className="font-bold text-2xl">Grab Your Phonico eSIM Now!</h1>
          <p className="font-semibold text-gray-700">
            Stay Connected Across the USA and Beyond with attractive eSIM Plans.
            Let’s get started!
          </p>

          {!isLoggedIn ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="font-medium">
                  Enter Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded p-2 mt-2 w-full"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded p-2 mt-2 w-full"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-pink-400 text-white font-bold rounded p-2 hover:bg-[#f06989]"
              >
                Submit
              </button>
            </form>
          ) : (
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white font-bold rounded p-2 hover:bg-[#f06989]"
            >
              Logout
            </button>
          )}

          <p className="text-sm text-gray-500">
            By signing up to create an account, I accept the Company’s Terms of
            Use & Privacy Policy
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
