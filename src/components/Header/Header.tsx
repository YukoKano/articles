import { ThemeContext } from "@/pages/_app";
import { css } from "@emotion/react";
import Image from "next/image";
import { useContext } from "react";

// CSSカスタムプロパティで管理した方が記述増えるの避けられるかなぁ
const header = (mode: "light" | "dark") => css`
  display: flex;
  padding: 16px 32px;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
  background-color: ${mode === "dark" ? "#5e5e5e" : "#fdfdfd"};
  border-bottom: 1px solid ${mode === "dark" ? "#fdfdfd" : "#5e5e5e"};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const modeBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const button = (mode: "light" | "dark") => css`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  border: 1px solid ${mode === "dark" ? "#fdfdfd" : "#5e5e5e"};
  border-radius: 50%;
  background-color: ${mode === "dark" ? "#5e5e5e" : "#fdfdfd"};
`;

const text = css`
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
`;

const modeTitle = css`
  font-weight: bold;
`;

export const Header = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { mode, toggleMode } = themeContext;

  return (
    <header css={header(mode)}>
      <h1>header</h1>
      <div css={modeBox}>
        <button css={button(mode)} onClick={toggleMode}>
          {mode === "dark" ? (
            <Image src="/icon_dark.svg" width="24" height="24" alt="" />
          ) : (
            <Image src="/icon_light.svg" width="24" height="24" alt="" />
          )}
        </button>
        <p css={text}>
          <span css={modeTitle}>ダークモード</span>
          <br />
          {mode === "dark" ? "オン" : "オフ"}
        </p>
      </div>
    </header>
  );
};
