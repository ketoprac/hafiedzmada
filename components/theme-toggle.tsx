import { useState, useRef, useEffect } from "react";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const themes = [
    { name: "light", icon: <SunIcon className="w-4 h-4" /> },
    { name: "dark", icon: <MoonIcon className="w-4 h-4" /> },
    { name: "system", icon: <DesktopIcon className="w-4 h-4" /> },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent rendering with undefined theme
  if (!mounted) {
    return <div className="w-9 h-9" />; // Placeholder with same dimensions
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all duration-200"
        aria-label="Toggle theme menu"
      >
        {theme === "light" && <SunIcon className="w-5 h-5" />}
        {theme === "dark" && <MoonIcon className="w-5 h-5" />}
        {theme === "system" && <DesktopIcon className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-36 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-top-5">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => {
                setTheme(t.name);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm capitalize
               ${
                 theme === t.name
                   ? "text-green-500 dark:text-green-400"
                   : "text-gray-600 dark:text-gray-300"
               }
             `}
            >
              {t.icon}
              {t.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
