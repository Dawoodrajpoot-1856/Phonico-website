import { Accordion } from "radix-ui";
import Connectivity from "../components/Home/connectivity";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/header";
import Hero from "../components/Home/hero";
import Pakage from "../components/Home/pakage";
import Slider from "../components/Home/Slider";
import AccordionPage from "@/components/Home/Accordian";
import Packages from "@/components/Home/Pakages";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Packages />
      <Pakage />
      <Connectivity />
      <Slider />
      <AccordionPage />
      <Footer />
    </div>
  );
};

export default Home;
