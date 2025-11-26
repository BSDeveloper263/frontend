import React, { useState } from "react";

export default function FormAttributes() {
  const [code, setCode] = useState(`<form action="/submit" method="post">
  <label>Name:</label>
  <input type="text"><br><br>

  <label>Email:</label>
  <input type="email"><br><br>

  <label>Message:</label>
  <textarea></textarea><br><br>

  <input type="submit" value="Submit">
</form>`);

  return (
    <>
      {/* W3Schools CSS */}
      <style>{`
        body { background: #f4f4f4; }
        .header {
          background: #04AA6D;
          color: white;
          padding: 18px;
          text-align: center;
          font-size: 28px;
          font-weight: bold;
        }
        .container {
          width: 85%;
          background: white;
          margin: auto;
          padding: 25px;
          box-shadow: 0px 0px 8px #ccc;
          border-radius: 6px;
          margin-top: 20px;
          margin-bottom: 40px;
        }
        h1, h2 {
          color: #04AA6D;
          margin-top: 30px;
        }
        p { font-size: 17px; line-height: 1.6; }
        .code-box {
          background: #eee;
          padding: 15px;
          border-left: 5px solid #04AA6D;
          font-family: monospace;
          white-space: pre-wrap;
          margin-top: 15px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          border: 1px solid #ccc;
          padding: 10px;
        }
        th {
          background: #04AA6D;
          color: white;
        }
        .editor-box {
          margin-top: 20px;
          padding: 20px;
          background: #fff;
          box-shadow: 0 0 10px #ccc;
          border-radius: 6px;
        }
        textarea.editor {
          width: 100%;
          height: 200px;
          padding: 15px;
          font-family: monospace;
          border-radius: 6px;
          border: 1px solid #ccc;
        }
        .try-btn {
          background: #04AA6D;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          border-radius: 5px;
          font-size: 16px;
        }
        iframe {
          width: 100%;
          height: 250px;
          margin-top: 20px;
          border: 1px solid #ccc;
        }
        .note {
          background: #ffffcc;
          border-left: 5px solid #ffeb3b;
          padding: 15px;
          margin-top: 20px;
        }
      `}</style>

      <div className="header">HTML Form Attributes - W3Schools Style</div>

      <div className="container">

        <h1>HTML Form Attributes</h1>
        <p>
          Form attributes HTML form ke behaviour ko control karte hain.
          Attributes batate hain ki form data kaise, kahan, aur kis format me send hoga.
        </p>

        <h2>1) action Attribute</h2>
        <p>
          <b>action</b> batata hai ki form submit hone par data kis URL par bheja jayega.
        </p>

        <div className="code-box">{`<form action="/submit">`}</div>

        <h2>2) method Attribute</h2>
        <p>Form data GET ya POST method se bheja jata hai.</p>

        <div className="code-box">{`<form method="post">`}</div>

        <h2>3) target Attribute</h2>
        <p>Response kis window me open hoga:</p>
        <ul>
          <li>_self (default)</li>
          <li>_blank</li>
          <li>_top</li>
          <li>_parent</li>
        </ul>

        <div className="code-box">{`<form target="_blank">`}</div>

        <h2>4) autocomplete Attribute</h2>
        <p>Previous values autofill honi chahiye ya nahi.</p>

        <div className="code-box">{`<form autocomplete="on">`}</div>

        <h2>5) enctype Attribute (File Upload)</h2>
        <p>Image / File upload ke liye zaroori.</p>

        <div className="code-box">{`<form enctype="multipart/form-data">`}</div>

        <h2>6) novalidate Attribute</h2>
        <p>Browser validation disable kar deta hai.</p>

        <div className="code-box">{`<form novalidate>`}</div>

        <h2>7) name Attribute</h2>
        <p>Form ka unique name.</p>

        <div className="code-box">{`<form name="myForm">`}</div>

        <h2>All Attributes Table</h2>

        <table>
          <tbody>
            <tr><th>Attribute</th><th>Description</th></tr>
            <tr><td>action</td><td>Form data kaha submit hoga</td></tr>
            <tr><td>method</td><td>GET / POST</td></tr>
            <tr><td>target</td><td>Response kis window me open hoga</td></tr>
            <tr><td>autocomplete</td><td>Autofill on/off</td></tr>
            <tr><td>enctype</td><td>File upload data type</td></tr>
            <tr><td>novalidate</td><td>Validation disable</td></tr>
            <tr><td>name</td><td>Form ka naam</td></tr>
          </tbody>
        </table>

        <div className="note">
          <b>Note:</b> File upload form ke liye <b>method="post"</b>  
          aur <b>enctype="multipart/form-data"</b> zaroori hota hai.
        </div>

        <h2>Try It Yourself</h2>

        <div className="editor-box">
          <textarea
            className="editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button
            className="try-btn"
            onClick={() => {
              const iframe = document.getElementById("output");
              iframe.srcdoc = code;
            }}
          >
            Run Code
          </button>

          <iframe id="output"></iframe>
        </div>
      </div>
    </>
  );
}
