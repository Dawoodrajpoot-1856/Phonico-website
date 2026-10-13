import AccordionPage from "@/components/Home/Accordian";
import Packages from "@/components/apiData/Pakages";
import PackagesSkeleton from "@/components/Sekeltons/PakagesSekelton";
import Hero from "@/components/Home/hero";
import Package from "@/components/Home/pakage";
import Connectivity from "@/components/Home/connectivity";
import Footer from "@/components/Home/Footer";
import ReviewsCarousel from "@/components/Home/Slider";
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
