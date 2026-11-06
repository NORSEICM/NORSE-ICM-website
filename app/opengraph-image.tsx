import { ImageResponse } from "next/og";

export const alt = "NORSE‑ICM Project – Paris Brain Institute";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function eegPath() {
  const W = 1200;
  const pts: string[] = [];
  for (let x = 0; x <= W; x += 3) {
    const t = (2 * Math.PI * x) / W;
    let y = 5 * Math.sin(40 * t) + 3 * Math.sin(17 * t + 1.3) + 2 * Math.sin(7 * t + 0.4);
    if (x > 650 && x < 950) {
      const env = Math.sin((Math.PI * (x - 650)) / 300);
      const phase = ((x - 650) % 36) / 36;
      const spike = phase < 0.12 ? -Math.sin((Math.PI * phase) / 0.12) * 40 : 0;
      const wave = phase >= 0.12 ? Math.sin((Math.PI * (phase - 0.12)) / 0.88) * 16 : 0;
      y += env * (spike + wave);
    }
    pts.push(`${x},${(60 + y).toFixed(1)}`);
  }
  return `M${pts.join(" L")}`;
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f1e33",
          color: "white",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#94a3b8" }}>
          Paris Brain Institute – Pitié‑Salpêtrière Hospital
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24 }}>NORSE‑ICM Project</div>
        <div style={{ fontSize: 34, color: "#cbd5e1", marginTop: 24, maxWidth: 900, lineHeight: 1.4 }}>
          Research on New Onset Refractory Status Epilepticus and FIRES
        </div>
        <svg width="1200" height="120" viewBox="0 0 1200 120" style={{ position: "absolute", left: 0, bottom: 40, opacity: 0.35 }}>
          <path d={eegPath()} fill="none" stroke="#cbd5e1" strokeWidth="2" />
        </svg>
      </div>
    ),
    { ...size }
  );
}