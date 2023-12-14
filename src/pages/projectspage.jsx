const ProjectPage = () => {
  return (
    <section
      id="project"
      className="flex flex-col justify-center items-center pt-10 bg-text-primary w-full"
    >
      <h3 className="text-2xl md:text-4xl mt-5 lg:text-5xl text-primary uppercase text-shadow font-bold">
        my project
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
        <div className="w-[300px] h-auto shadow flex flex-col justify-center items-center gap-5 border border-primary">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="text-3xl p-2">Title of Project</h4>
          <p className="p-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
        <div className="w-[300px] h-auto shadow flex flex-col justify-center items-center gap-5 border border-primary">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="text-3xl p-2">Title of Project</h4>
          <p className="p-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
        <div className="w-[300px] h-auto shadow flex flex-col justify-center items-center gap-5 border border-primary">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="text-3xl p-2">Title of Project</h4>
          <p className="p-2 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
