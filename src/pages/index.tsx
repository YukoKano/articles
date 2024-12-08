import { css } from "@emotion/react";
import Image from "next/image";

const wrap = css`
  // height: 1000vh;
`;

const content = css`
  padding: 5%;
`;

const contentImage = css`
  max-width: 100%;
  height: auto;
`;

const innerWrap1 = css`
  padding: 160px 40px;
  height: 100vh;
  background-image: url("/image1.jpg");
  background-size: cover;
  background-position: center;
`;

const innerText = css`
  position: sticky;
  top: 200px;
  color: white;
  font-size: 2rem;
`;

const innerWrap2 = css`
  padding: 160px 40px;
  height: 100vh;
  background-image: url("/image2.jpg");
  background-size: cover;
  background-position: center;
`;

const innerWrap3 = css`
  padding: 160px 40px;
  height: 100vh;
  border-radius: 40px;
  background-image: url("/image3.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  top: -40px;
`;

const innerWrap4 = css`
  padding: 160px 40px;
  min-height: 100vh;
  background-color: white;
  position: relative;
  display: flex;
`;

const headingText = css`
  padding: 40px;
`;

const value = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const tatenaga = css`
  width: 40%;
  height: 60vh;
  position: sticky;
  top: 200px;
  right: 16px;
  border-radius: 20px;
  background-image: url("/bottle.jpg");
  background-size: cover;
  background-position: center;
`;

const title = css`
  font-size: 24px;
`;

const contentWrap = css`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 16px;
  gap: 16px;
`;

const sampleText = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: 0.5;
`;

export default function Home() {
  return (
    <div css={wrap}>
      <div css={content}>
        <h2 css={title}>title</h2>
        <div css={contentWrap}>
          <p>text</p>
          <p>long text</p>
          <Image
            src="/image1.jpg"
            width="600"
            height="400"
            alt=""
            loading="lazy"
            css={contentImage}
          />
        </div>
      </div>
      <div css={innerWrap1}>
        <div css={innerText}>
          <p>text</p>
          <p style={{ marginTop: "24px" }}>text</p>
          <p>text</p>
        </div>
      </div>
      <div css={innerWrap2}>
        v2
        <div css={innerText}>
          <p>text</p>
          <p style={{ marginTop: "24px" }}>text</p>
          <p>text</p>
        </div>
      </div>
      <div css={innerWrap3}>
        v3
        <div css={innerText}>
          <p>text</p>
          <p style={{ marginTop: "24px" }}>text</p>
          <p>text</p>
        </div>
      </div>
      <h2 css={headingText}>heading2</h2>
      <div css={innerWrap4}>
        <div
          style={{
            width: "50%",
            padding: "160px 40px",
          }}
        >
          <div css={sampleText}>
            <p>
              あああああああああああああああああああああああああああああああああああ
              あああああああ あああああああ
            </p>
            <p style={{ marginTop: "24px" }}>
              あああああああああああああああああああああ
            </p>
            <p>
              あああああああああああああああああああああああああああああああああああ
              あああああああ
            </p>
          </div>
          <div css={sampleText}>
            <p>いいいいいいいいいいいいいいいいいいいいいいいい</p>
            <p style={{ marginTop: "24px" }}>
              あいいいいいいいいいいいいいいいい
            </p>
            <p>
              いいいいいいいいいいいいいいいいいいいいいいいいいいいいいいいい
              いいいい いいいい
            </p>
          </div>
          <div css={sampleText}>
            <p>うううううううううううううううううううううううう</p>
            <p style={{ marginTop: "24px" }}>うううう</p>
            <p>うううううううううううううううううううううううう</p>
          </div>
          <div css={sampleText}>
            <p>
              あああああああああああああああああああああああああああああああああああ
              あああああああ あああああああ
            </p>
            <p style={{ marginTop: "24px" }}>
              あああああああああああああああああああああ
            </p>
            <p>
              あああああああああああああああああああああああああああああああああああ
              あああああああ
            </p>
          </div>
        </div>
        <div css={tatenaga} />
      </div>
    </div>
  );
}
