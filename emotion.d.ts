// emotion.d.ts
import "@emotion/react";

declare module "react" {
  interface Attributes {
    css?: import("@emotion/react").SerializedStyles;
  }
}
