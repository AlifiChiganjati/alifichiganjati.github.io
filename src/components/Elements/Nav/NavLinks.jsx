const NavLinks = ({ href, children }) => {
  return (
    <li>
      <a
        href={href}
        className="px-4 cursor-pointer text-lg md:text-xl lg:text-2xl font-semibold"
      >
        {children}
      </a>
    </li>
  );
};

export default NavLinks;
