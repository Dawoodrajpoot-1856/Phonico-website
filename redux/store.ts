import { configureStore } from "@reduxjs/toolkit";
import type { UnknownAction } from "redux";
import planReducer from "./planSlice";

const rootReducer = (
  state: { plan: ReturnType<typeof planReducer> } | undefined,
  action: UnknownAction,
) => ({
  plan: planReducer(state?.plan, action),
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
