import DarkMode from "../DarkMode";
import NavCarousel from "./NavCarousel";
import NavMobile from "./NavMobile";

const Nav = ({ onClick }) => {
  return (
    <nav className="flex items-center justify-between ">
      <DarkMode />
      <NavCarousel />
      <NavMobile onClick={onClick} />
    </nav>
  );
};

export default Nav;
