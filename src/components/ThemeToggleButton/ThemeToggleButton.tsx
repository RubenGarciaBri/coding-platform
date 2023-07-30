import * as React from "react";

import { useTheme } from "next-themes";

// For testing purposes only, remove before merging
const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="absolute z-50 p-4 bg-gray-200 rounded-full shadow bottom-5 right-5 text-gray-1200"
      onClick={() => {
        if (theme === "dark") setTheme("light");
        if (theme === "light") setTheme("dark");
      }}
    >
      Toggle Theme
    </button>
  );
};

export default ThemeToggleButton;
