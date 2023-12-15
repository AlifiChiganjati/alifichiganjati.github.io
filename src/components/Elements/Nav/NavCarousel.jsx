import NavLinks from "./NavLinks";

const NavCarousel = ({
  className = "hidden lg:flex justify-center items-center ",
  onClick,
  variant,
}) => {
  return (
    <ul className={className}>
      <NavLinks onClick={onClick} to="hero" variant={variant}>
        Home
      </NavLinks>
      <NavLinks onClick={onClick} to="skill" variant={variant}>
        Skill
      </NavLinks>
      <NavLinks onClick={onClick} to="project" variant={variant}>
        Project
      </NavLinks>
      <NavLinks onClick={onClick} offset={10} to="contact" variant={variant}>
        Contact
      </NavLinks>
    </ul>
  );
};

export default NavCarousel;
