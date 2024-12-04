import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useState, createContext } from "react";
import { css } from "@emotion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type ThemeMode = "light" | "dark";
type ThemeContextType = { mode: ThemeMode; toggleMode: () => void };
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const themeStyles = css`
    background-color: ${mode === "dark" ? "#2e2e2e" : "#fdfdfd"};
    color: ${mode === "dark" ? "#fdfdfd" : "#2e2e2e"};
    min-height: 100vh;
    line-height: 1.6;
  `;

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div css={themeStyles}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
