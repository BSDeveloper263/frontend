import React, { useState } from "react";

export default function HtmlBlockInline() {
  const [code, setCode] = useState(`<div>This is a block element</div>
<span>This is an inline element</span>`);

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
        HTML Block & Inline Elements
      </header>

      {/* Main Section */}
      <section style={{ padding: "25px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What are Block and Inline Elements?</h2>
        <p>
          HTML elements do main categories me divide hote hain —{" "}
          <b>Block-level</b> aur <b>Inline</b> elements.
        </p>

        {/* Block Elements */}
        <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>📦 Block-level Elements</h2>
        <p>
          Block-level elements ek complete line occupy karte hain aur next content
          ko new line me le jaate hain.
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
          <h4 style={{ color: "#04AA6D" }}>Common Block Elements:</h4>
          <ul>
            <li>&lt;div&gt;</li>
            <li>&lt;p&gt;</li>
            <li>&lt;h1&gt; to &lt;h6&gt;</li>
            <li>&lt;ol&gt;, &lt;ul&gt;, &lt;li&gt;</li>
            <li>&lt;table&gt;, &lt;form&gt;, &lt;section&gt;, &lt;article&gt;</li>
          </ul>
        </div>

        <h3 style={{ color: "#04AA6D" }}>Example of Block Elements:</h3>
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
{`<h2>This is a heading</h2>
<p>This is a paragraph.</p>
<div>This is a div block.</div>`}
          </pre>
          <p>Output:</p>
          <div
            style={{
              border: "1px solid gray",
              padding: "8px",
              marginBottom: "8px",
            }}
          >
            <h2>This is a heading</h2>
            <p>This is a paragraph.</p>
            <div>This is a div block.</div>
          </div>
        </div>

        {/* Inline Elements */}
        <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>💫 Inline Elements</h2>
        <p>
          Inline elements sirf utni space lete hain jitni unke content ke liye
          zarurat hoti hai, aur new line start nahi karte.
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
          <h4 style={{ color: "#04AA6D" }}>Common Inline Elements:</h4>
          <ul>
            <li>&lt;span&gt;</li>
            <li>&lt;a&gt;</li>
            <li>&lt;img&gt;</li>
            <li>&lt;strong&gt;, &lt;em&gt;, &lt;b&gt;, &lt;i&gt;</li>
            <li>&lt;label&gt;, &lt;input&gt;, &lt;button&gt;</li>
          </ul>
        </div>

        <h3 style={{ color: "#04AA6D" }}>Example of Inline Elements:</h3>
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
{`<p>This is a <span style="color:red;">red</span> text inside paragraph.</p>
<a href="#">This is a link</a>
<img src="https://www.w3schools.com/html/img_girl.jpg" width="60" />`}
          </pre>
          <p>Output:</p>
          <div
            style={{
              border: "1px solid gray",
              padding: "8px",
              marginBottom: "8px",
            }}
          >
            <p>
              This is a <span style={{ color: "red" }}>red</span> text inside
              paragraph.
            </p>
            <a href="#">This is a link</a> <br />
            <img
              src="https://www.w3schools.com/html/img_girl.jpg"
              alt="Girl"
              width="60"
            />
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

        {/* Practice Questions */}
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {[
           
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <h3 style={{ color: "#04AA6D" }}>Question {i + 1}</h3>
              <p>{item.q}</p>
              <img
                src={item.img}
                alt="Example"
                style={{ width: "90%", borderRadius: "6px", marginTop: "10px" }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
