import React, { useState } from "react";

export default function HtmlTableStyling() {
  const [code, setCode] = useState(`<table style="width:100%">
  <tr style="background-color:#04AA6D; color:white;">
    <th>Name</th>
    <th>Age</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Bhavani</td>
    <td>21</td>
    <td>India</td>
  </tr>
  <tr>
    <td>Ravi</td>
    <td>25</td>
    <td>USA</td>
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
      title: "Basic Table Styling",

      img: "https://www.jquery-az.com/wp-content/uploads/2015/12/1.3-HTML-table-CSS.png",
    },
    {
      id: 2,
      title: "Striped Rows",
      
      img: "https://essentialwebapps.com/wp-content/uploads/2022/01/responsive-accessible-data-table-1-1024x683.jpg",
    },
    {
      id: 3,
      title: "Hover Effect",
      
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQoh6xDLtId1kQkmT13ChKXlsvQpddfmJFtQ&s",
    },
    {
      id: 4,
      title: "Border Collapse",
      
      img: "https://codrops-1f606.kxcdn.com/codrops/wp-content/uploads/2015/02/bordercollapse.png?x47047",
    },
    {
      id: 5,
      title: "Responsive Table",
     
      img: "https://www.raviwebcodes.com/wp-content/uploads/2025/08/responsive-table-tutorial-thumbnail-1024x576.jpg",
    },
    {
      id: 6,
      title: "Colored Header",
     
      img: "https://images01.nicepagecdn.com/page/85/59/html-template-preview-85592.jpg",
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
        HTML Table Styling
      </header>

      <section style={{ padding: "20px 40px" }}>
        <p style={{ fontSize: "16px" }}>
          HTML tables ko <b>CSS</b> se style karne ke liye hum{" "}
          <code>border</code>, <code>padding</code>, <code>text-align</code>,
          aur <code>background-color</code> jaise properties use karte hain.
        </p>

        {/* Example 1 - Basic Styling */}
        <h2 style={{ color: "#04AA6D", marginTop: "30px" }}>
          1. Basic Table Styling
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "30px",
          }}
        >
          <tr style={{ backgroundColor: "#04AA6D", color: "white" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Age</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Country
            </th>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>Ravi</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>23</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>India</td>
          </tr>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Bhavani
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>21</td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              USA
            </td>
          </tr>
        </table>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJonkTvxZzfUaiCH7hD8rDfsJyg2tKlNJtNg&s"
          alt="Table Styling Example"
          style={{
            display: "block",
            margin: "10px auto 30px",
            maxWidth: "80%",
            borderRadius: "8px",
          }}
        />

        {/* Try it Yourself */}
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

        {/* Practice Question Cards */}
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
