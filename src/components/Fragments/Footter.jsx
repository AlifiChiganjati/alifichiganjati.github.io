const Footer = () => {
  return (
    <footer className=" text-lg text-center md:text-xl my-4">
      <span className="font-bold">
        &copy;
        {new Date().getFullYear()}{" "}
      </span>
      Alifi Chiganjati
    </footer>
  );
};

export default Footer;
