import { useState } from "react";
import Nav from "../Elements/Nav";
import NavOverlay from "../Elements/Nav/NavOverlay";
import SideNav from "../Elements/Nav/SideNav";
import { MdOutlineClose } from "react-icons/md";
import NavCarousel from "../Elements/Nav/NavCarousel";

const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-primary p-4 dark:bg-dark-primary">
      <h1 className="text-shadow-sm text-xl font-bold uppercase italic text-text-primary dark:text-dark-light md:text-2xl lg:text-3xl">
        Alifi Chiganjati
      </h1>
      <Nav onClick={() => setSideNav(!sideNav)} />
      {sideNav ? <NavOverlay onClick={() => setSideNav(!sideNav)} /> : ""}
      <SideNav
        className={
          sideNav
            ? "fixed right-0 top-0 z-10 h-screen w-full bg-secondary duration-500 dark:bg-dark-secondary sm:w-[300px] lg:hidden"
            : "fixed right-[-100%] top-0 z-10 h-screen w-full bg-secondary duration-500 dark:bg-dark-secondary sm:w-[300px] lg:hidden"
        }
      >
        <MdOutlineClose
          size={30}
          onClick={() => setSideNav(!sideNav)}
          className="absolute right-4 top-4 cursor-pointer text-dark-primary dark:text-dark-light lg:text-dark-secondary"
        />
        <h1 className="text-shadow p-4 text-xl font-bold uppercase italic text-text-primary dark:text-dark-light sm:hidden">
          Alifi Chiganjati
        </h1>
        <NavCarousel
          onClick={() => setSideNav(!sideNav)}
          variant="after:bg-text-primary  text-dark-secondary"
          className="flex flex-col gap-2 px-2 py-4 text-xl sm:text-2xl"
        />
      </SideNav>
    </header>
  );
};

export default Navbar;
