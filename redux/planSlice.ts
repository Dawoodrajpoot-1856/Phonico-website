import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedPlanType {
  id: number | string;
  title: string;
  name: string;
  price: number | string;
  data_usable: number | string;
  slug?: string;
  description?: string;
  customPlanName: string;
  customDetails: string;
  customBgColor: string;
}

interface PlanState {
  selectedPlan: SelectedPlanType | null;
  cart: SelectedPlanType[]; // Cart items store karne ke liye array type set kiya
}

// Browser environment safe check for localStorage (Selected Plan)
const getSavedPlanFromStorage = (): SelectedPlanType | null => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("selected_phonico_plan");
    return saved ? JSON.parse(saved) : null;
  }
  return null;
};

// Browser environment safe check for localStorage (Cart Items)
const getSavedCartFromStorage = (): SelectedPlanType[] => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("phonico_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  }
  return [];
};

const initialState: PlanState = {
  selectedPlan: getSavedPlanFromStorage(),
  cart: getSavedCartFromStorage(), // Initial load par saved cart items uthayega
};

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    setSelectedPlan: (state, action: PayloadAction<SelectedPlanType>) => {
      state.selectedPlan = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "selected_phonico_plan",
          JSON.stringify(action.payload),
        );
      }
    },
    clearSelectedPlan: (state) => {
      state.selectedPlan = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("selected_phonico_plan");
      }
    },

    // --- CART REDUCERS ---
    addToCart: (state, action: PayloadAction<SelectedPlanType>) => {
      state.cart.push(action.payload);
      // LocalStorage mein cart update karein
      if (typeof window !== "undefined") {
        localStorage.setItem("phonico_cart", JSON.stringify(state.cart));
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: number | string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      // LocalStorage mein filter ke baad update karein
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

// Naye actions ko bhi export mein add kar diya
export const {
  setSelectedPlan,
  clearSelectedPlan,
  addToCart,
  removeFromCart,
  clearCart,
} = planSlice.actions;

export default planSlice.reducer;
