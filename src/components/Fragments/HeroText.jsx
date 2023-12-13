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
      className="md:w-1/2 flex flex-col p-4"
    >
      <h2 className="text-primary text-2xl  md:text-3xl lg:text-5xl flex flex-col uppercase font-bold text-shadow">
        <span className="text-dark-primary text-2xl font-normal mb-2 normal-case text-shadow-none">
          Hi, I'm
        </span>
        {typeEffect}
      </h2>

      <p className="mt-2 text-base md:text-xl font-light text-dark-primary text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quibusdam
        minus possimus enim nobis unde earum, aut dolore adipisci ducimus
        recusandae magnam esse facere corrupti aliquam sapiente eligendi!
        Assumenda, eius?
      </p>
    </div>
  );
};

export default HeroText;
