import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./planSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      plan: planReducer, // Yeh state key 'plan' banta hai jisse data access hoga
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
