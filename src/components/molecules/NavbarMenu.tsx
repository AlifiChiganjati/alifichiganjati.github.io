import { useEffect, useState } from "react";
import NavLink from "../atoms/NavLink";

const NavbarMenu = () => {
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const isActive = (href: string) => href === pathname;

  const menus = [
    // { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
  ];
  return (
    <ul className="z-50 mt-4 flex flex-col items-start justify-center gap-4 space-y-4 lg:flex-row">
      {menus.map((menu) => (
        <NavLink
          key={menu.href}
          href={menu.href}
          classLink={`${isActive(menu.href) ? "text-(--accent)" : ""} capitalize font-semibold`}
        >
          {menu.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavbarMenu;
