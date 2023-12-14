import html from "../assets/Image/html-5.png";
import css from "../assets/Image/css-3.png";
import js from "../assets/Image/js.png";
import react from "../assets/Image/react.svg";
import tailwind from "../assets/Image/tailwindcss.svg";

const SkillPage = () => {
  return (
    <section
      id="skill"
      className="flex  w-full flex-col items-center justify-center bg-text-primary"
    >
      <h3 className="text-shadow mt-5 text-2xl font-bold uppercase text-primary md:text-4xl lg:text-5xl">
        My Skill
      </h3>
      <div className="mt-5 flex w-[400px] rounded border border-black bg-secondary p-5 md:w-[500px] lg:w-[800px]">
        <ul className=" grid  w-full grid-cols-2 place-content-between place-items-center gap-5 md:grid-cols-3 lg:grid-cols-5">
          <li className="m-2 h-16 w-16">
            <img src={html} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={css} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={js} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={tailwind} alt="html" />
          </li>
          <li className="m-2 h-16 w-16">
            <img src={react} alt="html" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SkillPage;
