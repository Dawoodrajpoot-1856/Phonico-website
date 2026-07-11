import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

// Yeh dispatch hook aap components mein actions call (data save) karne ke liye use karenge
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Yeh selector hook aap components mein state se data nikalne (data show) karne ke liye use karenge
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);

// Yeh store instance ko directly access karne ke liye hai (boht kam zaroorat parti hai)
export const useAppStore = () => useStore<AppStore>();
