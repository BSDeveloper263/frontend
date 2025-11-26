import React from "react";

export default function HtmlResponsivePage() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{
        background: "#04AA6D",
        color: "white",
        padding: "16px 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        fontSize: "22px",
        fontWeight: "600"
      }}>
        HTML Responsive Web Design Tutorial
      </header>

      <div style={{ display: "flex", padding: "20px", gap: "20px", flexWrap: "wrap" }}>
        {/* Sidebar */}
        <nav style={{
          flex: "0 0 220px",
          background: "#fff",
          borderRadius: "8px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          height: "fit-content"
        }}>
          <h3 style={{ marginBottom: "12px", color: "#04AA6D" }}>Topics</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "8px" }}><a href="#what" style={{ textDecoration: "none", color: "#333" }}>What is Responsive</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#viewport" style={{ textDecoration: "none", color: "#333" }}>Viewport Meta Tag</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#images" style={{ textDecoration: "none", color: "#333" }}>Responsive Images</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#textsize" style={{ textDecoration: "none", color: "#333" }}>Responsive Text Size</a></li>
            <li style={{ marginBottom: "8px" }}><a href="#media" style={{ textDecoration: "none", color: "#333" }}>Media Queries</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <main style={{
          flex: "1 1 0",
          background: "#fff",
          borderRadius: "8px",
          padding: "24px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)"
        }}>
          {/* Section: What is Responsive */}
          <section id="what" style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#333" }}>What is Responsive Web Design?</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Responsive Web Design ensures that web pages look good on all devices, adapting to different screen sizes automatically.
            </p>
          </section>

          {/* Section: Viewport */}
          <section id="viewport" style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#333" }}>Viewport Meta Tag</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Use the viewport meta tag to control the page's dimensions and scaling on different devices:
            </p>
            <pre style={{ background: "#f0f0f0", padding: "12px", borderRadius: "6px", overflowX: "auto" }}>
{`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            </pre>
          </section>

          {/* Section: Responsive Images */}
          <section id="images" style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#333" }}>Responsive Images</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Images should adapt to container width:
            </p>
            <pre style={{ background: "#f0f0f0", padding: "12px", borderRadius: "6px", overflowX: "auto" }}>
{`img {
  max-width: 100%;
  height: auto;
}`}
            </pre>
          </section>

          {/* Section: Responsive Text */}
          <section id="textsize" style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#333" }}>Responsive Text Size</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Use viewport-based units like <code>vw</code> to make text size adjust automatically:
            </p>
            <pre style={{ background: "#f0f0f0", padding: "12px", borderRadius: "6px", overflowX: "auto" }}>
{`<h1 style="font-size:10vw">This text scales with viewport width</h1>`}
            </pre>
          </section>

          {/* Section: Media Queries */}
          <section id="media" style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#333" }}>Media Queries</h2>
            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Apply different CSS rules based on device width:
            </p>
            <pre style={{ background: "#f0f0f0", padding: "12px", borderRadius: "6px", overflowX: "auto" }}>
{`@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}`}
            </pre>
          </section>

          {/* Full Example */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ color: "#333" }}>Full Responsive Example</h2>
            <pre style={{ background: "#f0f0f0", padding: "12px", borderRadius: "6px", overflowX: "auto" }}>
{`<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: Arial; padding: 20px; }
    .container { display: flex; gap: 10px; }
    .box { flex: 1; padding: 10px; background: lightblue; margin-bottom: 10px; }
    img { max-width: 100%; height: auto; }
    @media (max-width: 600px) {
      .container { flex-direction: column; }
    }
  </style>
</head>
<body>
  <h1>Responsive Page</h1>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>`}
            </pre>
          </section>
        </main>
      </div>
    </div>
  );
}
