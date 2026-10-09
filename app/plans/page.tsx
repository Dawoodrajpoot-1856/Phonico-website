import { Suspense } from "react";
import Packages from "@/components/Home/Pakages";
import { getGuestPlans } from "@/services/plans.services";
import StoreProvider from "@/redux/StoreProvider";

export default async function PlansPage() {
  const plans = await getGuestPlans();

  return (
    <>
      <Suspense
        fallback={<div className="py-10 text-center">Loading plans...</div>}
      >
        <StoreProvider>
          <Packages initialPlans={plans} />
        </StoreProvider>
      </Suspense>
    </>
  );
}
