import React, { useState } from "react";

export default function HtmlJavaScriptPage() {
  const [code, setCode] = useState(`
<h2>JavaScript Can Change HTML Content</h2>
<p id="demo">Hello JavaScript!</p>
<button onclick="document.getElementById('demo').innerHTML='JavaScript Running!'">
Click Me
</button>
  `);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const blob = new Blob([code], { type: "text/html" });
    iframe.src = URL.createObjectURL(blob);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* TITLE */}
      <h1 style={{ color: "#04AA6D" }}>HTML JavaScript</h1>
      <p>
        JavaScript web pages ko dynamic & interactive banane ke liye use hota
        hai. HTML page ke andar JavaScript ko <code>&lt;script&gt;</code> tag
        ke through likha jata hai.
      </p>

      {/* INTRO */}
      <h2>JavaScript in HTML</h2>
      <p>JavaScript ko HTML ke andar 3 jagah use kar sakte ho:</p>
      <ul>
        <li>HTML ke andar <code>&lt;script&gt;</code> tag me</li>
        <li>External JS file ke through</li>
        <li>Inline JavaScript (onclick, etc.)</li>
      </ul>

      {/* EXAMPLE */}
      <h2>Example</h2>
      <p>Yeh example button click par text change karta hai:</p>

      <div
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <pre>{`
<p id="demo">Hello JavaScript!</p>
<button onclick="document.getElementById('demo').innerHTML='JavaScript Running!'">Click Me</button>
        `}</pre>
      </div>

      <h3>Output:</h3>
      <div
        style={{
          background: "#fff",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      >
        <p id="demo2">Hello JavaScript!</p>
        <button
          onClick={() =>
            (document.getElementById("demo2").innerHTML =
              "JavaScript Running!")
          }
          style={{
            background: "#04AA6D",
            color: "white",
            padding: "8px 12px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Click Me
        </button>
      </div>

      {/* WHERE TO WRITE JS */}
      <h2>Where to Write JavaScript?</h2>

      <h3>1. Inside HTML</h3>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`<script>
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>`}
      </pre>

      <h3>2. External JS File</h3>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`<script src="script.js"></script>`}
      </pre>

      {/* OUTPUT CHANGE */}
      <h2>JavaScript Can Change HTML Content</h2>
      <p>
        JavaScript se elements ka text, style, color, size sab change kar sakte
        ho.
      </p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`document.getElementById("demo").innerHTML = "New Text";`}
      </pre>

      {/* TRY IT YOURSELF */}
      <h2 style={{ marginTop: "30px" }}>Try It Yourself</h2>
      <p>Yahan code likho aur output dekho (W3Schools jaisa):</p>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "180px",
          padding: "10px",
          borderRadius: "6px",
          fontSize: "14px",
          border: "1px solid #ccc",
        }}
      ></textarea>

      <button
        onClick={runCode}
        style={{
          background: "#04AA6D",
          color: "white",
          border: "none",
          padding: "10px 18px",
          borderRadius: "5px",
          marginTop: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Run Code
      </button>

      {/* OUTPUT BOX */}
      <div
        style={{
          marginTop: "20px",
          border: "2px solid #ddd",
          borderRadius: "10px",
          height: "220px",
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
          }}
        ></iframe>
      </div>

      {/* EXTRA CONTENT */}
      <h2 style={{ marginTop: "40px" }}>JavaScript Can Change CSS</h2>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`document.getElementById("demo").style.color = "red";`}
      </pre>

      <h2>JavaScript Can Hide or Show Elements</h2>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`document.getElementById("box").style.display = "none";`}
      </pre>
    </div>
  );
}
