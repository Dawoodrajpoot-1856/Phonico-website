"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LogIn, RefreshCw, UserPlus } from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeFromCart } from "@/redux/planSlice";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.plan.cart);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleDelete = (id: number | string) => {
    dispatch(removeFromCart({ id }));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0,
  );

  return (
    <>
      <div className="bg-white sticky top-0 z-50">
        {/* Main Navbar Wrapper */}
        <div className="flex flex-row justify-between items-center h-20 px-4 max-w-7xl mx-auto w-full">
          <div>
            <Link href="/">
              <img
                className="h-18 w-20 object-contain"
                src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=256&q=75"
                alt="Logo"
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex flex-row gap-8 lg:gap-10">
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

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            {/* Desktop Cart Button with Dynamic Badge Count */}
            <button
              onClick={() => setOpen((p) => !p)}
              className="flex items-center justify-center border border-gray-300 h-11 w-14 hover:bg-gray-50 rounded transition-colors duration-200 relative"
            >
              <img
                src="https://phonico.com/images/cartIcon.svg"
                alt="Cart"
                className="h-5 w-5"
              />
              {isMounted && cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#ec3c65] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-sm animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>

            <Link href="/easypay">
              <button className="flex items-center justify-center gap-2 font-bold rounded p-2 text-white h-11 px-4 bg-[#ee5e7f] hover:bg-[#ec3c65] whitespace-nowrap text-sm">
                <RefreshCw className="w-4 h-4" /> Top-Up-Now
              </button>
            </Link>

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
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex md:hidden items-center gap-4">
            {/* Direct Cart Button on Mobile Header */}
            <button
              onClick={() => setOpen((p) => !p)}
              className="flex items-center justify-center border border-gray-300 h-10 w-12 hover:bg-gray-50 rounded relative"
            >
              <img
                src="https://phonico.com/images/cartIcon.svg"
                alt="Cart"
                className="h-5 w-5"
              />
              {isMounted && cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#ec3c65] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-1"
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

        {/* MOBILE DROPDOWN LINKS */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg absolute left-0 right-0 top-20 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-3 text-center">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="py-2 font-bold text-[#ec3c65] border-b border-gray-50"
              >
                Home
              </Link>
              <Link
                href="/plans"
                onClick={() => setIsOpen(false)}
                className="py-2 font-bold text-gray-700 hover:text-[#ec3c65] border-b border-gray-50"
              >
                Plans
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="py-2 font-bold text-gray-700 hover:text-[#ec3c65] border-b border-gray-50"
              >
                Blog
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link
                href="/easypay"
                onClick={() => setIsOpen(false)}
                className="col-span-2"
              >
                <button className="font-bold rounded p-3 text-white w-full bg-[#ee5e7f] hover:bg-[#ec3c65] flex items-center justify-center gap-2 shadow-sm">
                  <RefreshCw className="w-4 h-4" /> Top-Up-Now
                </button>
              </Link>
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="font-bold rounded p-2.5 text-gray-800 w-full bg-gray-50 border border-gray-200 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <LogIn className="w-4 h-4 text-gray-600" /> Login
                </button>
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)}>
                <button className="font-bold rounded p-2.5 text-gray-800 w-full bg-gray-50 border border-gray-200 hover:bg-gray-100 flex items-center justify-center gap-2">
                  <UserPlus className="w-4 w-4 text-gray-600" /> Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div
        className={`fixed top-0 bottom-5  rounded-b-2xl mt-20  right-0 h-[calc(100vh-100px)] w-[88%] sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b flex justify-between items-center h-15 bg-red-100  rounded-t-2xl">
          <div className="w-8" />

          <h1 className="font-bold text-xl text-center text-red-500 flex-1">
            Shopping Cart
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="w-6 h-6 flex items-center justify-center rounded-full text-black text-xs border border-slate-700 shadow-sm transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-190px)]">
          {!isMounted || cart.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 font-medium">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div
                key={item.id || index}
                className=" p-3 flex gap-3 items-center bg-gray-50/50"
              >
                <img
                  src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=256&q=75"
                  className="w-22 h-20 object-contain bg-white rounded p-1"
                  alt="Logo"
                />
                {/* Left Side Text Content Container */}
                <div className="flex flex-col flex-1 min-w-0 bg-transparent">
                  {/* Title */}
                  <p className="font-semibold text-sm text-gray-800 truncate">
                    {item.customPlanName || item.name}
                  </p>

                  {/* Subtitle / Details */}
                  <p className="text-xs text-gray-500 truncate mt-0.5">
                    {item.data_usable ? `${item.data_usable}GB` : "eSIM Plan"} •
                    Pre-paid
                  </p>
                </div>

                <div className="flex gap-2">
                  <p className="font-bold text-pink-500 mt-1 text-xl">
                    ${item.price}
                  </p>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2  rounded-lg text-[#ec3c65]   transition-colors shrink-0  cursor-pointer"
                    title="Delete item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Area Locked at Bottom */}
        <div className="p-4 absolute bottom-0 left-0 right-0 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
          <div className="border rounded-xl p-4 bg-gray-50/50 border-gray-100">
            <div className="flex justify-between items-center mb-4 px-1">
              <span className="font-semibold text-gray-700">Subtotal:</span>
              <span className="font-bold text-xl">
                ${isMounted ? totalPrice.toFixed(2) : "0.00"}
              </span>
            </div>
            <Link href="/checkout">
              <button
                disabled={!isMounted || cart.length === 0}
                className={`w-full border-2 font-bold py-2.5 rounded-xl transition-all ${
                  isMounted && cart.length > 0
                    ? "border-[#ec3c65] bg-[#ec3c65] text-white hover:bg-[#ee5e7f] cursor-pointer"
                    : "border-pink-300 text-pink-300 opacity-50 cursor-not-allowed"
                }`}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* CART OVERLAY - Adjusted top-20 to blend seamlessly */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-x-0 top-20 bottom-0 bg-black/40 backdrop-blur-xs z-40 transition-opacity"
        />
      )}
    </>
  );
};

export default Header;
