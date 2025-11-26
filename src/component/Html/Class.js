import React, { useState } from "react";

export default function HtmlClassAttribute() {
  const [code, setCode] = useState(`<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

<style>
.city {
  background-color: lightblue;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}
</style>`);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        lineHeight: "1.6",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#04AA6D",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "28px",
          fontWeight: "bold",
        }}
      >
        HTML Class Attribute
      </header>

      {/* Main Content */}
      <section style={{ padding: "20px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What is the class Attribute?</h2>
        <p>
          The <b>class</b> attribute is used to define one or more class names
          for an HTML element. Classes are mainly used by CSS and JavaScript to
          apply styles and manipulate elements with the same class name.
        </p>

        <h3 style={{ color: "#04AA6D" }}>Example:</h3>
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "15px",
            borderLeft: "5px solid orange",
            borderRadius: "8px",
            marginBottom: "25px",
          }}
        >
          <pre
            style={{
              backgroundColor: "#eee",
              padding: "10px",
              borderRadius: "6px",
              overflowX: "auto",
            }}
          >
{`<div class="city">
  <h2>London</h2>
  <p>London is the capital of England.</p>
</div>

<div class="city">
  <h2>Paris</h2>
  <p>Paris is the capital of France.</p>
</div>

<div class="city">
  <h2>Tokyo</h2>
  <p>Tokyo is the capital of Japan.</p>
</div>

<style>
.city {
  background-color: lightblue;
  color: white;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
}
</style>`}
          </pre>

          <p><b>Output:</b></p>
          <div
            style={{
              backgroundColor: "lightblue",
              color: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h2>London</h2>
            <p>London is the capital of England.</p>
          </div>
          <div
            style={{
              backgroundColor: "lightblue",
              color: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h2>Paris</h2>
            <p>Paris is the capital of France.</p>
          </div>
          <div
            style={{
              backgroundColor: "lightblue",
              color: "white",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h2>Tokyo</h2>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        </div>

        {/* Try It Yourself */}
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "5px solid orange",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#04AA6D" }}>Try It Yourself 👇</h2>
          <p>Type your code below and click “Run” to see the result!</p>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "100%",
              height: "220px",
              border: "2px solid #04AA6D",
              borderRadius: "8px",
              padding: "10px",
              fontFamily: "monospace",
              fontSize: "15px",
            }}
          ></textarea>
          <button
            onClick={runCode}
            style={{
              backgroundColor: "#04AA6D",
              border: "none",
              padding: "10px 18px",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "8px",
            }}
          >
            Run
          </button>
          <iframe
            id="outputFrame"
            title="Output"
            style={{
              width: "100%",
              height: "260px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "10px",
              background: "white",
            }}
          ></iframe>
        </div>

        {/* Extra Info */}
        <h2 style={{ color: "#04AA6D" }}>Multiple Classes</h2>
        <p>
          You can use more than one class on the same element by separating them
          with a space:
        </p>
        <pre
          style={{
            backgroundColor: "#eee",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
{`<div class="city main"></div>`}
        </pre>
        <p>
          In the above example, the element belongs to both <b>city</b> and{" "}
          <b>main</b> classes.
        </p>
      </section>
    </div>
  );
}
