import AccordionPage from "@/components/Home/Accordian";
import Packages from "@/components/Home/Pakages";
import PackagesSkeleton from "@/components/Sekeltons/PakagesSekelton";
import Hero from "./hero";
import Package from "./pakage";
import Connectivity from "./connectivity";
import Footer from "./Footer";
import ReviewsCarousel from "./Slider";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<PackagesSkeleton />}>
        <Packages />
      </Suspense>
      <Package />
      <Connectivity />
      <ReviewsCarousel />
      <AccordionPage />
      <Footer />
    </div>
  );
};

export default HomePage;
