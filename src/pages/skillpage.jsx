import html from "../assets/Image/hmtl5.svg";
import css from "../assets/Image/css.svg";
import js from "../assets/Image/js.svg";
import react from "../assets/Image/react.svg";
import tailwind from "../assets/Image/tailwindcss.svg";

const SkillPage = () => {
  return (
    <section
      id="skill"
      className="flex  bg-text-primary flex-col justify-center items-center w-full"
    >
      <h3 className="text-2xl md:text-4xl mt-5 lg:text-5xl text-primary uppercase text-shadow font-bold">
        My Skill
      </h3>
      <div className="flex w-[400px] md:w-[500px] lg:w-[800px] bg-secondary p-5 rounded border-black border mt-5">
        <ul className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center place-content-between w-full gap-5">
          <li className="w-16 h-16 m-2">
            <img src={html} alt="html" />
          </li>
          <li className="w-12 h-12 m-2">
            <img src={css} alt="html" />
          </li>
          <li className="w-16 h-16 m-2">
            <img src={js} alt="html" />
          </li>
          <li className="w-16 h-16 m-2">
            <img src={tailwind} alt="html" />
          </li>
          <li className="w-16 h-16 m-2">
            <img src={react} alt="html" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillPage;
