const NavOverlay = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-black/60 fixed lg:hidden w-full h-screen z-10 top-0 left-0"
    />
  );
};

export default NavOverlay;
