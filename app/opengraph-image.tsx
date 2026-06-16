import { ImageResponse } from "next/og";

export const alt = "AI PRO Solutions — Studio za AI, razvoj in avtomatizacijo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Bare "Mozilla/5.0" makes Google Fonts serve TTF (Satori can't parse woff2).
async function loadFont(query: string) {
  const url = `https://fonts.googleapis.com/css2?${query}&display=swap`;
  const css = await (await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } })).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Font not found: ${query}`);
  return (await fetch(match[1])).arrayBuffer();
}

export default async function Image() {
  const [bricolage, mono, monoMedium] = await Promise.all([
    loadFont("family=Bricolage+Grotesque:opsz,wght@96,600"),
    loadFont("family=JetBrains+Mono:wght@400"),
    loadFont("family=JetBrains+Mono:wght@500"),
  ]);

  const void_ = "#08080A";
  const line = "rgba(244, 244, 245, 0.07)";
  const lineBright = "rgba(244, 244, 245, 0.18)";
  const text = "#F4F4F5";
  const text2 = "#B6B6BC";
  const text3 = "#76767E";
  const text4 = "#44444C";
  const accent = "#FFB627";
  const signal = "#19F587";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
          background: void_,
          color: text,
          fontFamily: "JetBrains Mono, monospace",
          position: "relative",
        }}
      >
        {/* grid backdrop */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />
        {/* amber glow */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: 280,
            width: 720,
            height: 480,
            background: "radial-gradient(circle, rgba(255,182,39,0.16), transparent 65%)",
          }}
        />

        {/* corner accents */}
        <div style={{ position: "absolute", top: 28, left: 28, width: 20, height: 20, borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }} />
        <div style={{ position: "absolute", bottom: 28, right: 28, width: 20, height: 20, borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }} />

        {/* top terminal bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 20,
            borderBottom: `1px solid ${line}`,
            fontSize: 16,
            letterSpacing: "0.06em",
            color: text3,
            position: "relative",
          }}
        >
          <div style={{ display: "flex" }}>
            <span style={{ color: accent, marginRight: 10 }}>&gt;</span>
            ./aiprosolutions --mode=studio
          </div>
          <div style={{ display: "flex" }}>[ 46.0569°N · 14.5058°E ]</div>
          <div style={{ display: "flex" }}>build_001</div>
        </div>

        {/* main block */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* status label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 16,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: accent,
              marginBottom: 28,
            }}
          >
            <span style={{ width: 9, height: 9, borderRadius: 9, background: signal, marginRight: 14, display: "flex" }} />
            now_accepting
          </div>

          {/* headline */}
          <div
            style={{
              fontFamily: "Bricolage Grotesque, sans-serif",
              fontSize: 144,
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              display: "flex",
              flexDirection: "column",
              color: text,
            }}
          >
            <span style={{ display: "flex" }}>Inteligenca,</span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span style={{ color: text3, marginRight: 28 }}>ki</span>
              <span style={{ color: accent, textShadow: "0 0 32px rgba(255,182,39,0.5)" }}>deluje</span>
              <span style={{ width: 24, height: 96, background: accent, marginLeft: 18, display: "flex" }} />
            </span>
          </div>
        </div>

        {/* footer strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 24,
            borderTop: `1px solid ${lineBright}`,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 14,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: text4,
                marginBottom: 8,
                display: "flex",
              }}
            >
              — Studio za AI, programsko opremo in avtomatizacijo
            </div>
            <div style={{ fontSize: 22, color: text2, display: "flex" }}>
              AI agenti · Chatboti · Web razvoj · Avtomatizacija
            </div>
          </div>
          <div style={{ fontSize: 28, color: accent, display: "flex" }}>aiprosolutions.si</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bricolage Grotesque", data: bricolage, style: "normal", weight: 600 },
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
        { name: "JetBrains Mono", data: monoMedium, style: "normal", weight: 500 },
      ],
    }
  );
}
