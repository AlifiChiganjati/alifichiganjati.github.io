import NavLinks from "./NavLinks";

const NavCarousel = ({
  className = "hidden lg:flex justify-center items-center",
}) => {
  return (
    <ul className={className}>
      <NavLinks>Home</NavLinks>
      <NavLinks>Skill</NavLinks>
      <NavLinks>Project</NavLinks>
      <NavLinks>Contact</NavLinks>
    </ul>
  );
};

export default NavCarousel;
