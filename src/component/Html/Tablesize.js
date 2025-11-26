import React, { useState } from "react";

export default function TableSize() {
  const [code, setCode] = useState(`<table border="2" width="400" height="200" cellpadding="10" cellspacing="5">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>City</th>
  </tr>
  <tr>
    <td>Ravi</td>
    <td>22</td>
    <td>Delhi</td>
  </tr>
  <tr>
    <td>Sita</td>
    <td>25</td>
    <td>Mumbai</td>
  </tr>
</table>`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "30px",
        background: "linear-gradient(to bottom right, #dbeafe, #fef3c7)",
        minHeight: "100vh",
        color: "#222",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1e40af",
          textShadow: "1px 1px #fff",
        }}
      >
        HTML Table Size, Width & Height
      </h1>

      <p style={{ fontSize: "16px", marginTop: "10px" }}>
        Table ke <b>size</b> ko control karne ke liye hum{" "}
        <code>width</code> aur <code>height</code> attributes use karte hain.{" "}
        Table ke andar ke cells ke spacing aur padding ko{" "}
        <code>cellpadding</code> aur <code>cellspacing</code> se adjust karte
        hain.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        {/* Editor Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#1e40af" }}>Try Yourself:</h3>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows="14"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontFamily: "monospace",
              fontSize: "14px",
              background: "#f9fafb",
              resize: "none",
            }}
          ></textarea>
          <button
            onClick={runCode}
            style={{
              marginTop: "10px",
              background: "linear-gradient(to right, #2563eb, #3b82f6)",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(to right, #1d4ed8, #2563eb)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(to right, #2563eb, #3b82f6)")
            }
          >
            Run Code
          </button>
        </div>

        {/* Output Section */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "#1e40af" }}>Output:</h3>
          <iframe
            title="output"
            sandbox="allow-scripts"
            srcDoc={`<html><body>${output}</body></html>`}
            style={{
              width: "100%",
              height: "300px",
              background: "#fff",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          ></iframe>
        </div>
      </div>

      {/* Explanation */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#1e3a8a" }}>Explanation:</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <b>width:</b> Table ki total width set karta hai (px ya % me).
          </li>
          <li>
            <b>height:</b> Table ki total height set karta hai.
          </li>
          <li>
            <b>cellpadding:</b> Cell ke andar text aur border ke beech ka space.
          </li>
          <li>
            <b>cellspacing:</b> Do cells ke beech ka space.
          </li>
          <li>
            <b>border:</b> Table ke border ka thickness define karta hai.
          </li>
        </ul>
      </div>

      {/* Practice Questions */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#1e3a8a" }}>Practice Questions:</h2>
        <ol style={{ lineHeight: "1.8", marginTop: "10px" }}>
          <li>Table ki width 100% aur height 300px set karke ek table banao.</li>
          <li>5 rows aur 3 columns wali table design karo.</li>
          <li>
            Cellpadding ko 20 aur cellspacing ko 10 set karke difference dekho.
          </li>
          <li>
            Border size 5px aur color red set karne ke liye CSS ka use karo.
          </li>
          <li>Ek table banao jisme student marks ka data ho.</li>
          <li>
            Table me ek image insert karo aur uska size fixed rakho using width &
            height.
          </li>
          <li>Responsive table design karo using CSS.</li>
          <li>
            Ek table banao jisme heading bold aur background color light ho.
          </li>
          <li>Cellspacing aur cellpadding ke effect ka difference likho.</li>
          <li>
            Ek table banao jisme 4 subjects aur unke marks ho — border 2px black
            ho.
          </li>
        </ol>
      </div>
    </div>
  );
}
