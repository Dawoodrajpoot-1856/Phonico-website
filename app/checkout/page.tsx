import { Suspense } from "react";
import AccordionPage from "@/components/Home/Accordian";
import Footer from "@/components/Home/Footer";
import CheckoutClient from "@/components/CheckoutClient";
import CheckoutSkeleton from "@/components/Sekeltons/CheckoutSkeleton";

export default function CheckoutPage() {
  return (
    <>
      <Suspense fallback={<CheckoutSkeleton />}>
        <CheckoutClient />
      </Suspense>

      <AccordionPage />
      <Footer />
    </>
  );
}
