import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f5eedf",
        color: "#302d2a",
        padding: 70,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "20px solid #edb5be",
      }}
    >
      <div style={{ fontSize: 34, letterSpacing: 2 }}>
        PRADEEP TARAKAR / SOFTWARE ENGINEER
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          fontSize: 118,
          lineHeight: 0.95,
        }}
      >
        <span>A little of</span>
        <span>everything.</span>
      </div>
      <div style={{ fontSize: 36, color: "#b5453e" }}>
        Jack of many trades? Guilty.
      </div>
    </div>,
    size,
  );
}
