import React, { useState } from "react";

export default function HtmlLayoutElements() {
  const [code, setCode] = useState(`
<header style="background:lightgray;padding:10px;">
  <h2>My Website Header</h2>
</header>

<div style="display:flex;">
  <nav style="width:20%;background:#ececec;padding:10px;">
    Navigation Menu
  </nav>

  <main style="width:60%;padding:10px;">
    <article style="border:1px solid #ccc;padding:10px;">
      <h3>Article Title</h3>
      This is an article inside layout.
    </article>
  </main>

  <aside style="width:20%;background:#fafafa;padding:10px;">
    Sidebar Content
  </aside>
</div>

<footer style="background:lightgray;padding:10px;margin-top:10px;">
  Footer Area
</footer>
`);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const doc = iframe.contentWindow.document;

    doc.open();
    doc.write(code);
    doc.close();
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9f9f9" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "#04AA6D",
          color: "white",
          padding: "20px",
          textAlign: "center",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        HTML Layout Elements & Techniques
      </header>

      <div style={{ padding: "20px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What is HTML Layout?</h2>
        <p>
          HTML layout webpage ko structure dene ke liye use hota hai. Yeh special
          structural elements (header, nav, section, footer) ko use karta hai.
        </p>

        {/* TABLE */}
        <h2 style={{ color: "#04AA6D" }}>HTML Layout Elements</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th style={thStyle}>Element</th>
              <th style={thStyle}>Description</th>
            </tr>
          </thead>

          <tbody>
            {layoutData.map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.tag}</td>
                <td style={tdStyle}>{row.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* DIAGRAM */}
        <h2 style={{ color: "#04AA6D" }}>HTML Layout Diagram</h2>
        <div style={diagramStyle}>
          ----------------------------------------- <br />
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; HEADER
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
          <br />
          ----------------------------------------- <br />
          | NAV | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; MAIN CONTENT AREA
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
          <br />
          |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| ARTICLE + SECTIONS | ASIDE | <br />
          ----------------------------------------- <br />
          | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FOOTER
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |
          <br />
          -----------------------------------------
        </div>

        {/* EXAMPLE */}
        <h2 style={{ color: "#04AA6D" }}>Example</h2>

        <div style={exampleBox}>
          <pre style={preStyle}>{exampleCode}</pre>
        </div>

        {/* TRY IT */}
        <h2 style={{ color: "#04AA6D" }}>Try It Yourself</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={textareaStyle}
        ></textarea>

        <button onClick={runCode} style={buttonStyle}>
          Run
        </button>

        <iframe id="outputFrame" style={iframeStyle}></iframe>
      </div>
    </div>
  );
}

/* ----------------------- DATA ------------------------- */

const layoutData = [
  { tag: "<header>", desc: "Top section of webpage" },
  { tag: "<nav>", desc: "Navigation menu area" },
  { tag: "<section>", desc: "Defines a section in the page" },
  { tag: "<article>", desc: "Self-contained content" },
  { tag: "<aside>", desc: "Sidebar content" },
  { tag: "<footer>", desc: "Bottom/footer area" },
  { tag: "<div>", desc: "Generic block container" },
];

const exampleCode = `
<header>Header Area</header>

<nav>Navigation Links</nav>

<section>Section Content</section>

<article>Article Content</article>

<aside>Sidebar Content</aside>

<footer>Footer Content</footer>
`;

/* ----------------------- STYLES ------------------------- */

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  background: "#f2f2f2",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
};

const exampleBox = {
  background: "#fff4cc",
  borderLeft: "6px solid orange",
  padding: "15px",
  borderRadius: "6px",
  marginTop: "10px",
};

const preStyle = {
  background: "#eee",
  padding: "12px",
  borderRadius: "6px",
};

const textareaStyle = {
  width: "100%",
  height: "180px",
  border: "2px solid #04AA6D",
  borderRadius: "8px",
  padding: "10px",
  fontFamily: "monospace",
  fontSize: "15px",
};

const buttonStyle = {
  background: "#04AA6D",
  border: "none",
  color: "white",
  padding: "10px 20px",
  borderRadius: "6px",
  marginTop: "10px",
  cursor: "pointer",
};

const iframeStyle = {
  width: "100%",
  height: "250px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  background: "white",
  marginTop: "10px",
};

const diagramStyle = {
  background: "#eee",
  padding: "20px",
  borderRadius: "8px",
  whiteSpace: "pre-wrap",
  fontSize: "15px",
  marginTop: "15px",
};
