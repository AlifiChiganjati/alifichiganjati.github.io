import { Link } from "react-scroll";

const NavLinks = ({ to, children }) => {
  return (
    <li className="relative">
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className={`navLink  mx-4 cursor-pointer text-lg md:text-xl lg:text-2xl font-semibold`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLinks;
