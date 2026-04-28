import { ImageResponse } from "next/og";

export const alt = "Jeffrey Alteza — Backend Engineer & AI Automation Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0a0a0c",
          backgroundImage:
            "radial-gradient(ellipse at 50% -10%, rgba(168,85,247,0.25), transparent 55%), radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "auto, 28px 28px",
          color: "#ededf0",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        {/* top row: logo mark + brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 32,
              height: 32,
              background: "#a855f7",
              borderRadius: 8,
              boxShadow: "0 0 24px rgba(168,85,247,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 16,
                height: 16,
                background: "#0a0a0c",
                borderRadius: 4,
              }}
            />
          </div>
          <div style={{ fontSize: 22, fontWeight: 500, color: "#ededf0" }}>
            jeffrey.alteza
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              color: "#c084fc",
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: 28, height: 2, background: "#a855f7" }} />
            Backend · AI Automation
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span style={{ color: "#ededf0" }}>Backend engineering for the&nbsp;</span>
            <span
              style={{
                backgroundImage: "linear-gradient(135deg, #c084fc, #a855f7)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              AI-native era.
            </span>
          </div>
        </div>

        {/* bottom meta */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 20,
            color: "#9294a0",
            borderTop: "1px solid #1d1d22",
            paddingTop: 32,
          }}
        >
          <div>Jeffrey Alteza</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>Laravel</span>
            <span>·</span>
            <span>n8n</span>
            <span>·</span>
            <span>Anthropic</span>
            <span>·</span>
            <span>Claude Code</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
