"use client";

import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/planSlice";
import type { GuestPlan } from "@/lib/planPresentation";

export default function AddToCartButton({ plan }: { plan: GuestPlan }) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(plan));
    alert("Plan added to cart!");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full mt-2 bg-[#EE5E7F] hover:bg-[#f33f69] active:scale-[0.99] transition-all h-12 rounded text-white font-bold text-sm tracking-wider shadow-md uppercase"
    >
      Add to cart
    </button>
  );
}
 