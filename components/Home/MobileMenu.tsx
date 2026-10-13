"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isMounted: boolean;
  session: any;
  handleLogout: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  isMounted,
  session,
  handleLogout,
}) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-2 shadow-xl">
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
        {isMounted && session ? (
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
  );
};

export default MobileMenu;
