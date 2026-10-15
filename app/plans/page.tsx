import Packages from "@/components/apiData/Pakages";
import type { GuestPlan } from "@/lib/planPresentation";
import { getGuestPlans } from "@/services/plans.services";

export default async function PlansPage() {
  const fetchedPlans = await getGuestPlans();
  const plans = Array.isArray(fetchedPlans)
    ? (fetchedPlans as GuestPlan[])
    : [];

  return <Packages plans={plans} />;
}
