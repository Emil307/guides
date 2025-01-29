import React, { useState } from "react";
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "shared/config";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
