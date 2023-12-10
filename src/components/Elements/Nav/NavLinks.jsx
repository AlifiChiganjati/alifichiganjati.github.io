import { Link } from "react-scroll";

const NavLinks = ({ to, children, variant = "after:bg-secondary" }) => {
  return (
    <li>
      <Link
        activeClass={`relative text-text-primary ease-in-out duration-500 after:absolute after:-bottom-2 ${variant} after:left-0 after:w-full after:h-1 after:content-['']  after:rounded-xl`}
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="navLink  mx-4 cursor-pointer text-light text-lg md:text-xl lg:text-2xl font-semibold"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLinks;
