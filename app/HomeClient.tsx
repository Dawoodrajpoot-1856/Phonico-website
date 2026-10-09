import Connectivity from "../components/Home/connectivity";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/header";
import Hero from "../components/Home/hero";
import Pakage from "../components/Home/pakage";
import Slider from "../components/Home/Slider";
import AccordionPage from "@/components/Home/Accordian";
import Packages from "@/components/Home/Pakages";
import StoreProvider from "@/redux/StoreProvider";
import { getGuestPlans } from "@/services/plans.services";

const Home = async () => {
  const plans = await getGuestPlans();

  return (
    <div>
      <Hero />
      <StoreProvider>
        <Packages initialPlans={plans} />
      </StoreProvider>
      <Pakage />
      <Connectivity />
      <Slider />
      <AccordionPage />
      <Footer />
    </div>
  );
};

export default Home;
