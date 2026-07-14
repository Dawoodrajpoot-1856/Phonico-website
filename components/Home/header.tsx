"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, RefreshCw, UserPlus, LogOut } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { data: session } = useSession();
  const cart = useAppSelector((state) => state.plan.cart);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
    setIsOpen(false);
  };

  return (
    <div className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="flex flex-row justify-between items-center h-20 px-4 2xl:max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              className="h-18 w-20 object-contain"
              src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=256&q=75"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-row gap-8 lg:gap-10">
          <Link href="/">
            <li className="relative list-none font-semibold text-[#ee5e7f] cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[6px] after:w-full after:bg-[#ee5e7f] after:rounded-full">
              Home
            </li>
          </Link>
          <Link href="/plans">
            <li className="relative list-none font-semibold text-gray-700 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[6px] after:w-0 hover:after:w-full after:bg-[#ee5e7f] after:rounded-full after:transition-all after:duration-300">
              Plans
            </li>
          </Link>
          <Link href="/blog">
            <li className="relative list-none font-semibold text-gray-700 cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[6px] after:w-0 hover:after:w-full after:bg-[#ee5e7f] after:rounded-full after:transition-all after:duration-300">
              Blog
            </li>
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-5">
          <Link href="/easypay">
            <button className="flex items-center justify-center gap-2 font-bold rounded p-2 text-white h-11 px-4 bg-[#ee5e7f] hover:bg-[#ec3c65] whitespace-nowrap text-sm">
              <RefreshCw className="w-4 h-4" /> Top-Up-Now
            </button>
          </Link>

          {session ? (
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 font-bold text-[#ee5e7f] p-2 h-11 px-5 bg-white border border-gray-200 hover:bg-gray-50 rounded text-sm transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          ) : (
            <>
              <Link href="/login">
                <button className="flex items-center justify-center gap-2 font-bold text-white p-2 h-11 px-5 bg-[#ee5e7f] hover:bg-[#ec3c65] rounded text-sm">
                  <LogIn className="w-4 h-4" /> Login
                </button>
              </Link>
              <Link href="/register">
                <button className="flex items-center justify-center gap-2 p-2 border border-gray-200 h-11 px-4 hover:bg-gray-50 text-gray-800 font-bold rounded transition-colors duration-200 text-sm">
                  <UserPlus className="h-4 w-4 text-gray-600" /> Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 p-1"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="py-2 font-bold text-center border-b"
          >
            Home
          </Link>
          <Link
            href="/plans"
            onClick={() => setIsOpen(false)}
            className="py-2 font-bold text-center border-b"
          >
            Plans
          </Link>

          {session ? (
            <button
              onClick={handleLogout}
              className="font-bold rounded p-3 w-full bg-white border border-gray-100 text-[#ee5e7f] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="font-bold rounded p-3 text-gray-800 w-full bg-gray-100">
                  Login
                </button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <button className="font-bold rounded p-3 text-white w-full bg-[#ee5e7f]">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
