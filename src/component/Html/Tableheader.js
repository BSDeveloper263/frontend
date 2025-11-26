import React, { useState } from "react";

export default function HTMLTableHeader() {
  const [code, setCode] = useState(`<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ravi</td>
      <td>25</td>
      <td>India</td>
    </tr>
    <tr>
      <td>John</td>
      <td>30</td>
      <td>USA</td>
    </tr>
  </tbody>
</table>`);

  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f8fafc",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1 style={{ color: "#1d3557", fontSize: "32px" }}>
        HTML Table Header (&lt;thead&gt;) Tag
      </h1>

      <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
        The <b>&lt;thead&gt;</b> element is used to group the header content in
        an HTML table. It helps separate the header rows from the body of the
        table for styling and accessibility.
      </p>

      <h2 style={{ color: "#2a9d8f" }}>Why use &lt;thead&gt;?</h2>
      <ul style={{ fontSize: "16px", lineHeight: "1.8" }}>
        <li>Organizes the header section of a table.</li>
        <li>Improves readability and structure.</li>
        <li>
          Makes it easier to apply styles only to the header part (like bold
          text or background color).
        </li>
        <li>Useful for responsive and accessible tables.</li>
      </ul>

      <h2 style={{ color: "#e76f51" }}>Syntax:</h2>
      <div
        style={{
          background: "#edf2f4",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap" }}>
{`<table>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>`}
        </pre>
      </div>

      <h2 style={{ color: "#457b9d" }}>Example:</h2>
      <div
        style={{
          background: "#fff",
          borderRadius: "10px",
          padding: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <pre style={{ whiteSpace: "pre-wrap" }}>{code}</pre>
      </div>

      <h2 style={{ color: "#2b2d42", marginTop: "30px" }}>💻 Try it Yourself</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          padding: "10px",
          fontSize: "15px",
        }}
      ></textarea>
      <button
        onClick={runCode}
        style={{
          marginTop: "10px",
          padding: "10px 25px",
          background: "#1d3557",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        ▶ Run Code
      </button>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          marginTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h3>Output:</h3>
        <iframe
          title="output"
          style={{
            width: "100%",
            height: "220px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            background: "#fff",
          }}
          srcDoc={output}
        ></iframe>
      </div>

      <h2 style={{ marginTop: "40px", color: "#e63946" }}>🧠 Practice Questions</h2>
      <ol style={{ lineHeight: "1.8", fontSize: "16px" }}>
        <li>Create a table with a header that contains Name, Age, and City.</li>
        <li>Use &lt;thead&gt; for header and &lt;tbody&gt; for data rows.</li>
        <li>
          Add background color only to the header section using the style
          attribute.
        </li>
        <li>Make one table with 4 columns (Product, Price, Quantity, Total).</li>
        <li>
          Use <b>&lt;tfoot&gt;</b> to add a total summary row at the end of the
          table.
        </li>
        <li>
          Create a table with thead, tbody, and tfoot tags to separate each
          section properly.
        </li>
      </ol>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <img
          src="https://dotnettutorials.net/wp-content/uploads/2021/11/word-image-552.png"
          alt="HTML Table Header Example"
          style={{
            maxWidth: "80%",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      </div>
    </div>
  );
}
