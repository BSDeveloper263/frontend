import React, { useState } from "react";

export default function HtmlColors() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;">This is a Blue Heading</h1>
<p style="color:red;">This is a Red Paragraph.</p>

</body>
</html>`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", lineHeight: "1.6", color: "#333" }}>
      <h1 style={{ color: "#d63384" }}>HTML Colors</h1>
      <p>
        Colors in HTML are used to make elements visually appealing. You can define
        colors using names (like <b>red</b>, <b>blue</b>, <b>green</b>), RGB values,
        HEX codes, HSL, RGBA, or HSLA.
      </p>

      <h2 style={{ color: "#0d6efd" }}>Color Names</h2>
      <p>
        HTML supports 140 standard color names. Examples include <b>Tomato</b>,
        <b>Orange</b>, <b>DodgerBlue</b>, <b>MediumSeaGreen</b>, etc.
      </p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="color:Tomato;">Tomato</h1>
<h1 style="color:Orange;">Orange</h1>
<h1 style="color:DodgerBlue;">DodgerBlue</h1>
<h1 style="color:MediumSeaGreen;">MediumSeaGreen</h1>
<h1 style="color:Gray;">Gray</h1>
<h1 style="color:SlateBlue;">SlateBlue</h1>
<h1 style="color:Violet;">Violet</h1>
<h1 style="color:LightGray;">LightGray</h1>`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>Background Color</h2>
      <p>
        The <b>background-color</b> property sets the background color of an HTML
        element.
      </p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">This is a paragraph.</p>`}
      </pre>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <div style={{ backgroundColor: "Tomato", color: "white", padding: "20px", borderRadius: "8px" }}>Tomato</div>
        <div style={{ backgroundColor: "DodgerBlue", color: "white", padding: "20px", borderRadius: "8px" }}>DodgerBlue</div>
        <div style={{ backgroundColor: "MediumSeaGreen", color: "white", padding: "20px", borderRadius: "8px" }}>MediumSeaGreen</div>
        <div style={{ backgroundColor: "Gray", color: "white", padding: "20px", borderRadius: "8px" }}>Gray</div>
        <div style={{ backgroundColor: "SlateBlue", color: "white", padding: "20px", borderRadius: "8px" }}>SlateBlue</div>
        <div style={{ backgroundColor: "Violet", color: "white", padding: "20px", borderRadius: "8px" }}>Violet</div>
      </div>

      <h2 style={{ color: "#0d6efd", marginTop: "30px" }}>Text Color</h2>
      <p>The <b>color</b> property sets the color of the text.</p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="color:blue;">This is blue text</h1>
<p style="color:green;">This is green text</p>`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>Border Color</h2>
      <p>The <b>border</b> property can also use color values.</p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="border:2px solid Tomato;">Hello</h1>
<h1 style="border:2px solid DodgerBlue;">Hello</h1>
<h1 style="border:2px solid Violet;">Hello</h1>`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>RGB Colors</h2>
      <p>
        RGB stands for Red, Green, Blue. Each value can be between <b>0 and 255</b>.
        For example, <code>rgb(255, 0, 0)</code> represents red.
      </p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="background-color:rgb(255,0,0);">rgb(255,0,0)</h1>
<h1 style="background-color:rgb(0,255,0);">rgb(0,255,0)</h1>
<h1 style="background-color:rgb(0,0,255);">rgb(0,0,255)</h1>`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>HEX Colors</h2>
      <p>
        HEX colors are represented with a hash (<b>#</b>) followed by six hexadecimal
        digits.
      </p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="background-color:#ff0000;">#ff0000</h1>
<h1 style="background-color:#00ff00;">#00ff00</h1>
<h1 style="background-color:#0000ff;">#0000ff</h1>`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>HSL Colors</h2>
      <p>
        HSL stands for Hue, Saturation, and Lightness. Example:
        <code>hsl(0, 100%, 50%)</code> for red.
      </p>
      <pre style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
{`<h1 style="background-color:hsl(0,100%,50%);">hsl(0,100%,50%)</h1>
<h1 style="background-color:hsl(120,100%,25%);">hsl(120,100%,25%)</h1>
<h1 style="background-color:hsl(240,100%,50%);">hsl(240,100%,50%)</h1>`}
      </pre>

      <h2 style={{ color: "#0d6efd" }}>Try It Yourself:</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "10px",
          fontFamily: "monospace",
          marginTop: "10px",
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
        Run Code
      </button>

      <h2 style={{ color: "#0d6efd", marginTop: "30px" }}>Output:</h2>
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
        <li>Use <b>color</b> for text color.</li>
        <li>Use <b>background-color</b> for background.</li>
        <li>Use <b>border</b> color for borders.</li>
        <li>Colors can be defined by names, RGB, HEX, or HSL.</li>
        <li>Experiment with the live editor above!</li>
      </ul>
    </div>
  );
}
