const Footer = () => {
  return (
    <footer className=" my-4 text-center text-lg dark:text-dark-text-primary md:text-xl">
      <span className="font-bold dark:text-dark-light">
        &copy;
        {new Date().getFullYear()}{" "}
      </span>
      Alifi Chiganjati
    </footer>
  );
};

export default Footer;
