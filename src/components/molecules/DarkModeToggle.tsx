import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sync = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    sync();
    window.addEventListener("theme-change", sync);
    return () => window.removeEventListener("theme-change", sync);
  }, []);

  const toggleTheme = () => {
    const newValue = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", newValue);
    localStorage.theme = newValue ? "dark" : "light";

    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-8 w-16 items-center rounded-full border border-(--border-darkmode) bg-(--bg-page) p-1 transition-colors duration-300"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
        <HiOutlineMoon className="text-lg text-blue-400" />
        <HiOutlineSun className="text-lg text-yellow-500" />
      </div>

      {/* KNOB */}
      <span
        className={`absolute top-1 h-6 w-6 rounded-full bg-gray-600 shadow-md transition-all duration-300 ${
          isDark ? "left-[calc(100%-1.75rem)]" : "left-1"
        }`}
      />
    </button>
  );
}
