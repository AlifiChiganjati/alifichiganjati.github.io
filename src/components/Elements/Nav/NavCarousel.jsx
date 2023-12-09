import NavLinks from "./NavLinks";

const NavCarousel = ({
  className = "hidden lg:flex justify-center items-center ",
}) => {
  return (
    <ul className={className}>
      <NavLinks to="hero">Home</NavLinks>
      <NavLinks to="skill">Skill</NavLinks>
      <NavLinks to="project">Project</NavLinks>
      <NavLinks to="contact">Contact</NavLinks>
    </ul>
  );
};

export default NavCarousel;
