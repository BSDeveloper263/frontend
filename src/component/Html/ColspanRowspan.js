import React, { useState } from "react";

export default function HtmlTableColspanRowspan() {
  const [code, setCode] = useState(`<table border="1">
  <tr>
    <th>Name</th>
    <th colspan="2">Contact</th>
  </tr>
  <tr>
    <td>Bhavani</td>
    <td>1234567890</td>
    <td>bhavani@example.com</td>
  </tr>
</table>`);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const doc = iframe.contentWindow.document;
    doc.open();
    doc.write(code);
    doc.close();
  };

  const questions = [
    {
      id: 1,
      title: "Colspan Example",
      
      img: "https://user-images.githubusercontent.com/7081782/47094289-3b975400-d22b-11e8-9d89-bbcc767d94bb.png",
    },
    {
      id: 2,
      title: "Rowspan Example",
   
      img: "https://i.sstatic.net/RImsa.png",
    },
    {
      id: 3,
      title: "Combine Colspan and Rowspan",
     
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6h50WzG256bsSY8niZsrI-HSye9tFH6Jbrg&s",
    },
    {
      id: 4,
      title: "Header Spanning",
      
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU0RSdGHMaTc9Yg_9p4kXJbgGO32TpR-MAA&s",
    },
    {
      id: 5,
      title: "Custom Table Example",
   
      img: "https://i.sstatic.net/p3Kv5.png",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "#04AA6D",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontSize: "28px",
          letterSpacing: "1px",
        }}
      >
        HTML Table Colspan & Rowspan
      </header>

      <section style={{ padding: "20px 40px" }}>
        <p style={{ fontSize: "16px" }}>
          <b>Colspan</b> attribute kisi cell ko horizontally merge karta hai,
          jabki <b>Rowspan</b> attribute vertically cells ko merge karta hai.
        </p>

        {/* Colspan Example */}
        <h2 style={{ color: "#04AA6D", marginTop: "30px" }}>
          1. Colspan Example
        </h2>
        <table border="1" style={{ marginBottom: "20px" }}>
          <tr>
            <th>Name</th>
            <th colSpan="2">Contact Info</th>
          </tr>
          <tr>
            <td>Ravi</td>
            <td>1234567890</td>
            <td>ravi@example.com</td>
          </tr>
        </table>
        <img
          
          style={{
            display: "block",
            margin: "10px auto 30px",
            maxWidth: "80%",
            borderRadius: "8px",
          }}
        />

        {/* Rowspan Example */}
        <h2 style={{ color: "#04AA6D" }}>2. Rowspan Example</h2>
        <table border="1" style={{ marginBottom: "20px" }}>
          <tr>
            <th>Department</th>
            <th>Employee</th>
          </tr>
          <tr>
            <td rowSpan="2">Sales</td>
            <td>Bhavani</td>
          </tr>
          <tr>
            <td>Thakur</td>
          </tr>
        </table>
        <img
          
          style={{
            display: "block",
            margin: "10px auto 30px",
            maxWidth: "80%",
            borderRadius: "8px",
          }}
        />

        {/* Try it Yourself Editor */}
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "20px",
            borderRadius: "10px",
            borderLeft: "5px solid orange",
            marginTop: "30px",
          }}
        >
          <h2 style={{ color: "#04AA6D" }}>🧠 Try it Yourself</h2>
          <p style={{ fontSize: "15px" }}>
            Code likho aur <b>"Run"</b> dabao output dekhne ke liye 👇
          </p>
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

        {/* PRACTICE QUESTIONS in CARDS */}
        <h2 style={{ color: "#04AA6D", marginTop: "40px" }}>
          🏆 Practice Questions (with Images)
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {questions.map((q) => (
            <div
              key={q.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "15px",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={{ color: "#04AA6D" }}>{q.title}</h3>
              <p>{q.desc}</p>
              <img
                src={q.img}
                alt={q.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginTop: "10px",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
