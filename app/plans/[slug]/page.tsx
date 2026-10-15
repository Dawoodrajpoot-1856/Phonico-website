import { Suspense } from "react";
import { notFound } from "next/navigation";
import PlanDetail from "@/components/apiData/PlanDetail";
import { getGuestPlanSlug, type GuestPlan } from "@/lib/planPresentation";
import { getGuestPlans } from "@/services/plans.services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function PlanContent({ params }: PageProps) {
  const { slug } = await params;
  const fetchedPlans = await getGuestPlans();
  const plans = Array.isArray(fetchedPlans)
    ? (fetchedPlans as GuestPlan[])
    : [];

  const planIndex = plans.findIndex(
    (candidate) => getGuestPlanSlug(candidate) === slug,
  );

  if (planIndex === -1 || !plans[planIndex]) {
    return notFound();
  }

  const plan = plans[planIndex];

  return <PlanDetail currentPlan={plan} />;
}

export default function PlanPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-7xl mx-auto mt-10 mb-10 px-4 sm:px-6 lg:px-8 animate-pulse">
          <div className="h-[480px] rounded-xl bg-gray-100 flex items-center justify-center">
            <p className="text-gray-400 font-medium">Loading plan details...</p>
          </div>
        </div>
      }
    >
      <PlanContent params={params} />
    </Suspense>
  );
}
