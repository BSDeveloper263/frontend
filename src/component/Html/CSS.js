import React, { useState } from "react";

export default function HtmlCss() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: blue;
}
p {
  color: red;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        padding: "40px",
        color: "#222",
        lineHeight: "1.6",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1 style={{ color: "#d63384" }}>HTML CSS</h1>
      <p>
        CSS stands for <b>Cascading Style Sheets</b>. CSS describes how HTML elements are
        to be displayed on screen, paper, or in other media. CSS saves a lot of work — it
        can control the layout of multiple web pages all at once.
      </p>

      <h2 style={{ color: "#0d6efd" }}>What is CSS?</h2>
      <ul>
        <li>CSS stands for Cascading Style Sheets</li>
        <li>CSS describes how HTML elements are displayed</li>
        <li>CSS saves time by controlling layout across multiple pages</li>
      </ul>

      <div style={{ background: "#f8f9fa", padding: "15px", borderRadius: "8px", borderLeft: "4px solid #0d6efd" }}>
        <h3>Example</h3>
        <pre style={{ background: "#272822", color: "#f8f8f2", padding: "10px", borderRadius: "6px" }}>
{`<!DOCTYPE html>
<html>
<head>
<style>
h1 {color: blue;}
p {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`}
        </pre>
        <div style={{ background: "white", padding: "15px", borderRadius: "8px", marginTop: "10px" }}>
          <h1 style={{ color: "blue" }}>This is a heading</h1>
          <p style={{ color: "red" }}>This is a paragraph.</p>
        </div>
      </div>

      <h2 style={{ color: "#0d6efd" }}>Three Ways to Add CSS</h2>
      <p>There are three ways to insert CSS:</p>
      <ul>
        <li><b>Inline CSS</b> — using the <code>style</code> attribute in HTML elements</li>
        <li><b>Internal CSS</b> — using a <code>&lt;style&gt;</code> element inside the <code>&lt;head&gt;</code></li>
        <li><b>External CSS</b> — using an external <code>.css</code> file</li>
      </ul>

      <h2 style={{ color: "#0d6efd" }}>Inline CSS Example</h2>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}>
{`<h1 style="color:blue;">A Blue Heading</h1>
<p style="color:red;">A red paragraph.</p>`}
      </pre>
      <div style={{ background: "white", padding: "15px", borderRadius: "8px", marginTop: "10px" }}>
        <h1 style={{ color: "blue" }}>A Blue Heading</h1>
        <p style={{ color: "red" }}>A red paragraph.</p>
      </div>

      <h2 style={{ color: "#0d6efd" }}>Internal CSS Example</h2>
      <p>Internal CSS is defined inside the <code>&lt;style&gt;</code> element in the <code>&lt;head&gt;</code> section.</p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}>
{`<style>
body {background-color: lightblue;}
h1 {color: white; text-align: center;}
p {font-family: verdana; font-size: 20px;}
</style>`}
      </pre>
      <div style={{ backgroundColor: "lightblue", padding: "20px", borderRadius: "8px" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>This is a heading</h1>
        <p style={{ fontFamily: "Verdana", fontSize: "20px" }}>This is a paragraph.</p>
      </div>

      <h2 style={{ color: "#0d6efd" }}>External CSS Example</h2>
      <p>
        External CSS is defined in a separate file with a <code>.css</code> extension, and linked
        using the <code>&lt;link&gt;</code> tag inside the <code>&lt;head&gt;</code> section.
      </p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}>
{`<link rel="stylesheet" href="styles.css">`}
      </pre>
      <p><b>Example "styles.css"</b></p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ddd" }}>
{`body {background-color: powderblue;}
h1 {color: blue;}
p {color: red;}`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>Try It Yourself</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          border: "1px solid #ccc",
          padding: "10px",
          fontFamily: "monospace",
          borderRadius: "6px",
        }}
      ></textarea>
      <br />
      <button
        onClick={runCode}
        style={{
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "6px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Run Output
      </button>

      <h2 style={{ marginTop: "30px", color: "#0d6efd" }}>Output:</h2>
      <iframe
        title="output"
        srcDoc={output}
        style={{
          width: "100%",
          height: "250px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "white",
        }}
      ></iframe>

      <h2 style={{ color: "#198754", marginTop: "30px" }}>Summary:</h2>
      <ul>
        <li>CSS is used to style HTML elements.</li>
        <li>Three ways to apply CSS — Inline, Internal, and External.</li>
        <li>CSS helps keep design separate from content.</li>
      </ul>
    </div>
  );
}
