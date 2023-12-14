const ProjectPage = () => {
  return (
    <section
      id="project"
      className="flex w-full flex-col items-center justify-center bg-text-primary pt-10 dark:bg-dark-secondary"
    >
      <h3 className="text-shadow mt-5 text-2xl font-bold uppercase text-primary dark:text-light md:text-4xl lg:text-5xl">
        my project
      </h3>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
        <div className="flex h-auto w-[300px] flex-col items-center justify-center gap-5 border border-primary shadow">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="p-2 text-3xl dark:text-light">Title of Project</h4>
          <p className="p-2 text-justify dark:text-dark-text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
        <div className="flex h-auto w-[300px] flex-col items-center justify-center gap-5 border border-primary shadow">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="p-2 text-3xl dark:text-light">Title of Project</h4>
          <p className="p-2 text-justify dark:text-dark-text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
        <div className="flex h-auto w-[300px] flex-col items-center justify-center gap-5 border border-primary shadow">
          <div className="">
            <img src="https://placehold.co/300x300" alt="Image of project" />
          </div>
          <h4 className="p-2 text-3xl dark:text-light">Title of Project</h4>
          <p className="p-2 text-justify dark:text-dark-text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
            perferendis quis ad ut laudantium odio unde,
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
