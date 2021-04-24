import React from "react";
import useDarkMode from "../../hook/useDarkMode";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";

export default function ThemeSwitcher() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <span className="ml-3 " onClick={() => setTheme(colorTheme)}>
      {colorTheme === "light" ? (
        <SunIcon className="w-5 h-5 text-broom-500 " />
      ) : (
        <MoonIcon className="w-5 h-5 text-paleSky-700" />
      )}
    </span>
  );
}
