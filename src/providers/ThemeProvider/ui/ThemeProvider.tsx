import { ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || Theme.LIGHT);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
