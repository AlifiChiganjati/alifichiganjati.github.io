import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

const HeroText = ({
  dataAos,
  dataAosDuration,
  dataAosEasing,
  dataAosDelay,
}) => {
  const [typeEffect] = useTypewriter({
    words: ["Alifi Chiganjati 👋", "Front-end Developer 💻"],
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
      className="flex flex-col p-4 md:w-1/2 lg:ml-8"
    >
      <h2 className="text-shadow flex  flex-col text-2xl font-bold uppercase text-primary dark:text-dark-light md:text-3xl lg:text-5xl">
        <span className="text-shadow-none mb-2 text-2xl font-normal normal-case text-dark-primary dark:text-dark-light">
          Hi, I'm
        </span>
        {typeEffect}
      </h2>

      <p className="mt-2 text-justify text-base font-light text-dark-primary dark:text-dark-text-primary md:text-xl">
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
