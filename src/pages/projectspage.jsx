import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AlquranWeb from "../assets/Image/alquran-web.png";

const ProjectPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="project"
      className="flex w-full flex-col items-center justify-center bg-text-primary pt-10 dark:bg-dark-secondary"
    >
      <h3
        data-aos="fade-down"
        data-aos-offset="-200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="text-shadow mb-5  pt-20 text-2xl font-bold uppercase text-primary dark:text-light md:text-4xl lg:text-5xl"
      >
        my project
      </h3>
      <div
        data-aos="fade-down"
        data-aos-offset="-150"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        className="mt-5 flex flex-wrap items-center justify-center gap-5 "
      >
        <a
          href="https://alifichiganjati.github.io/al-quran/"
          target="_blank"
          className="flex h-[490px] w-[300px] cursor-pointer flex-col items-center justify-start gap-5 border border-primary opacity-75 shadow hover:opacity-100 active:opacity-100 dark:border-light"
          rel="noreferrer"
        >
          <div className="h-[298px] w-[298px] bg-cover">
            <img
              src={AlquranWeb}
              alt="Image of project"
              className="h-full w-full"
            />
          </div>
          <h4 className="px-2  text-xl font-semibold dark:text-light md:text-2xl lg:text-3xl">
            Al-Quran
          </h4>
          <p className="p-2 text-justify  dark:text-dark-text-primary">
            Website Al-Qur'an menggunakan API dari Kemenag
          </p>
        </a>
        <div className="flex h-auto w-[300px] cursor-pointer flex-col items-center justify-center gap-5 border border-primary opacity-75 shadow hover:opacity-100 active:opacity-100 dark:border-light">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="px-2  text-xl font-semibold dark:text-light md:text-2xl lg:text-3xl">
            Title of Project
          </h4>
          <p className="p-2 text-justify  dark:text-dark-text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
        <div className="flex h-auto w-[300px] cursor-pointer flex-col items-center justify-center gap-5 border border-primary opacity-75 shadow hover:opacity-100 active:opacity-100 dark:border-light">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="px-2  text-xl font-semibold dark:text-light md:text-2xl lg:text-3xl">
            Title of Project
          </h4>
          <p className="p-2 text-justify  dark:text-dark-text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
