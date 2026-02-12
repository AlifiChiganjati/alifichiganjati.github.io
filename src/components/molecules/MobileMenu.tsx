import { useState } from "react";
import type { ReactElement } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { IoMdClose } from "react-icons/io";

interface MobileMenuProps {
  children: ReactElement;
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 left-0 z-50 w-full lg:hidden">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/">
            <h1 className="text-lg font-semibold">Alifi Chiganjati</h1>
          </a>
          <div className="flex items-center gap-2">
            <DarkModeToggle />
            <button onClick={() => setOpen(!open)} className="text-3xl">
              {children}
            </button>
          </div>
        </div>

        {open && (
          <div className="absolute top-0 left-0 z-50 w-full bg-(--bg-surface) shadow-lg">
            <div className="container mx-auto p-4">
              <div className="flex items-center justify-between">
                <a href="/">
                  <h1 className="text-(--text-pr text-lg font-semibold">
                    Alifi Chiganjati
                  </h1>
                </a>
                <button onClick={() => setOpen(!open)} className="text-3xl">
                  <IoMdClose className="h-6 w-6" />
                </button>
              </div>

              <ul className="mt-4 space-y-4">
                <li>
                  <a href="/" className="flex font-semibold">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-10 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
