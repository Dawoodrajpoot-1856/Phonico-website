import { Suspense } from "react";
import Packages from "@/components/Home/Pakages";
import PackagesSkeleton from "@/components/Sekeltons/PakagesSekelton"; // 1. Skeleton ko import karein

export default function PlansPage() {
  return (
    <>
      <Suspense fallback={<PackagesSkeleton />}>
        <Packages />
      </Suspense>
    </>
  );
}
