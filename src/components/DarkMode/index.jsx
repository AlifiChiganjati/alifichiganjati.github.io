import { useState } from "react";
import { useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    document.querySelector("html").classList.toggle("dark");
  };

  return (
    <div className="flex items-center pr-4">
      <div className="flex">
        <span className="mr-2 text-sm text-light">light</span>
        <input
          type="checkbox"
          onChange={handleToggle}
          className="hidden"
          id="dark-toggle"
        />
        <label htmlFor="dark-toggle">
          <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
            <div className="toggle-dot h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
          </div>
        </label>
        <span className="ml-2 text-sm text-light">dark</span>
      </div>
    </div>
  );
};

export default DarkMode;
