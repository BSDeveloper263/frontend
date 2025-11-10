import React, { useState } from "react";

export default function TableBorderW3() {
  const [code, setCode] = useState(`<table style="width:100%; border:1px solid black; border-collapse:collapse;">
  <tr>
    <th style="border:1px solid black;">Name</th>
    <th style="border:1px solid black;">Age</th>
  </tr>
  <tr>
    <td style="border:1px solid black;">Bhavani</td>
    <td style="border:1px solid black;">22</td>
  </tr>
</table>`);

  const [output, setOutput] = useState(code);

  const runCode = () => setOutput(code);

  const questions = [
    {
      id: 1,
      title: "Practice 1",
      desc: "Create a table with 3 rows and 3 columns having 1px solid green borders.",
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20240122160715/border3.png",
    },
    {
      id: 2,
      title: "Practice 2",
      desc: "Make a table with border-collapse: collapse; and blue borders.",
      img: "https://i.sstatic.net/2B0NL.gif",
    },
    {
      id: 3,
      title: "Practice 3",
      desc: "Design a table with rounded borders using border-radius.",
      img: "https://i.sstatic.net/oCSS2.png",
    },
    {
      id: 4,
      title: "Practice 4",
      desc: "Create a table with alternating row colors using background-color.",
      img: "https://i.sstatic.net/veR5R.png",
    },
    {
      id: 5,
      title: "Practice 5",
      desc: "Add a table header with bold text and a bottom border.",
      img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/How%20to%20Make%20%26%20Edit%20Tables%20in%20HTML-Sep-23-2020-03-03-09-29-PM-1.webp?width=650&height=294&name=How%20to%20Make%20%26%20Edit%20Tables%20in%20HTML-Sep-23-2020-03-03-09-29-PM-1.webp",
    },
    {
      id: 6,
      title: "Practice 6",
      desc: "Create a table with dotted red borders and cell padding of 10px.",
      img: "https://www.w3.org/Style/Tables/ex-12.gif",
    },
   
  ];

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#333",
        backgroundColor: "#f9fafb",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#04AA6D",
          color: "white",
          padding: "25px 10px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ margin: 0 }}>HTML Table Borders</h1>
        <p style={{ marginTop: 5 }}>Learn to add and style borders in tables</p>
      </header>

      {/* Main Content */}
      <main style={{ padding: "30px" }}>
        <section>
          <p style={{ fontSize: "16px" }}>
            HTML tables can have borders that make data easier to read. You can
            add borders using the <code>border</code> property in CSS.
          </p>

          <div
            style={{
              backgroundColor: "#e7f3ec",
              padding: "15px",
              borderLeft: "6px solid #04AA6D",
              borderRadius: "5px",
              margin: "25px 0",
            }}
          >
            <b>Tip:</b> Always use CSS for borders — the{" "}
            <code>border</code> attribute in HTML is deprecated.
          </div>
        </section>

        {/* Example */}
        <section style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#04AA6D" }}>Example</h2>
          <p>Here’s how you can create a table with CSS borders:</p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <div style={{ flex: "1 1 350px" }}>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                rows="10"
                style={{
                  width: "100%",
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "12px",
                  fontSize: "15px",
                  fontFamily: "Consolas, monospace",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              ></textarea>
              <button
                onClick={runCode}
                style={{
                  backgroundColor: "#04AA6D",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  color: "white",
                  marginTop: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#059862")}
                onMouseOut={(e) => (e.target.style.background = "#04AA6D")}
              >
                ▶ Run Code
              </button>
            </div>

            <div
              style={{
                flex: "1 1 350px",
                backgroundColor: "white",
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              dangerouslySetInnerHTML={{ __html: output }}
            ></div>
          </div>
        </section>

        {/* 8 Practice Questions */}
        <section style={{ marginTop: "60px" }}>
          <h2 style={{ color: "#04AA6D" }}>Practice Section 🧩</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            {questions.map((q) => (
              <div
                key={q.id}
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0px)")
                }
              >
                <h3>{q.title}</h3>
                <p>{q.desc}</p>
                <img
                  src={q.img}
                  alt={q.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginTop: "10px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section style={{ marginTop: "60px" }}>
          <h2 style={{ color: "#04AA6D" }}>Summary</h2>
          <ul style={{ lineHeight: "1.8" }}>
            <li>Use CSS instead of HTML for border styling.</li>
            <li>
              <code>border-collapse</code> makes your tables neat and compact.
            </li>
            <li>
              Experiment with <code>border-style</code> like{" "}
              <b>dotted</b>, <b>dashed</b>, or <b>double</b>.
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#04AA6D",
          color: "white",
          textAlign: "center",
          padding: "15px 0",
          marginTop: "50px",
          fontSize: "14px",
        }}
      >
    
      </footer>
    </div>
  );
}
