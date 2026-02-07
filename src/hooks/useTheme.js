import { useEffect, useState } from "react";

const THEME_KEY = "currentMode";

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "dark") return true;
  if (saved === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function useTheme() {
  const [darkTheme, setDarkTheme] = useState(getInitialTheme);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  useEffect(() => {
    document.body.classList.remove("dark-theme", "light-theme");

    const themeClass = darkTheme ? "dark-theme" : "light-theme";
    document.body.classList.add(themeClass);

    localStorage.setItem(THEME_KEY, darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return { darkTheme, toggleTheme };
}

export default useTheme;
