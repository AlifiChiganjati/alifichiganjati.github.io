import { useState } from "react";
import Nav from "../Elements/Nav";
import NavOverlay from "../Elements/Nav/NavOverlay";
import SideNav from "../Elements/Nav/SideNav";
import { MdOutlineClose } from "react-icons/md";
import NavCarousel from "../Elements/Nav/NavCarousel";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <header className="p-4 fixed w-full flex justify-between items-center bg-primary">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase italic">
        Alifi Chiganjati
      </h1>
      <Nav onClick={() => setSideNav(!sideNav)} />
      {sideNav ? <NavOverlay onClick={() => setSideNav(!sideNav)} /> : ""}
      <SideNav
        className={
          sideNav
            ? "fixed lg:hidden top-0 right-0 w-full h-screen sm:w-[300px] bg-secondary z-10 duration-500"
            : "fixed lg:hidden top-0 right-[-100%] w-full h-screen sm:w-[300px] bg-secondary z-10 duration-500"
        }
      >
        <MdOutlineClose
          size={30}
          onClick={() => setSideNav(!sideNav)}
          className="cursor-pointer absolute top-4 right-4"
        />
        <h1 className="p-4 text-xl sm:hidden font-bold uppercase italic">
          Alifi Chiganjati
        </h1>
        <NavCarousel className="flex flex-col px-2 py-4 gap-2 text-xl sm:text-2xl" />
      </SideNav>
    </header>
  );
};

export default Navbar;
