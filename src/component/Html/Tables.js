import React, { useState } from "react";

export default function HtmlTableFullPage() {
  const [code, setCode] = useState(`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
    <td>USA</td>
  </tr>
  <tr>
    <td>Alice</td>
    <td>22</td>
    <td>India</td>
  </tr>
</table>`);
  const [output, setOutput] = useState("");
  const [zoomImg, setZoomImg] = useState(null);

  const runCode = () => setOutput(code);

  const questionImages = [
    {
      id: 1,
      img: "https://s3-ap-southeast-1.amazonaws.com/djamblog/article-050819090154.png",
      title: "Basic 2x2 Table",
    },
    {
      id: 2,
      img: "https://www.homeandlearn.co.uk/WD/images/chapter7/basic_table.gif",
      title: "Table with Borders",
    },
    {
      id: 3,
      img: "https://programmingtrick.com/upload/1641874727.png",
      title: "Colspan and Rowspan",
    },
    {
      id: 4,
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5jkOa23aaVl5_Td-JofFaMkaFDtPDzkbXtOC8aWJiqoGRwKysKpaiwJHnBHg8eZxSXzPx_g4mA1NNyyDJM7YiwzOfCKQmc7H8xn3efM-wgLKVHk6yk2AoEpYwhoTW7Ila_MYlIXCYQ6Y/s1600/table.png",
      title: "Table with Header and Footer",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisoXwhiQX1OfOJmYwgCWVuVfGpO6Mr9O4dw&s",
      title: "Styled Table Example",
    },
    {
      id: 6,
      img: "https://i0.wp.com/www.tutorialbrain.com/wp-content/uploads/2019/05/cellspacing-and-cellpadding-in-html.png?fit=537%2C218&ssl=1",
      title: "Student Marks Table",
    },
    {
      id: 7,
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibm8FpvOuc6vkN9UcoFrdLIC9yNHywK0jxmUvTcaCvY_HrJVu6uGMtwoD3H5Jp0HQgerrSxuJHhbFsy6Ta2QD0rl_iM7C9ygqchzwfx0AB3DWHZzuDvyv_j1bJf-uFozrfaFabf8O1uks/s1600/table1.PNG",
      title: "Colorful Border Table",
    },
    {
      id: 8,
      img: "https://bootstrapthemes.co/wp-content/uploads/edd/2017/06/responsive-bootstrap-pricing-table-preview-730x350.png",
      title: "Product Price Table",
    },
    {
      id: 9,
      img: "https://webtutorialhindi.com/wp-content/uploads/2021/12/Nested-Table-Html-1.jpg",
      title: "Nested Table Design",
    },
    {
      id: 10,
      img: "https://media.cheggcdn.com/media/c96/c96ed820-f619-4b3c-b560-00f8c3d33b64/phpr19SLA.png",
      title: "Employee Details Table",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "40px",
        background: "linear-gradient(135deg,#f0f5ff,#eaf3ff)",
        minHeight: "100vh",
      }}
    >
      {/* 🔹 Main Heading */}
      <h1
        style={{
          textAlign: "center",
          color: "#007bff",
          fontSize: "2.4rem",
          fontWeight: "700",
        }}
      >
        📊 HTML Tables Tutorial
      </h1>
      <p
        style={{
          textAlign: "center",
          maxWidth: "800px",
          margin: "auto",
          color: "#444",
          fontSize: "1.1rem",
        }}
      >
        Learn how to create and style tables in HTML. Tables organize data into
        rows and columns using tags like <b>&lt;table&gt;</b>,{" "}
        <b>&lt;tr&gt;</b>, <b>&lt;th&gt;</b>, and <b>&lt;td&gt;</b>.
      </p>

      {/* 🔹 Explanation */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "25px",
          marginTop: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ color: "#007bff" }}>📘 Table Tags Explained</h2>
        <ul style={{ lineHeight: "1.8", color: "#333", fontSize: "1rem" }}>
          <li>
            <b>&lt;table&gt;</b>: Defines the entire table structure.
          </li>
          <li>
            <b>&lt;tr&gt;</b>: Defines each row in the table.
          </li>
          <li>
            <b>&lt;th&gt;</b>: Defines header cells (bold & centered).
          </li>
          <li>
            <b>&lt;td&gt;</b>: Defines data cells.
          </li>
          <li>
            <b>border</b>: Adds a visible border to the table.
          </li>
          <li>
            <b>colspan</b> / <b>rowspan</b>: Merge columns or rows.
          </li>
        </ul>
      </div>

      {/* 🔹 Live Editor */}
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "25px",
          marginTop: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ color: "#28a745" }}>✏️ Try It Yourself</h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={10}
          style={{
            width: "100%",
            background: "#1e1e1e",
            color: "#0f0",
            fontFamily: "monospace",
            borderRadius: "8px",
            padding: "10px",
            fontSize: "15px",
            border: "none",
          }}
        />
        <button
          onClick={runCode}
          style={{
            marginTop: "15px",
            padding: "10px 25px",
            background: "linear-gradient(90deg, #007bff, #00bfff)",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          ▶ Run Code
        </button>
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            background: "#fff",
            padding: "20px",
            borderRadius: "8px",
            minHeight: "180px",
          }}
          dangerouslySetInnerHTML={{ __html: output }}
        />
      </div>

      {/* 🔹 Practice Section */}
      <h2
        style={{
          textAlign: "center",
          color: "#ff4500",
          marginTop: "50px",
          fontSize: "1.8rem",
        }}
      >
        🧩 Practice Questions (10 Table Challenges)
      </h2>
      <p style={{ textAlign: "center", color: "#555" }}>
        Click on any image to zoom and recreate it in the editor above.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {questionImages.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "12px",
              textAlign: "center",
              transition: "0.3s",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: "200px",
                height: "140px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                cursor: "pointer",
                objectFit: "contain",
                transition: "transform 0.3s",
              }}
              onClick={() => setZoomImg(item.img)}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
            <h4 style={{ marginTop: "10px", color: "#333" }}>{item.title}</h4>
          </div>
        ))}
      </div>

      {/* 🔹 Modal for Image Zoom */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={zoomImg}
              alt="Zoomed"
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                transition: "0.3s",
              }}
            />
            <button
              onClick={() => setZoomImg(null)}
              style={{
                position: "absolute",
                top: "-35px",
                right: "-35px",
                background: "#ff4444",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
