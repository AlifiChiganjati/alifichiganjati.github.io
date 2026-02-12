import { useState } from "react";
import type { ReactElement } from "react";

interface MobileMenuProps {
  children: ReactElement;
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg sticky top-0 left-0 z-50 w-full bg-white lg:hidden">
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/">
            <h1 className="text-lg font-semibold">Alifi Chiganjati</h1>
          </a>

          <button onClick={() => setOpen(!open)} className="text-3xl">
            {children}
          </button>
        </div>

        {open && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg">
            <ul className="container mx-auto space-y-4 p-4">
              <li>
                <a href="/" className="block">
                  Home
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
