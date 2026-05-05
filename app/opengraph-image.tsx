import { ImageResponse } from "next/og";

export const alt = "AI PRO SOLUTIONS — AI, razvoj in avtomatizacija";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#06080f",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(59,130,246,0.25), transparent 55%), radial-gradient(circle at 10% 90%, rgba(6,182,212,0.18), transparent 50%)",
          fontFamily: "sans-serif",
          color: "#f1f5f9",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            position: "relative",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#06b6d4",
              boxShadow: "0 0 24px #06b6d4",
            }}
          />
          <div
            style={{
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 4,
              color: "#06b6d4",
              textTransform: "uppercase",
            }}
          >
            AI PRO SOLUTIONS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 32,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ color: "#f1f5f9" }}>Optimizirajte poslovanje</span>
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #2563eb, #06b6d4)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              z umetno inteligenco
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: 32,
            }}
          >
            <div style={{ fontSize: 28, color: "#8b95a8", display: "flex" }}>
              AI agenti · Chatboti · Avtomatizacija · Razvoj
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: "#06b6d4",
                display: "flex",
              }}
            >
              aiprosolutions.si
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
