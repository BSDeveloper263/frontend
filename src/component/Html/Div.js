import React, { useState } from "react";

export default function HtmlDiv() {
  const [code, setCode] = useState(`<div style="background-color:lightblue;">
  <h2>This is a div element</h2>
  <p>A div element is used to group content.</p>
</div>`);

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
        HTML &lt;div&gt; Element
      </header>

      {/* Main Section */}
      <section style={{ padding: "25px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What is a &lt;div&gt; Element?</h2>
        <p>
          The <b>&lt;div&gt;</b> element is used as a **container** for other HTML
          elements. It is a <b>block-level</b> element that helps group content
          together for styling or layout purposes.
        </p>

        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "15px",
            borderLeft: "5px solid orange",
            borderRadius: "8px",
            marginBottom: "25px",
          }}
        >
          <h4 style={{ color: "#04AA6D" }}>Syntax:</h4>
          <pre
            style={{
              backgroundColor: "#eee",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
{`<div>
  <!-- Content goes here -->
</div>`}
          </pre>
        </div>

        {/* Example */}
        <h3 style={{ color: "#04AA6D" }}>Example:</h3>
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "15px",
            borderLeft: "5px solid orange",
            borderRadius: "8px",
          }}
        >
          <pre
            style={{
              backgroundColor: "#eee",
              padding: "10px",
              borderRadius: "6px",
            }}
          >
{`<div style="background-color:lightblue;">
  <h2>This is a div element</h2>
  <p>A div element is used to group content.</p>
</div>`}
          </pre>
          <p>Output:</p>
          <div
            style={{
              backgroundColor: "lightblue",
              padding: "10px",
              border: "1px solid gray",
              borderRadius: "8px",
            }}
          >
            <h2>This is a div element</h2>
            <p>A div element is used to group content.</p>
          </div>
        </div>

        {/* Styling Section */}
        <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>
          Styling the &lt;div&gt; Element
        </h2>
        <p>
          A <b>&lt;div&gt;</b> element can have a background color, border,
          padding, margin, and other CSS properties applied to it.
        </p>
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
            }}
          >
{`<div style="background-color:lightgray; padding:10px; border:1px solid black;">
  <h4>Styled Div Box</h4>
  <p>This div has background color, padding and border.</p>
</div>`}
          </pre>
          <p>Output:</p>
          <div
            style={{
              backgroundColor: "lightgray",
              padding: "10px",
              border: "1px solid black",
              borderRadius: "6px",
            }}
          >
            <h4>Styled Div Box</h4>
            <p>This div has background color, padding and border.</p>
          </div>
        </div>

        {/* Nested Div Example */}
        <h2 style={{ color: "#04AA6D" }}>Nested &lt;div&gt; Elements</h2>
        <p>
          A <b>&lt;div&gt;</b> element can contain other <b>&lt;div&gt;</b>{" "}
          elements inside it (nested divs).
        </p>
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
            }}
          >
{`<div style="background-color:lightgray; padding:10px;">
  <div style="background-color:white; padding:10px;">
    <p>This is a nested div.</p>
  </div>
</div>`}
          </pre>
          <p>Output:</p>
          <div
            style={{
              backgroundColor: "lightgray",
              padding: "10px",
              border: "1px solid gray",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                border: "1px solid gray",
              }}
            >
              <p>This is a nested div.</p>
            </div>
          </div>
        </div>

        {/* Try It Yourself Section */}
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "5px solid orange",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#04AA6D" }}>Try It Yourself 👇</h2>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "100%",
              height: "150px",
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
              height: "200px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "10px",
              background: "white",
            }}
          ></iframe>
        </div>

     
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
         
         
        </div>
      </section>
    </div>
  );
}
