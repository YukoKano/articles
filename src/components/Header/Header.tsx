import { ThemeContext } from "@/pages/_app";
import { css } from "@emotion/react";
import { useContext } from "react";

// CSSカスタムプロパティで管理した方が記述増えるの避けられるかなぁ
const header = (mode: "light" | "dark") => css`
  display: flex;
  padding: 16px 32px;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${mode === "dark" ? "#5e5e5e" : "#fdfdfd"};
`;

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { mode, toggleMode } = themeContext;
  return (
    <header css={header(mode)}>
      <h1>header</h1>
      <button onClick={toggleMode}>モード切り替え</button>
    </header>
  );
};
