import React, { useState } from "react";

export default function Element() {
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <title>HTML Elements Example</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph of text that introduces HTML elements.</p>
    <a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a>
    <br/><br/>
    <img src="https://www.w3schools.com/images/w3schools_green.jpg" width="200" alt="W3Schools"/>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
    </ul>
  </body>
</html>`);

  const [output, setOutput] = useState("");

  const runCode = () => setOutput(code);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>HTML Elements</h1>
      <p style={styles.intro}>
        HTML elements are the **building blocks** of all web pages. An element
        usually consists of an **opening tag**, **content**, and a **closing tag**.
        Example: <code>&lt;p&gt;This is a paragraph&lt;/p&gt;</code>
      </p>

      <div style={styles.exampleBox}>
        <h2 style={styles.subHeading}>📘 Basic Structure of an HTML Element</h2>
        <pre style={styles.codeBox}>
{`<tagname>Content goes here...</tagname>`}
        </pre>
        <p style={styles.note}>
          The browser reads these tags and displays the content accordingly.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subHeading}>🧩 Common HTML Elements Explained</h2>
        <ul style={styles.list}>
          <li>
            <b>&lt;h1&gt; to &lt;h6&gt;</b> — Define HTML headings.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;h1&gt;Main Heading&lt;/h1&gt;
                <br />
                &lt;h2&gt;Sub Heading&lt;/h2&gt;
              </code>
            </div>
          </li>

          <li>
            <b>&lt;p&gt;</b> — Defines a paragraph.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>&lt;p&gt;This is a simple paragraph.&lt;/p&gt;</code>
            </div>
          </li>

          <li>
            <b>&lt;a&gt;</b> — Creates a hyperlink.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;a href="https://www.google.com"&gt;Visit Google&lt;/a&gt;
              </code>
            </div>
          </li>

          <li>
            <b>&lt;img&gt;</b> — Embeds an image.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;img src="image.jpg" alt="My Image" width="200"/&gt;
              </code>
            </div>
          </li>

          <li>
            <b>&lt;div&gt;</b> and <b>&lt;span&gt;</b> — Used for grouping or styling.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;div&gt;Block Element&lt;/div&gt;
                <br />
                &lt;span&gt;Inline Element&lt;/span&gt;
              </code>
            </div>
          </li>

          <li>
            <b>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</b> — Create lists.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;ul&gt;
                <br /> &nbsp;&nbsp;&lt;li&gt;Apple&lt;/li&gt;
                <br /> &nbsp;&nbsp;&lt;li&gt;Banana&lt;/li&gt;
                <br />&lt;/ul&gt;
              </code>
            </div>
          </li>

          <li>
            <b>&lt;table&gt;</b> — Defines a table.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;table border="1"&gt;
                <br /> &nbsp;&nbsp;&lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;/tr&gt;
                <br /> &nbsp;&nbsp;&lt;tr&gt;&lt;td&gt;John&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
                <br />&lt;/table&gt;
              </code>
            </div>
          </li>

          <li>
            <b>&lt;form&gt;</b> — Used to collect user input.
            <div style={styles.demo}>
              <h3>Example:</h3>
              <code>
                &lt;form&gt;
                <br /> &nbsp;&nbsp;&lt;input type="text" placeholder="Name"/&gt;
                <br /> &nbsp;&nbsp;&lt;button&gt;Submit&lt;/button&gt;
                <br />&lt;/form&gt;
              </code>
            </div>
          </li>
        </ul>
      </div>

      <div style={styles.editor}>
        <h2 style={styles.subHeading}>💻 Try It Yourself</h2>
        <textarea
          style={styles.textarea}
          rows="10"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <button style={styles.button} onClick={runCode}>
          ▶ Run Code
        </button>
        <div style={styles.outputBox}>
          <h3>Output:</h3>
          <iframe title="output" style={styles.iframe} srcDoc={output}></iframe>
        </div>
      </div>
    </div>
  );
}

// 🎨 Inline styles
const styles = {
  container: {
    padding: "30px",
    fontFamily: "Poppins, sans-serif",
    background: "linear-gradient(to right, #f8fdff, #e6f3ff)",
    color: "#222",
    lineHeight: "1.6",
  },
  title: {
    textAlign: "center",
    color: "#0073e6",
    fontSize: "2.8rem",
    marginBottom: "10px",
  },
  intro: {
    textAlign: "center",
    fontSize: "18px",
    color: "#333",
    marginBottom: "30px",
  },
  exampleBox: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "25px",
  },
  codeBox: {
    background: "#f0f0f0",
    padding: "10px",
    borderRadius: "6px",
    fontFamily: "monospace",
    fontSize: "15px",
  },
  note: {
    marginTop: "10px",
    fontStyle: "italic",
  },
  section: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "40px",
  },
  subHeading: {
    color: "#0073e6",
    fontSize: "1.6rem",
    marginBottom: "10px",
  },
  list: {
    fontSize: "16px",
  },
  demo: {
    background: "#f9f9f9",
    borderLeft: "4px solid #0073e6",
    padding: "10px",
    marginTop: "8px",
    marginBottom: "15px",
    borderRadius: "4px",
    fontFamily: "monospace",
  },
  editor: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "monospace",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "10px",
  },
  button: {
    backgroundColor: "#0073e6",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
  outputBox: {
    marginTop: "20px",
  },
  iframe: {
    width: "100%",
    height: "280px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "white",
  },
};
