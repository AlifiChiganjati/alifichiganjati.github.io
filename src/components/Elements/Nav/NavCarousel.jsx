import NavLinks from "./NavLinks";

const NavCarousel = ({
  className = "hidden lg:flex justify-center items-center ",
  variant,
}) => {
  return (
    <ul className={className}>
      <NavLinks to="hero" variant={variant}>
        Home
      </NavLinks>
      <NavLinks to="skill" variant={variant}>
        Skill
      </NavLinks>
      <NavLinks to="project" variant={variant}>
        Project
      </NavLinks>
      <NavLinks to="contact" variant={variant}>
        Contact
      </NavLinks>
    </ul>
  );
};

export default NavCarousel;
