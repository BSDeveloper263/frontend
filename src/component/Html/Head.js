import React, { useState } from "react";

export default function HtmlHeadElement() {
  const [code, setCode] = useState(`
<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
  <meta charset="UTF-8">
</head>
<body>
  <h2>This is the body</h2>
  <p>The head element contains meta information.</p>
</body>
</html>
`);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const blob = new Blob([code], { type: "text/html" });
    iframe.src = URL.createObjectURL(blob);
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px", lineHeight: "1.6" }}>
      {/* TITLE */}
      <h1 style={{ color: "#04AA6D" }}>HTML &lt;head&gt; Element</h1>
      <p>
        <b>&lt;head&gt;</b> element HTML document ka important part hota hai jo
        browser ko page ke baare me information deta hai.
      </p>
      <p>Head ke andar likhi information **page par display nahi hoti**.</p>

      {/* WHAT HEAD CONTAINS */}
      <h2 style={{ color: "#04AA6D" }}>What does the &lt;head&gt; contain?</h2>
      <p>Head element ke andar generally ye sab hota hai:</p>

      <ul>
        <li>&lt;title&gt; – Page ka title</li>
        <li>&lt;meta&gt; – Metadata (description, keywords, charset)</li>
        <li>&lt;link&gt; – External CSS files</li>
        <li>&lt;style&gt; – Internal CSS</li>
        <li>&lt;script&gt; – JavaScript files</li>
        <li>&lt;base&gt; – Base URL</li>
      </ul>

      {/* EXAMPLE */}
      <h2 style={{ color: "#04AA6D" }}>Example</h2>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
          overflowX: "auto",
        }}
      >
{`<head>
  <title>My Website</title>
  <meta charset="UTF-8">
  <meta name="description" content="Learn HTML easily">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <link rel="stylesheet" href="style.css">
</head>`}
      </pre>

      {/* TITLE ELEMENT */}
      <h2 style={{ color: "#04AA6D" }}>&lt;title&gt; Element</h2>
      <p>
        &lt;title&gt; browser tab ka naam hota hai. SEO me bhi important role
        play karta hai.
      </p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
{`<title>Welcome to My Website</title>`}
      </pre>

      {/* META ELEMENT */}
      <h2 style={{ color: "#04AA6D" }}>&lt;meta&gt; Element</h2>
      <p>Meta element SEO, charset, viewport aur page description define karta hai.</p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
{`<meta name="description" content="Free HTML Tutorial">
<meta name="keywords" content="HTML, CSS, Web Development">
<meta name="author" content="Bhavin">`}
      </pre>

      {/* LINK ELEMENT */}
      <h2 style={{ color: "#04AA6D" }}>&lt;link&gt; Element</h2>
      <p>External CSS file ko link karta hai.</p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
{`<link rel="stylesheet" href="styles.css">`}
      </pre>

      {/* STYLE ELEMENT */}
      <h2 style={{ color: "#04AA6D" }}>&lt;style&gt; Element</h2>
      <p>Page ke andar CSS likhne ke liye use hota hai.</p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
{`<style>
  h1 { color: blue; }
</style>`}
      </pre>

      {/* SCRIPT ELEMENT */}
      <h2 style={{ color: "#04AA6D" }}>&lt;script&gt; Element</h2>
      <p>JavaScript ko include karta hai.</p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
{`<script src="app.js"></script>`}
      </pre>

      {/* TRY IT YOURSELF */}
      <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>
        Try It Yourself
      </h2>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          padding: "10px",
          fontFamily: "monospace",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      ></textarea>

      <button
        onClick={runCode}
        style={{
          background: "#04AA6D",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Run Code
      </button>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          height: "250px",
          overflow: "hidden",
        }}
      >
        <iframe
          id="outputFrame"
          title="Output"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "white",
          }}
        ></iframe>
      </div>

      {/* WHY IMPORTANT */}
      <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>
        Why is the &lt;head&gt; Element Important?
      </h2>

      <ul>
        <li>Search engines ko page content samajhne me help karta hai</li>
        <li>Browser ko correct charset batata hai</li>
        <li>CSS & JS files load karta hai</li>
        <li>Mobile responsive banane me help karta hai</li>
        <li>SEO ranking me important role play karta hai</li>
      </ul>
    </div>
  );
}
