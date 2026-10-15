"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { getSavedCart, hydrateCart } from "./planSlice";
import { makeStore } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store] = useState(makeStore);

  useEffect(() => {
    store.dispatch(hydrateCart(getSavedCart()));
  }, [store]);

  return <Provider store={store}>{children}</Provider>;
}
