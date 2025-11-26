import React, { useState } from "react";

export default function HtmlUnorderedList() {
  const [code, setCode] = useState(`<ul>
  <li>Tea</li>
  <li>Coffee</li>
  <li>Milk</li>
</ul>`);

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
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
        HTML Unordered List
      </header>

      {/* Content Section */}
      <section style={{ padding: "30px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What is an Unordered List?</h2>
        <p>
          <b>HTML Unordered List</b> ka use items ko <b>bullet points</b> ke form
          me dikhane ke liye hota hai. Ye list un items ke liye use hoti hai jinka
          order matter nahi karta — jaise shopping items, menu options, etc.
        </p>
        <p>
          Iske liye hum <code>&lt;ul&gt;</code> (unordered list) aur{" "}
          <code>&lt;li&gt;</code> (list item) tag ka use karte hain.
        </p>

        {/* Example */}
        <h3 style={{ color: "#04AA6D" }}>Example:</h3>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            marginBottom: "30px",
          }}
        >
          <pre
            style={{
              backgroundColor: "#272822",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >{`<ul>
  <li>Tea</li>
  <li>Coffee</li>
  <li>Milk</li>
</ul>`}</pre>
          <h4 style={{ marginTop: "15px" }}>Output:</h4>
          <ul>
            <li>Tea</li>
            <li>Coffee</li>
            <li>Milk</li>
          </ul>
        </div>

        {/* Try It Editor */}
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "5px solid orange",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#04AA6D" }}>Try it Yourself 👇</h2>
          <p>Apna code likho aur “Run” button dabao output dekhne ke liye!</p>

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
            onClick={() => {
              const iframe = document.getElementById("outputFrame");
              const doc = iframe.contentWindow.document;
              doc.open();
              doc.write(code);
              doc.close();
            }}
            style={{
              backgroundColor: "#04AA6D",
              color: "white",
              border: "none",
              padding: "10px 20px",
              marginTop: "10px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Run ▶
          </button>

          <iframe
            id="outputFrame"
            title="Output"
            style={{
              width: "100%",
              height: "200px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "15px",
              background: "#fff",
            }}
          ></iframe>
        </div>

        {/* Bullet Types */}
        <h2 style={{ color: "#04AA6D" }}>Different Bullet Styles</h2>
        <p>
          Hum bullet style change karne ke liye <b>type</b> attribute use karte
          hain. Available values hain:
        </p>
        <ul>
          <li>disc (default)</li>
          <li>circle</li>
          <li>square</li>
          <li>none (no bullet)</li>
        </ul>

        <img
          src="https://www.w3schools.com/html/img_unorderedlist.png"
          alt="Bullet Types Example"
          style={{
            display: "block",
            margin: "20px auto",
            maxWidth: "80%",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        />

        {/* Practice Section */}
        <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>
          🧠 Practice Questions (with Images)
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 0 8px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <h4>Q1. </h4>
            <img
              src="https://www.programiz.com/sites/tutorial2program/files/html-unordered-list-markers.png"
              alt="Unordered List Example"
              style={{
                width: "100%",
                borderRadius: "8px",
                marginTop: "10px",
              }}
            />
          </div>

          {/* Card 2 */}
          <div style={{ ...cardStyle }}>
            <h4>Q2. </h4>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20241216160038960455/squareTypeUnorderedList.webp"
              alt="Square Bullets"
              style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>

          {/* Card 3 */}
          <div style={{ ...cardStyle }}>
            <h4>Q.3</h4>
            <img
              src="https://scaler.com/topics/images/what-is-nesting-of-list.webp"
              alt="Nested List"
              style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>

          {/* Card 4 */}
          <div style={{ ...cardStyle }}>
            <h4>Q.4</h4>
            <img
              src="https://help.figma.com/hc/article_attachments/19783492719895"
              alt="Circle Bullets"
              style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>

          {/* Card 5 */}
          <div style={{ ...cardStyle }}>
            <h4>Q5. </h4>
            <img
              src="https://www.programiz.com/sites/tutorial2program/files/html-unordered-lists-nested.png"
              alt="No Bullets"
              style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>

          {/* Card 6 */}
          <div style={{ ...cardStyle }}>
            <h4>Q6.</h4>
            <img
              src="https://iqratechnology.com/wp-content/uploads/2023/10/html-lists.png"
              alt="Combined List Example"
              style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Shared card style
const cardStyle = {
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0 0 8px rgba(0,0,0,0.1)",
  padding: "20px",
};
