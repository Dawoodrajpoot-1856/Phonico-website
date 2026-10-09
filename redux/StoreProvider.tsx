"use client";

import { startTransition, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";

let clientStore: AppStore | undefined;

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [store, setStore] = useState<AppStore | null>(null);

  useEffect(() => {
    clientStore ??= makeStore();
    startTransition(() => {
      setStore(clientStore!);
    });
  }, []);

  if (!store) return null;

  return <Provider store={store}>{children}</Provider>;
}
