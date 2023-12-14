const Footer = () => {
  return (
    <footer className=" my-4 text-center text-lg md:text-xl">
      <span className="font-bold">
        &copy;
        {new Date().getFullYear()}{" "}
      </span>
      Alifi Chiganjati
    </footer>
  );
};

export default Footer;
