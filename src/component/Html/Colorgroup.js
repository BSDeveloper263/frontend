import React, { useState } from "react";

export default function HtmlTableColgroup() {
  const [code, setCode] = useState(`<table border="1">
  <colgroup>
    <col span="2" style="background-color: #D6EEEE;">
    <col style="background-color: #f2f2f2;">
  </colgroup>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Google</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Amazon</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`);

  const practiceQuestions = [
    {
     
      img: "https://i.ytimg.com/vi/hpz34Pcu5l0/sddefault.jpg",
    },
    {
     
      img: "https://codehim.com/wp-content/uploads/2023/11/HTML-Table-Row-Color-Based-on-Value-1.png",
    },
    {
     
      img: "https://i.sstatic.net/veR5R.png",
    },
    {
     
      img: "https://i.sstatic.net/DfRhR.jpg",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
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
        HTML Table Colgroup
      </header>

      {/* Main Section */}
      <section style={{ padding: "20px 40px" }}>
        <p style={{ fontSize: "17px" }}>
          <b>&lt;colgroup&gt;</b> tag ka use table ke columns ke liye style
          define karne ke liye hota hai. Iske andar{" "}
          <b>&lt;col&gt;</b> tag likha jata hai jisse hum har column ka
          background-color, width ya border color set kar sakte hain.
        </p>

        <h2 style={{ color: "#04AA6D", marginTop: "25px" }}>
          🎨 Example: Basic Colgroup
        </h2>

        <table
          style={{
            borderCollapse: "collapse",
            width: "80%",
            marginBottom: "20px",
            border: "1px solid #ddd",
          }}
        >
          <colgroup>
            <col span="2" style={{ backgroundColor: "#D6EEEE" }} />
            <col style={{ backgroundColor: "#f2f2f2" }} />
          </colgroup>
          <thead>
            <tr>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Company
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Contact
              </th>
              <th style={{ padding: "8px", border: "1px solid #ddd" }}>
                Country
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Google
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Maria Anders
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Germany
              </td>
            </tr>
            <tr>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Amazon
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Francisco Chang
              </td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                Mexico
              </td>
            </tr>
          </tbody>
        </table>

        <img
          src="https://www.w3schools.com/html/img_colgroup.png"
          alt="Colgroup Example"
          style={{
            display: "block",
            margin: "10px auto 30px",
            maxWidth: "80%",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />

        {/* Try It Editor */}
        <div
          style={{
            backgroundColor: "#fff8e1",
            padding: "20px",
            borderRadius: "8px",
            borderLeft: "5px solid orange",
            marginBottom: "30px",
          }}
        >
          <h2 style={{ color: "#04AA6D" }}>🧩 Try It Yourself</h2>
          <p style={{ fontSize: "16px" }}>
            Niche diya gaya code likho aur “Run” dabao output dekhne ke liye 👇
          </p>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "100%",
              height: "160px",
              border: "2px solid #04AA6D",
              borderRadius: "8px",
              padding: "10px",
              fontFamily: "monospace",
              fontSize: "15px",
              background: "#fff",
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
              border: "none",
              padding: "10px 18px",
              color: "white",
              borderRadius: "6px",
              cursor: "pointer",
              marginTop: "10px",
              fontWeight: "bold",
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
              marginTop: "10px",
              background: "white",
            }}
          ></iframe>
        </div>

        {/* Practice Questions in Cards */}
        <h2 style={{ color: "#04AA6D" }}>💡 Practice Questions</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {practiceQuestions.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                padding: "15px",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <p>
                <b>Q{index + 1}:</b> {item.q}
              </p>
              <img
                src={item.img}
                alt={`Q${index + 1}`}
                style={{
                  marginTop: "10px",
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
