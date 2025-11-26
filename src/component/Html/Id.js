import React, { useState } from "react";

export default function HtmlIdAttribute() {
  const [code, setCode] = useState(`<h2 id="myHeader">My Header</h2>

<style>
#myHeader {
  background-color: lightblue;
  color: white;
  padding: 20px;
  text-align: center;
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
        HTML id Attribute
      </header>

      {/* Content */}
      <section style={{ padding: "20px 40px" }}>
        <h2 style={{ color: "#04AA6D" }}>What is the id Attribute?</h2>
        <p>
          The <b>id</b> attribute is used to uniquely identify an element in an
          HTML document. Each id must be unique within a page, meaning you
          cannot use the same id on multiple elements.
        </p>
        <p>
          The id can be used by <b>CSS</b> and <b>JavaScript</b> to style or
          manipulate the specific element.
        </p>

        {/* Example Section */}
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
{`<h2 id="myHeader">My Header</h2>

<style>
#myHeader {
  background-color: lightblue;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
}
</style>`}
          </pre>

          <p><b>Output:</b></p>
          <h2
            style={{
              backgroundColor: "lightblue",
              color: "white",
              padding: "20px",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            My Header
          </h2>
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

        {/* Use with CSS */}
        <h2 style={{ color: "#04AA6D" }}>Using id in CSS</h2>
        <p>
          To style an element with a specific id in CSS, use the <b>#</b> symbol
          followed by the id name.
        </p>
        <pre
          style={{
            backgroundColor: "#eee",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
{`#myHeader {
  background-color: lightblue;
  color: white;
  text-align: center;
  padding: 20px;
}`}
        </pre>

        {/* Use with JavaScript */}
        <h2 style={{ color: "#04AA6D" }}>Using id in JavaScript</h2>
        <p>
          You can also use the id attribute to access or change elements using
          JavaScript. For example:
        </p>
        <pre
          style={{
            backgroundColor: "#eee",
            padding: "10px",
            borderRadius: "6px",
          }}
        >
{`<h2 id="myHeader">Hello World</h2>

<script>
document.getElementById("myHeader").innerHTML = "Welcome!";
</script>`}
        </pre>
        <p>
          The script above changes the text of the element with id{" "}
          <b>"myHeader"</b> to “Welcome!”.
        </p>
      </section>
    </div>
  );
}
