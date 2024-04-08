import html from "../assets/Image/html.png";
import css from "../assets/Image/css.png";
import js from "../assets/Image/js.png";
import react from "../assets/Image/react.svg";
import tailwind from "../assets/Image/tailwindcss.svg";
import posgresql from "../assets/Image/elephant.png";
import golang from "../assets/Image/golang.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SkillPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="skill"
      className="flex   w-full flex-col items-center justify-center bg-text-primary dark:bg-dark-secondary"
    >
      <h3
        data-aos="fade-up"
        data-aos-offset="-150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="text-shadow mb-5  pt-20 text-2xl font-bold uppercase text-primary dark:text-dark-light md:text-4xl lg:text-5xl"
      >
        My Skill
      </h3>
      <div
        data-aos="zoom-in-up"
        data-aos-offset="-150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="mt-5 min-w-[300px] rounded border border-black bg-secondary p-5 dark:bg-dark-primary md:w-[500px] lg:w-[800px]"
      >
        <ul className=" grid  w-full grid-cols-2 place-content-between place-items-center gap-5 md:grid-cols-3 lg:grid-cols-4">
          <li className="m-2 h-16 w-16">
            <img src={html} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={css} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={js} alt="html" />
          </li>
          <li className="mx-2 mt-8 h-20 w-20">
            <img src={tailwind} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={react} alt="html" />
          </li>
          <li className="h-28 w-28">
            <img src={golang} alt="golang" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={posgresql} alt="postgresql" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillPage;
