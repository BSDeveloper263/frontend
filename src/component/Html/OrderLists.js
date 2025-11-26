import React, { useState } from "react";

export default function HtmlOrderedList() {
  const [code, setCode] = useState(`<ol>
  <li>Tea</li>
  <li>Coffee</li>
  <li>Juice</li>
</ol>`);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "25px",
    transition: "transform 0.3s ease",
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
        HTML Ordered List
      </header>

      <section style={{ padding: "20px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What is an Ordered List?</h2>
        <p>
          An <b>HTML Ordered List</b> ek aisi list hoti hai jisme items
          <b> numbering ke sath </b> show hote hain. Jaise 1, 2, 3... ya a, b, c...
        </p>
        <p>
          Ordered list ko <b>{`<ol>`}</b> tag se banaya jata hai, aur list ke har
          item ko <b>{`<li>`}</b> tag ke andar likhte hain.
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
            }}
          >
{`<ol>
  <li>Tea</li>
  <li>Coffee</li>
  <li>Juice</li>
</ol>`}
          </pre>
          <p>Output:</p>
          <ol>
            <li>Tea</li>
            <li>Coffee</li>
            <li>Juice</li>
          </ol>
        </div>

        {/* Try It Yourself Section */}
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
          <p>Code likho aur “Run” dabao output dekhne ke liye!</p>
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
        <h2 style={{ color: "#04AA6D" }}>🧠 Practice Questions (with Images)</h2>
        <div
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ color: "#04AA6D" }}>Q1. Simple Ordered List</h3>
            <p>Create a simple ordered list like this:</p>
            <img
              src="https://www.programiz.com/sites/tutorial2program/files/html-ordered-lists-nested.png"
              alt="Ordered List Example"
              style={{
                marginTop: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: "#04AA6D" }}>Q2. Uppercase Letters</h3>
            <p>
              Create an ordered list with <b>type="A"</b> (Uppercase letters):
            </p>
            <img
              src="https://www.programiz.com/sites/tutorial2program/files/html-ordered-list-types.png"
              alt="Uppercase List"
              style={{
                marginTop: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: "#04AA6D" }}>Q3. Roman Numbers</h3>
            <p>
              Create an ordered list with <b>type="I"</b> (Roman numbers):
            </p>
            <img
              src="https://i.ytimg.com/vi/3wO89xVkNKg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB76KgnH0FTqxDglPp4R71xi0Y8VA"
              alt="Roman List Example"
              style={{
                marginTop: "10px",
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
