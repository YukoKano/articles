import { css } from "@emotion/react";

const header = css`
  background-color: white;
  padding: 16px;
`;

export const Header = () => {
  return (
    <header css={header}>
      <h1>header</h1>
    </header>
  );
};
