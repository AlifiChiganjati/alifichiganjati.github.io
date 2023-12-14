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
      className="flex flex-col p-4 md:w-1/2"
    >
      <h2 className="text-shadow flex  flex-col text-2xl font-bold uppercase text-primary md:text-3xl lg:text-5xl">
        <span className="text-shadow-none mb-2 text-2xl font-normal normal-case text-dark-primary">
          Hi, I'm
        </span>
        {typeEffect}
      </h2>

      <p className="mt-2 text-justify text-base font-light text-dark-primary md:text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quibusdam
        minus possimus enim nobis unde earum, aut dolore adipisci ducimus
        recusandae magnam esse facere corrupti aliquam sapiente eligendi!
        Assumenda, eius?
      </p>
    </div>
  );
};

export default HeroText;
