// components/CartDrawer.tsx
"use client";
import { useAppSelector } from "@/redux/hooks";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const cart = useAppSelector((state) => state.plan.cart);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[100]" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-[101] shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h2 className="font-bold text-xl">Your Cart</h2>
          <button onClick={onClose} className="text-2xl">
            ✕
          </button>
        </div>

        <div className="p-5">
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            cart.map((item: any, index: number) => (
              <div key={index} className="border-b py-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
