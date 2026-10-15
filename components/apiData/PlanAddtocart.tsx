"use client";

import { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/planSlice";
import type { GuestPlan } from "@/lib/planPresentation";

export default function AddToCartButton({ plan }: { plan: GuestPlan }) {
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(plan));
    alert("Plan added to cart!");
  };

  if (!isMounted) {
    return (
      <div className="w-full mt-2 h-12 rounded bg-[#EE5E7F]/50 animate-pulse" />
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className="w-full mt-2 bg-[#EE5E7F] hover:bg-[#f33f69] active:scale-[0.99] transition-all h-12 rounded text-white font-bold text-sm tracking-wider shadow-md uppercase cursor-pointer"
    >
      Add to cart
    </button>
  );
}
