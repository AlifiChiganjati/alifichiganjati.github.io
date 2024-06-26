import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

const HeroText = ({
  dataAos,
  dataAosDuration,
  dataAosEasing,
  dataAosDelay,
}) => {
  const [typeEffect] = useTypewriter({
    words: ["Alifi Chiganjati👋", "Full-Stack Developer💻"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40,
  });

  return (
    <div
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-easing={dataAosEasing}
      data-aos-delay={dataAosDelay}
      className="flex flex-col px-2 pt-20  md:w-1/2 md:pt-0 lg:ml-2"
    >
      <p className="text-shadow-none mb-2 text-lg font-normal normal-case  text-dark-primary dark:text-dark-light min-[400px]:text-xl md:text-2xl">
        Hi, I'm
      </p>
      <h2 className="text-shadow flex cursor-auto text-xl  font-bold uppercase text-primary dark:text-dark-light min-[400px]:text-2xl md:text-3xl lg:text-5xl">
        {typeEffect}
        <Cursor />
      </h2>

      <p className="mt-2 text-justify text-sm  text-dark-primary dark:text-dark-text-primary min-[400px]:text-base md:text-xl">
        I specialize in building responsive and user-friendly Interfaces. I'm
        committed to employing the lastest technologies to elevate web
        development projects. As a coder, I'm always looking for new challenges
        and opportunities to grow my skills. I'm excited to work with you and
        help you build your next great project. let's build something great!
      </p>
    </div>
  );
};

export default HeroText;
