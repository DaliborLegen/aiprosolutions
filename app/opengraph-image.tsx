import { ImageResponse } from "next/og";

export const alt = "AI PRO Solutions — Studio za AI, razvoj in avtomatizacijo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(weight: number, italic = false) {
  const family = "Fraunces";
  const url = `https://fonts.googleapis.com/css2?family=${family}:ital,opsz,wght@${italic ? 1 : 0},9..144,${weight}&display=swap`;
  const css = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Font ${family} ${weight} not found`);
  const fontData = await (await fetch(match[1])).arrayBuffer();
  return fontData;
}

export default async function Image() {
  const [fraunces400, fraunces500Italic] = await Promise.all([
    loadFont(400, false),
    loadFont(500, true),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 72px",
          background: "#F1ECE0",
          color: "#1A1814",
          fontFamily: "Fraunces, Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top masthead */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
            borderBottom: "1px solid rgba(26, 24, 20, 0.2)",
            fontSize: 14,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#87806E",
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>AI · PRO Studio</div>
          <div style={{ display: "flex" }}>Volume 01 · 2026</div>
          <div style={{ display: "flex" }}>№ 001</div>
        </div>

        {/* Main editorial block */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 40,
            paddingBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 152,
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              display: "flex",
              flexDirection: "column",
              fontWeight: 400,
            }}
          >
            <span style={{ display: "flex" }}>Tehnologija</span>
            <span style={{ display: "flex" }}>
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  color: "#A23E1F",
                  marginRight: 24,
                }}
              >
                brez
              </span>
              <span style={{ display: "flex" }}>šuma.</span>
            </span>
          </div>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 24,
            borderTop: "1px solid #1A1814",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              maxWidth: 540,
            }}
          >
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#87806E",
                fontFamily: "monospace",
                display: "flex",
              }}
            >
              — Studio za AI, razvoj in avtomatizacijo
            </div>
            <div
              style={{
                fontSize: 22,
                lineHeight: 1.4,
                color: "#4A4538",
                display: "flex",
              }}
            >
              AI agenti · Chatboti · Web razvoj · Avtomatizacija
            </div>
          </div>
          <div
            style={{
              fontSize: 28,
              fontStyle: "italic",
              color: "#1A1814",
              display: "flex",
            }}
          >
            aiprosolutions.si
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces400, style: "normal", weight: 400 },
        { name: "Fraunces", data: fraunces500Italic, style: "italic", weight: 500 },
      ],
    }
  );
}
