const InputForm = ({
  dataAos,
  dataAosOffset,
  dataAosDuration,
  dataAosEasing,
  dataAosMirror,
  dataAosOnce,
  dataAosAnchorPlacement,
}) => {
  return (
    <div
      data-aos={dataAos}
      data-aos-offset={dataAosOffset}
      data-aos-duration={dataAosDuration}
      data-aos-easing={dataAosEasing}
      data-aos-mirror={dataAosMirror}
      data-aos-once={dataAosOnce}
      data-aos-anchor-placement={dataAosAnchorPlacement}
      className="w-full p-2 md:mr-2 md:w-1/2"
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-full lg:mx-auto lg:w-2/3">
          <label
            htmlFor="name"
            className="text-base font-bold capitalize text-primary dark:text-dark-light"
          >
            nama
          </label>
          <input
            id="name"
            type="text"
            placeholder="Joe Doe"
            className="text-dark w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="w-full lg:mx-auto lg:w-2/3">
          <label
            htmlFor="email"
            className="text-base font-bold capitalize text-primary dark:text-dark-light"
          >
            email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email"
            className="text-dark w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="w-full lg:mx-auto lg:w-2/3">
          <label
            htmlFor="pesan"
            className="text-base font-bold capitalize text-primary dark:text-dark-light"
          >
            Pesan
          </label>
          <textarea
            name="pesan"
            id="pesan"
            cols="30"
            rows="10"
            placeholder="Input Your Message Here..."
            className="text-dark w-full rounded-md bg-slate-200 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          ></textarea>
        </div>
        <div className="flex w-full items-center justify-center px-4 md:w-3/4">
          <button className="w-full rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow transition duration-500 hover:opacity-80 hover:shadow-lg dark:bg-dark-primary">
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
