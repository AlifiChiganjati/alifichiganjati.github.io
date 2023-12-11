import HeroImage from "../components/Fragments/HeroImage";
import HeroText from "../components/Fragments/HeroText";
import heroImage from "../assets/Image/Hero.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center h-screen w-full"
    >
      <HeroText
        dataAos="fade-right"
        dataAosDuration="1000"
        dataAosDelay="200"
        dataAosEasing="ease-in-out"
      />
      <HeroImage
        src={heroImage}
        dataAos="fade-down"
        dataAosDuration="1000"
        dataAosDelay="300"
        dataAosEasing="ease-in-out"
      />
    </section>
  );
};

export default HeroPage;
