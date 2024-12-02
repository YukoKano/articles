import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useState, createContext } from "react";
import { css } from "@emotion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

type ThemeMode = "light" | "dark";
export const ThemeContext = createContext<ThemeMode>("light");

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<ThemeMode>("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    console.log(mode); // これでコンソール出力されます
  };

  const themeStyles = css`
    background-color: ${mode === "dark" ? "#2e2e2e" : "#fdfdfd"};
    color: ${mode === "dark" ? "#fdfdfd" : "#2e2e2e"};
    transition: background-color 0.5s, color 0.5s;
    min-height: 100vh;
  `;

  return (
    <ThemeContext.Provider value={mode}>
      <div css={themeStyles}>
        <Header />
        <button onClick={toggleMode}>モード切り替え</button>
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
