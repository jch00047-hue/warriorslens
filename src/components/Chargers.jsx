import React from "react";
import { CHARGERS } from "../data/mock";

const Chargers = () => {
  return (
    <section
      id="chargers"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 16px",
        background: "#0a0a0a",
        color: "#e9e3d6",
        borderTop: "1px solid #262017"
      }}
    >
      <p style={{ color: "#c9a961", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Chargers Test Section
      </p>

      <h2 style={{ fontSize: "40px", margin: "12px 0 8px" }}>
        {CHARGERS.title}
      </h2>

      <p style={{ color: "#b7b0a1", marginBottom: "24px" }}>
        {CHARGERS.subtitle}
      </p>

      <img
        src={CHARGERS.hero}
        alt="Chargers hero"
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "block",
          border: "1px solid #262017",
          marginBottom: "24px"
        }}
      />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
        {CHARGERS.images.slice(0, 6).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Chargers frame ${i + 1}`}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              border: "1px solid #262017"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Chargers;