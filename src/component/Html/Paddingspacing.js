import React, { useState } from "react";

export default function HtmlTablePaddingSpacing() {
  const [code, setCode] = useState(`<table border="1" cellspacing="10" cellpadding="10">
  <tr>
    <th>Item</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>Shirt</td>
    <td>$20</td>
  </tr>
  <tr>
    <td>Jeans</td>
    <td>$35</td>
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
      title: "Padding Example",
      desc: `Write a table using cellpadding="10" like this:`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqYZG4SMylMAcYAG_rcNSOR5iZfYMNPY_fGA&s",
    },
    {
      id: 2,
      title: "Spacing Example",
      desc: `Create a table with cellspacing="15" like this:`,
      img: "https://dotnettutorials.net/wp-content/uploads/2021/11/word-image-560.png",
    },
    {
      id: 3,
      title: "Combine Padding & Spacing",
      desc: `Write code to combine padding and spacing like this:`,
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20240116164500/cellspacing.png",
    },
    
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        minHeight: "50vh",
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
        HTML Table Padding & Spacing
      </header>

      <section style={{ padding: "20px 40px" }}>
        <p style={{ fontSize: "16px" }}>
          <b>Padding</b> table cells ke andar ka space hota hai, jabki{" "}
          <b>Spacing</b> table cells ke beech ka gap hota hai.
        </p>

        {/* Padding Example */}
        <h2 style={{ color: "#04AA6D", marginTop: "30px" }}>
          1. Padding Example
        </h2>
        <table border="1" cellPadding="15" style={{ marginBottom: "20px" }}>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Bhavani</td>
            <td>Thakur</td>
          </tr>
        </table>
        <img
          src="https://www.w3schools.com/html/img_tablepadding.png"
          alt="Padding Example"
          style={{
            display: "block",
            margin: "10px auto 30px",
            maxWidth: "20%",
            borderRadius: "8px",
          }}
        />

        {/* Spacing Example */}
        <h2 style={{ color: "#04AA6D" }}>2. Spacing Example</h2>
        <table border="1" cellSpacing="15" style={{ marginBottom: "20px" }}>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
          <tr>
            <td>Ravi</td>
            <td>Verma</td>
          </tr>
        </table>
        <img
          src="https://www.w3schools.com/html/img_tablespacing.png"
          alt="Spacing Example"
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
