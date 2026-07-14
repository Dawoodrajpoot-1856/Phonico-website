"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LogIn,
  RefreshCw,
  UserPlus,
  LogOut,
  ShoppingCart,
  X,
  Trash2,
} from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeFromCart } from "@/redux/planSlice";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { data: session } = useSession();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.plan.cart);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
    setIsOpen(false);
  };

  const handleRemoveItem = (item: any) => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const cartItems = Array.isArray(cart) ? cart : [];
  const cartCount = cartItems.reduce(
    (sum: number, item: any) => sum + (item?.quantity ?? 1),
    0,
  );
  const cartTotal = cartItems.reduce(
    (sum: number, item: any) =>
      sum + (Number(item?.price) || 0) * (item?.quantity ?? 1),
    0,
  );

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
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center justify-center h-11 w-12 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <ShoppingCart className="w-7 h-6 text-gray-700" />
            {isMounted && cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ee5e7f] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

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

        {/* Mobile Actions (cart + toggle) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-gray-700 p-1"
          >
            <ShoppingCart className="h-7 w-7" />
            {isMounted && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ee5e7f] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

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
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-2 shadow-xl">
          {/* Har link mein hover:text-[#ee5e7f] add kar diya hai */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="py-3 font-bold text-center border-b border-gray-100 hover:text-[#ee5e7f] hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/plans"
            onClick={() => setIsOpen(false)}
            className="py-3 font-bold text-center border-b border-gray-100 hover:text-[#ee5e7f] hover:bg-gray-50 transition-colors"
          >
            Plans
          </Link>
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="py-3 font-bold text-center border-b border-gray-100 hover:text-[#ee5e7f] hover:bg-gray-50 transition-colors"
          >
            Blog
          </Link>

          <div className="mt-4">
            {session ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="font-bold rounded-lg p-3 w-full border border-[#ee5e7f] text-[#ee5e7f] flex items-center justify-center gap-2 hover:bg-[#ee5e7f] hover:text-white transition-all"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <button className="font-bold rounded-lg p-3 text-gray-800 w-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    Login
                  </button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <button className="font-bold rounded-lg p-3 text-white w-full bg-[#ee5e7f] hover:bg-[#d64f6e] transition-colors">
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60]"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer (slides from right) */}
      <div
        className={`fixed top-20 right-0 h-[550px] w-full sm:w-[400px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col rounded-2xl overflow-hidden ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center bg-red-200 justify-between px-5 h-16 border-b border-gray-100">
          <h2 className="font-bold text-lg text-gray-800 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#ee5e7f]" />
            My Cart
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded border-black transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {!isMounted || cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3">
              <img
                src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=256&q=75"
                alt="Phonico Logo"
                className="h-16 w-16 object-contain opacity-70"
              />
              <p className="text-gray-500 font-medium">Your cart is empty</p>
              <Link href="/plans" onClick={() => setIsCartOpen(false)}>
                <button className="mt-2 font-bold rounded p-2 px-5 text-white bg-[#ee5e7f] hover:bg-[#ec3c65] text-sm">
                  Browse Plans
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item: any, index: number) => (
                <div
                  key={item?.id ?? index}
                  className="flex items-center gap-3 border border-gray-100 rounded-lg p-3"
                >
                  <img
                    src={
                      item?.image ??
                      "https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=256&q=75"
                    }
                    alt={item?.name ?? item?.title ?? "Item"}
                    className="h-18 w-18 object-contain rounded bg-gray-50"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">
                      {item?.name ?? item?.title ?? "Plan"}
                    </p>
                    {item?.quantity && (
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="font-bold text-[#ee5e7f] text-xl">
                      ${Number(item?.price ?? 0).toLocaleString()}
                    </span>
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className=" text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {isMounted && cartItems.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-100 p-5 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Subtotal</span>
              <span className="font-bold text-lg text-[#ee5e7f]">
                $ {cartTotal.toLocaleString()}
              </span>
            </div>
            <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
              <button className="w-full font-bold rounded p-3 text-white bg-[#ee5e7f] hover:bg-[#ec3c65] transition-colors">
                Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
