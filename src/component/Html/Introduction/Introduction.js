import React, { useState } from "react";

export default function HtmlIntroduction() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>

  <h1>Welcome to HTML!</h1>
  <p>This is my first paragraph.</p>

</body>
</html>`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "#f8fafc",
        color: "#111827",
        minHeight: "100vh",
        padding: "50px 70px",
      }}
    >
      <h1 style={{ color: "#1e40af", fontSize: "2.5rem", marginBottom: "15px" }}>
        🌐 HTML Introduction
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#374151" }}>
        <strong>HTML (HyperText Markup Language)</strong> is the foundation of
        every webpage. It tells the browser <em>what to show</em> and
        <em>how to display it</em>. HTML is not a programming language — it’s a
        <strong>markup language</strong> that structures the web using
        <strong>elements</strong> like <code>&lt;h1&gt;</code>,
        <code>&lt;p&gt;</code>, <code>&lt;a&gt;</code>, and more.
      </p>

      <div
        style={{
          background: "#fff",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          marginTop: "30px",
        }}
      >
        <h2 style={{ color: "#2563eb", marginBottom: "10px" }}>
          📘 Example: A Simple HTML Document
        </h2>
        <p style={{ color: "#555", marginBottom: "10px" }}>
          You can try editing the code below and click <strong>“Run Code”</strong> to
          see the result live, just like W3Schools!
        </p>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            width: "100%",
            height: "180px",
            background: "#111827",
            color: "#e2e8f0",
            border: "1px solid #cbd5e1",
            borderRadius: "10px",
            padding: "12px",
            fontFamily: "monospace",
            fontSize: "15px",
            marginBottom: "12px",
          }}
        />

        <button
          onClick={runCode}
          style={{
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(37,99,235,0.4)",
            transition: "transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ▶ Run Code
        </button>

        <h3 style={{ marginTop: "25px", color: "#1e40af" }}>Output:</h3>
        <iframe
          title="output"
          srcDoc={output}
          style={{
            width: "100%",
            height: "230px",
            background: "#fff",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            marginTop: "10px",
          }}
        ></iframe>
      </div>

      <div
        style={{
          marginTop: "50px",
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#2563eb" }}>📂 HTML Document Structure</h2>
        <p style={{ color: "#555", marginBottom: "10px" }}>
          Every HTML page follows a basic structure that defines how content is
          organized. Let’s break it down:
        </p>

        <pre
          style={{
            background: "#111827",
            color: "#e2e8f0",
            padding: "15px",
            borderRadius: "10px",
            overflowX: "auto",
            marginBottom: "20px",
          }}
        >
{`<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`}
        </pre>

        <ul style={{ lineHeight: "1.8", color: "#374151", fontSize: "1rem" }}>
          <li>
            <strong>&lt;!DOCTYPE html&gt;</strong> → Defines the HTML version being
            used (HTML5).
          </li>
          <li>
            <strong>&lt;html&gt;</strong> → The root element that contains all the
            HTML code.
          </li>
          <li>
            <strong>&lt;head&gt;</strong> → Holds metadata, title, and linked files.
          </li>
          <li>
            <strong>&lt;body&gt;</strong> → Displays all visible content like
            headings, paragraphs, and images.
          </li>
        </ul>
      </div>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #93c5fd, #bfdbfe)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#1e3a8a" }}>💡 What is HTML?</h3>
          <p style={{ color: "#1e3a8a" }}>
            HTML stands for <b>HyperText Markup Language</b>. It gives structure to
            web pages and is interpreted by browsers to display content.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #a7f3d0, #6ee7b7)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#064e3b" }}>📄 What are HTML Elements?</h3>
          <p style={{ color: "#064e3b" }}>
            HTML uses <b>tags</b> to mark elements — like
            <code> &lt;h1&gt;</code>, <code>&lt;p&gt;</code>, or
            <code>&lt;a&gt;</code>. These define content meaning and hierarchy.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(135deg, #fde68a, #fcd34d)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#78350f" }}>⚙️ Why Learn HTML?</h3>
          <p style={{ color: "#78350f" }}>
            HTML is the first step in web development. It's essential for
            front-end, back-end, or full-stack developers to build any website.
          </p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "#2563eb",
          fontWeight: "600",
        }}
      >
        🚀 Next, learn about <b>HTML Elements, Attributes, Headings, and Links</b>.
      </p>
    </div>
  );
}
