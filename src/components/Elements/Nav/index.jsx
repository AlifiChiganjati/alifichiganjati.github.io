import NavCarousel from "./NavCarousel";
import NavMobile from "./NavMobile";

const Nav = ({ onClick }) => {
  return (
    <nav className="flex justify-between items-center ">
      <NavCarousel />
      <NavMobile onClick={onClick} />
    </nav>
  );
};

export default Nav;
