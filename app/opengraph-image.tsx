import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at top, rgba(53,196,255,0.22), transparent 24%), linear-gradient(180deg, #06111f 0%, #081323 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              background:
                "linear-gradient(135deg, #1f5eff 0%, #35c4ff 48%, #4dd4a3 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            SA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 18, letterSpacing: 6, opacity: 0.7 }}>
              PREMIUM ADVISORY
            </span>
            <span style={{ fontSize: 38, fontWeight: 700 }}>Scale Alpha</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 68, lineHeight: 1.08, fontWeight: 700 }}>
            Smart Financial Planning for a Secure Future
          </div>
          <div style={{ fontSize: 28, lineHeight: 1.4, opacity: 0.82 }}>
            Premium fintech-style wealth advisory frontend built for trust,
            conversions, calculators, and consultations.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
