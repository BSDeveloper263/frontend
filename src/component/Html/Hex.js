import React, { useState, useEffect } from "react";

/**
 * HtmlHexColor.jsx
 * W3Schools-style single-page HEX color tutorial (React)
 *
 * Usage: import and render <HtmlHexColor /> in your app.
 */

export default function HtmlHexColor() {
  // default hex
  const [hex, setHex] = useState("#ff0000");
  const [input, setInput] = useState("#ff0000");
  const [error, setError] = useState("");
  const [alpha, setAlpha] = useState(100); // 0-100 for RGBA preview
  const [copied, setCopied] = useState(false);

  // Parse hex (accepts #rgb, #rrggbb or without #)
  function normalizeHex(h) {
    if (!h) return null;
    let s = h.trim().replace(/^#/, "");
    if (/^[0-9a-f]{3}$/i.test(s)) {
      // expand short form to 6 chars
      s = s.split("").map((c) => c + c).join("");
    }
    if (/^[0-9a-f]{6}$/i.test(s)) return `#${s.toLowerCase()}`;
    return null;
  }

  function hexToRgb(hexStr) {
    const n = normalizeHex(hexStr);
    if (!n) return null;
    const r = parseInt(n.slice(1, 3), 16);
    const g = parseInt(n.slice(3, 5), 16);
    const b = parseInt(n.slice(5, 7), 16);
    return { r, g, b };
  }

  function rgbToHex(r, g, b) {
    const toHex = (c) => {
      const h = c.toString(16);
      return h.length === 1 ? "0" + h : h;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
  }

  // Validate input whenever it changes
  useEffect(() => {
    const n = normalizeHex(input);
    if (n) {
      setError("");
      setHex(n);
    } else {
      setError("Invalid HEX. Use #RRGGBB or #RGB (e.g. #ff0000 or #f00).");
    }
  }, [input]);

  // computed values
  const rgb = hexToRgb(hex) || { r: 255, g: 0, b: 0 };
  const rgbaStr = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${(alpha / 100).toFixed(2)})`;
  const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  // contrast color for text on preview
  function contrastColor(r, g, b) {
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return lum > 0.6 ? "#111" : "#fff";
  }

  // copy CSS lines
  async function copyToClipboard() {
    const text = `background-color: ${hex};\n/* rgba example */\nbackground-color: ${rgbaStr};`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  function reset() {
    setInput("#ff0000");
    setAlpha(100);
    setCopied(false);
  }

  // preset swatches
  const presets = [
    "#ff0000", // red
    "#00ff00", // lime
    "#0000ff", // blue
    "#ffff00", // yellow
    "#ff00ff", // magenta
    "#00ffff", // cyan
    "#ffffff", // white
    "#000000", // black
    "#f39c12", // orange
    "#27ae60", // green
    "#8e44ad", // purple
  ];

  return (
    <div style={styles.page}>
      {/* LEFT: Explanation */}
      <div style={styles.left}>
        <h1 style={styles.title}>🔷 HEX Colors — HTML (W3Schools style)</h1>
        <p style={styles.lead}>
          <strong>HEX</strong> colours are a common way to define colors in web
          design. A HEX color is written as <code style={styles.inline}>#RRGGBB</code> (or the short form <code style={styles.inline}>#RGB</code>).
        </p>

        <section style={styles.section}>
          <h3 style={styles.sub}>🔹 Syntax</h3>
          <pre style={styles.code}>
{`#RRGGBB where each pair (RR, GG, BB) is a hex value 00 - FF.`}
          </pre>
          <p style={styles.text}>
            Examples: <code style={styles.inline}>#ff0000</code> (red),{" "}
            <code style={styles.inline}>#00ff00</code> (green),{" "}
            <code style={styles.inline}>#0000ff</code> (blue).
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sub}>🔹 Short form</h3>
          <p style={styles.text}>
            Short form <code style={styles.inline}>#RGB</code> expands to{" "}
            <code style={styles.inline}>#RRGGBB</code>. Example:{" "}
            <code style={styles.inline}>#f00</code> → <code style={styles.inline}>#ff0000</code>.
          </p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sub}>🔹 HEX → RGB / RGBA</h3>
          <p style={styles.text}>
            You can convert HEX to RGB for other uses. RGBA adds alpha (opacity).
          </p>
          <pre style={styles.code}>
{`background-color: #ff0000;
background-color: rgba(255, 0, 0, 0.5); /* 50% transparent */`}
          </pre>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sub}>🔹 Try it — Live HEX Picker</h3>
          <p style={styles.text}>
            Type a HEX code or click any preset swatch. Input accepts <code>#RGB</code> and <code>#RRGGBB</code>.
          </p>

          <div style={{ marginTop: 10 }}>
            <label style={styles.label}>HEX Color</label>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 6 }}>
              <input
                aria-label="hex-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={styles.input}
                placeholder="#ff0000"
              />
              <button onClick={() => { const n = normalizeHex(input); if (n) setInput(n); }} style={styles.smallBtn}>
                Normalize
              </button>
              <button onClick={reset} style={styles.smallBtnAlt}>
                Reset
              </button>
            </div>
            {error && <div style={styles.err}>{error}</div>}

            <div style={{ marginTop: 12 }}>
              <label style={styles.label}>Alpha (for RGBA preview): {alpha}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={alpha}
                onChange={(e) => setAlpha(Number(e.target.value))}
                style={{ width: "100%", marginTop: 6 }}
              />
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setInput(p)}
                    style={{ ...styles.swatch, background: p }}
                    title={p}
                    aria-label={`preset-${p}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.sub}>🔹 Why HEX?</h3>
          <ul style={styles.ul}>
            <li>Compact and human-readable (common in CSS).</li>
            <li>Works with most design tools and color pickers.</li>
            <li>Can be converted to RGB/RGBA easily for advanced effects.</li>
          </ul>
        </section>
      </div>

      {/* RIGHT: Live Output */}
      <div style={styles.right}>
        <div style={styles.rightHeader}>
          <div>
            <h2 style={{ margin: 0, color: "#fff" }}>Live Output</h2>
            <div style={{ color: "rgba(255,255,255,0.85)", marginTop: 6, fontSize: 14 }}>
              Updates as you type or click a swatch
            </div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={copyToClipboard} style={styles.copyBtn}>
              {copied ? "Copied!" : "Copy CSS"}
            </button>
          </div>
        </div>

        <div style={styles.liveArea}>
          <div
            className="preview"
            style={{
              ...styles.preview,
              background: hex,
              color: contrastColor(rgb.r, rgb.g, rgb.b),
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            aria-live="polite"
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{hex}</div>
              <div style={{ marginTop: 6 }}>{rgbStr}</div>
            </div>
          </div>

          <div style={{ ...styles.previewSmall, background: rgbaStr, color: contrastColor(rgb.r, rgb.g, rgb.b) }}>
            <div>
              <div style={{ fontWeight: 700 }}>{rgbaStr}</div>
              <div style={{ marginTop: 4, fontSize: 13 }}>RGBA preview (alpha {alpha}%)</div>
            </div>
          </div>

          <div style={{ ...styles.previewSmall, background: `linear-gradient(90deg, ${hex}, #ffffff, #000000)` }}>
            <div style={{ color: "#fff", fontWeight: 600 }}>Gradient Example</div>
          </div>

          <div style={styles.codeRow}>
            <div style={styles.codeBox}>
              <div style={{ fontFamily: "monospace", fontSize: 14 }}>
                background-color: <strong>{hex}</strong>;
                <br />
                background-color: <strong>{rgbaStr}</strong>;
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={styles.infoPill}>RGB: {`${rgb.r}, ${rgb.g}, ${rgb.b}`}</div>
              <div style={styles.infoPill}>Hex (normalized): {hex}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------- Styles ----------------- */
const styles = {
  page: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    maxWidth: 1200,
    margin: "28px auto",
    padding: 18,
    fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
  },
  left: {
    background: "#fff",
    padding: 20,
    borderRadius: 10,
    boxShadow: "0 6px 18px rgba(30,30,30,0.06)",
    minHeight: 420,
  },
  right: {
    background: "#222",
    color: "#fff",
    padding: 20,
    borderRadius: 10,
    minHeight: 420,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  title: { color: "#0b7dda", margin: 0, fontSize: 26 },
  lead: { color: "#333", marginTop: 8 },
  section: { marginTop: 18 },
  sub: { color: "#0b7dda", margin: "6px 0" },
  code: {
    background: "#0e0e0e",
    color: "#f1f1f1",
    padding: 10,
    borderRadius: 8,
    fontFamily: "monospace",
    fontSize: 13,
  },
  text: { color: "#444", marginTop: 6 },
  label: { fontSize: 13, color: "#333", fontWeight: 600 },
  input: {
    padding: "10px 12px",
    borderRadius: 8,
    border: "1px solid #ddd",
    width: 200,
    fontFamily: "monospace",
    fontSize: 14,
  },
  smallBtn: {
    padding: "8px 10px",
    borderRadius: 8,
    border: "none",
    background: "#0b7dda",
    color: "#fff",
    cursor: "pointer",
  },
  smallBtnAlt: {
    padding: "8px 10px",
    borderRadius: 8,
    border: "1px solid #ddd",
    background: "#fff",
    color: "#333",
    cursor: "pointer",
  },
  err: { color: "#b00020", marginTop: 8, fontSize: 13 },
  swatch: {
    width: 36,
    height: 36,
    borderRadius: 6,
    border: "1px solid rgba(0,0,0,0.08)",
    cursor: "pointer",
  },
  rightHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 },
  copyBtn: {
    padding: "8px 12px",
    borderRadius: 8,
    border: "none",
    background: "#e67e22",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 600,
  },
  liveArea: { marginTop: 14, display: "flex", flexDirection: "column", gap: 12 },
  preview: {
    height: 170,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 160ms ease",
  },
  previewSmall: {
    height: 80,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    color: "#fff",
  },
  codeRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    flexWrap: "wrap",
  },
  codeBox: {
    background: "rgba(0,0,0,0.32)",
    padding: 12,
    borderRadius: 8,
    minWidth: 220,
    color: "#fff",
  },
  infoPill: {
    background: "rgba(255,255,255,0.06)",
    padding: "8px 10px",
    borderRadius: 8,
    color: "#fff",
    fontSize: 13,
  },
  ul: { marginTop: 8, color: "#444" },
};

/* Responsive fallback (stack columns on small screens) */
const mediaStyle = `
@media (max-width:880px){
  .html-hex-page {
    grid-template-columns: 1fr !important;
  }
}
`;

/* Note:
   If you want the responsive CSS rule to apply, you can add a className on the top-level container 
   and include the mediaStyle string in a global CSS file or a <style> tag in your index.html.
*/
