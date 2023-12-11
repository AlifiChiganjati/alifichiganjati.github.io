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
      className="flex justify-center md:w-1/2"
    >
      <div className="w-[300px] h-[400px]  md:w-[400px] md:h-[500px] ">
        <img src={src} alt="Hero Image" className="bg-cover w-full h-full" />
      </div>
    </div>
  );
};

export default HeroImage;
