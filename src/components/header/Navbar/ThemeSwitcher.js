import React from "react";
import useDarkMode from "../../../hook/useDarkMode";
import { HiMoon, HiSun } from "react-icons/hi";

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <span className="ml-3 cursor-pointer " onClick={() => setTheme(colorTheme)}>
      {colorTheme === "light" ? (
        <HiSun className="w-5 h-5 text-broom-500 " />
      ) : (
        <HiMoon className="w-5 h-5 text-biscay-400" />
      )}
    </span>
  );
}
