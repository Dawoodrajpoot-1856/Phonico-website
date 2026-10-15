import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartPlan {
  id?: number | string;
  title?: string;
  name?: string;
  price?: number | string;
  data_usable?: number | string;
  slug?: string;
  description?: string;
  customPlanName?: string;
  customDetails?: string;
  customBgColor?: string;
}

interface PlanState {
  cart: CartPlan[];
}

const getSavedCartFromStorage = (): CartPlan[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("phonico_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const initialState: PlanState = {
  cart: [],
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    hydrateCart: (state, action: PayloadAction<CartPlan[]>) => {
      state.cart = action.payload;
    },

    addToCart: (state, action: PayloadAction<CartPlan>) => {
      state.cart.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("phonico_cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number | string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      if (typeof window !== "undefined") {
        localStorage.setItem("phonico_cart", JSON.stringify(state.cart));
      }
    },
    clearCart: (state) => {
      state.cart = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem("phonico_cart");
      }
    },
  },
});

export const getSavedCart = getSavedCartFromStorage;

export const {
  hydrateCart,
  addToCart,
  removeFromCart,
  clearCart,
} = planSlice.actions;

export default planSlice.reducer;
