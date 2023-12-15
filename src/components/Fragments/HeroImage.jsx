const HeroImage = ({
  src,
  dataAos,
  dataAosDuration,
  dataAosEasing,
  dataAosDelay,
}) => {
  return (
    <div
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-easing={dataAosEasing}
      data-aos-delay={dataAosDelay}
      className="flex h-full items-center justify-center md:w-1/2  lg:relative"
    >
      <div className="h-[400px] w-[300px] md:h-[500px] md:w-[400px] lg:absolute lg:bottom-0 lg:h-[633px] lg:w-[475px] 2xl:h-[733px] 2xl:w-[550px]">
        <img src={src} alt="Hero Image" className="h-full w-full bg-cover" />
      </div>
    </div>
  );
};

export default HeroImage;
