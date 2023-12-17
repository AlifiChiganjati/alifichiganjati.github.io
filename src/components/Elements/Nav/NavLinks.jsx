import { Link } from "react-scroll";

const NavLinks = ({
  to,
  children,
  onClick,
  variant = "after:bg-secondary dark:after:bg-dark-text-primary",
}) => {
  return (
    <li className="my-2">
      <Link
        activeClass={`relative text-white  ease-in-out duration-1500 after:absolute after:-bottom-2 ${variant} after:left-0 after:w-full after:h-1 after:content-['']  after:rounded-xl dark:text-light`}
        to={to}
        spy={true}
        smooth={true}
        offset={-30}
        duration={3000}
        onClick={onClick}
        className="navLink  mx-6 cursor-pointer text-lg font-semibold text-text-primary dark:text-dark-text-primary md:text-xl lg:text-2xl"
      >
        {children}
      </Link>
    </li>
  );
};

export default NavLinks;
