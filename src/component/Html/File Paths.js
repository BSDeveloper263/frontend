import React, { useState } from "react";

export default function HtmlFilePaths() {
  const [code, setCode] = useState(`
<h2>Image Example</h2>
<img src="images/picture.jpg" width="200">
<p>Example of a relative file path.</p>
  `);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    const blob = new Blob([code], { type: "text/html" });
    iframe.src = URL.createObjectURL(blob);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        padding: "20px",
      }}
    >
      {/* TITLE */}
      <h1 style={{ color: "#04AA6D" }}>HTML File Paths</h1>
      <p>
        HTML file paths browser ko batate hain ki images, videos, CSS, JavaScript
        ya kisi bhi file ko website ke andar kahan se load karna hai.
      </p>
      <p>
        File paths do types ke hote hain: <b>Absolute</b> aur <b>Relative</b>.
      </p>

      {/* PATH TYPES */}
      <h2>Absolute File Paths</h2>
      <p>Absolute path poora URL hota hai:</p>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
{`<img src="https://www.example.com/images/photo.jpg">`}
      </pre>

      <h2>Relative File Paths</h2>
      <p>
        Relative path website ke folder structure ke hisab se file locate karta
        hai.
      </p>

      {/* EXAMPLES TABLE */}
      <h2>Common Relative Paths</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
        }}
      >
        <thead>
          <tr style={{ background: "#04AA6D", color: "white" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Path
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              images/pic.jpg
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Image is inside the images folder (same directory)
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              /images/pic.jpg
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              From website root folder
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              ../pic.jpg
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Go back one folder
            </td>
          </tr>

          <tr>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              ../../images/pic.jpg
            </td>
            <td style={{ border: "1px solid #ddd", padding: "10px" }}>
              Go back two folders, then open images folder
            </td>
          </tr>
        </tbody>
      </table>

      {/* File Tree Example */}
      <h2>Folder Structure Example</h2>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "15px",
          borderRadius: "6px",
        }}
      >
{`
my-website/
│
├── index.html
├── about.html
├── images/
│   ├── logo.png
│   └── banner.jpg
└── css/
    └── style.css
`}
      </pre>

      <p>
        Is example me agar aap <b>index.html</b> se image use karna chahte ho:
      </p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
{`<img src="images/logo.png">`}
      </pre>

      <p>
        Aur agar <b>css/style.css</b> me image call karna hai, toh 1 folder
        peeche jana padega:
      </p>

      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
{`background-image: url("../images/banner.jpg");`}
      </pre>

      {/* TRY IT YOURSELF */}
      <h2 style={{ marginTop: "40px" }}>Try It Yourself</h2>
      <p>Yaha apna HTML code likho aur output dekho:</p>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "160px",
          borderRadius: "6px",
          padding: "10px",
          border: "1px solid #ccc",
          fontFamily: "monospace",
        }}
      ></textarea>

      <button
        onClick={runCode}
        style={{
          background: "#04AA6D",
          border: "none",
          padding: "10px 18px",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
          marginTop: "10px",
          fontSize: "16px",
        }}
      >
        Run Code
      </button>

      <div
        style={{
          marginTop: "20px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          height: "230px",
          overflow: "hidden",
        }}
      >
        <iframe
          id="outputFrame"
          title="Output"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        ></iframe>
      </div>

      {/* Extra Info */}
      <h2 style={{ marginTop: "40px" }}>Why File Paths Matter?</h2>
      <ul>
        <li>Website me images, CSS, JS correct load hote hain</li>
        <li>Folder structure maintain hota hai</li>
        <li>Large projects me files organize karna easy hota hai</li>
        <li>SEO aur clean coding ke liye important</li>
      </ul>
    </div>
  );
}
