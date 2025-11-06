import React, { useState } from "react";

export default function HtmlLinks() {
  const [code, setCode] = useState(`<a href="https://www.w3schools.com">Visit W3Schools</a>`);
  const [output, setOutput] = useState("");
  const runCode = () => setOutput(code);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>HTML Links</h1>

      <p style={styles.para}>
        HTML <b>links</b> are defined with the <b>&lt;a&gt;</b> (anchor) tag.  
        Links are one of the most important parts of a web page because they connect one page to another, 
        allowing users to **navigate between different documents or websites** easily.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Why Links are Important</h2>
        <ul style={styles.list}>
          <li>They help users move from one page to another on the web.</li>
          <li>They make websites **interactive and navigable**.</li>
          <li>They are essential for **SEO** because search engines follow links to discover new pages.</li>
          <li>They can link to **websites, files, images, emails, and internal sections** of a page.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Basic Link Example</h2>
        <pre style={styles.codeBox}>{`<a href="https://www.google.com">Visit Google</a>`}</pre>
        <p style={styles.para}>
          The <b>href</b> attribute specifies the **destination URL** of the link.  
          Clicking the text will take you to that page.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Open Link in New Tab</h2>
        <pre style={styles.codeBox}>{`<a href="https://www.example.com" target="_blank">Open in New Tab</a>`}</pre>
        <p style={styles.para}>
          The <b>target="_blank"</b> attribute opens the linked document in a **new browser tab**.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Image as a Link</h2>
        <pre style={styles.codeBox}>{`<a href="https://www.w3schools.com">
  <img src="https://www.w3schools.com/images/w3schools_green.jpg" 
       alt="W3Schools" width="150">
</a>`}</pre>
        <p style={styles.para}>
          You can use an <b>image inside an anchor tag</b> to make it clickable like a button or logo link.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Email and Phone Links</h2>
        <pre style={styles.codeBox}>{`<a href="mailto:info@example.com">Send Email</a>
<a href="tel:+919876543210">Call Us</a>`}</pre>
        <p style={styles.para}>
          The <b>mailto:</b> and <b>tel:</b> attributes are used to create **email** and **telephone** links.
        </p>
      </div>

      {/* Try it Yourself */}
      <div style={styles.exampleBox}>
        <h3 style={styles.subheading}>💻 Try it Yourself</h3>
        <p style={styles.para}>
          Type your own HTML link code below and click <b>Run</b> to test it!
        </p>

        <textarea
          style={styles.textarea}
          rows={5}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>

        <button style={styles.button} onClick={runCode}>
          ▶ Run Code
        </button>

        <div style={styles.outputBox}>
          <h4>Output:</h4>
          <div dangerouslySetInnerHTML={{ __html: output }}></div>
        </div>
      </div>

      {/* Tasks Section */}
      <div style={styles.taskBox}>
        <h2 style={styles.subheading}>🧠 Practice Tasks (Assignments)</h2>
        <ol style={styles.taskList}>
          <li>Create a link that redirects to <b>https://www.google.com</b> with the text “Search on Google”.</li>
          <li>Create a link that opens <b>https://www.w3schools.com</b> in a new tab.</li>
          <li>Make an image clickable that opens your favorite website.</li>
          <li>Create an email link that opens Gmail to send a message to you.</li>
          <li>Add a phone link that calls your number when clicked.</li>
          <li>Create an internal link that jumps to a section within the same page (use <b>id</b> attribute).</li>
          <li>Use CSS inline style to make a link red and remove the underline.</li>
          <li>Create a navigation bar with 3 links: Home, About, Contact.</li>
          <li>Create a paragraph that includes a clickable word linking to another page.</li>
          <li>Use an image as a button that redirects to another website.</li>
        </ol>
      </div>

      <div style={styles.noteBox}>
        <b>Note:</b> Always include the <b>https://</b> or <b>http://</b> prefix in your links to avoid broken URLs.  
        Use descriptive link text to make your site more accessible and SEO-friendly.
      </div>
    </div>
  );
}

// 🌈 Inline Styles
const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "40px",
    backgroundColor: "#f9f9f9",
    color: "#333",
    lineHeight: 1.7,
  },
  heading: {
    fontSize: "40px",
    color: "#007acc",
    marginBottom: "15px",
  },
  para: {
    fontSize: "18px",
  },
  section: {
    marginTop: "30px",
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  subheading: {
    color: "#333",
    marginBottom: "10px",
  },
  list: {
    marginLeft: "20px",
    fontSize: "17px",
  },
  codeBox: {
    background: "#272822",
    color: "#fff",
    padding: "12px",
    borderRadius: "6px",
    marginTop: "10px",
    fontSize: "15px",
    overflowX: "auto",
  },
  exampleBox: {
    marginTop: "40px",
    background: "#e8f4fa",
    padding: "25px",
    borderRadius: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    fontFamily: "monospace",
  },
  button: {
    background: "#007acc",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
  },
  outputBox: {
    background: "#fff",
    marginTop: "15px",
    padding: "10px",
    borderRadius: "6px",
    minHeight: "100px",
    border: "1px solid #ccc",
  },
  taskBox: {
    background: "#fff",
    padding: "25px",
    marginTop: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  taskList: {
    fontSize: "17px",
    lineHeight: "1.8",
  },
  noteBox: {
    background: "#fff3cd",
    padding: "15px",
    borderLeft: "5px solid #ffcc00",
    marginTop: "30px",
    borderRadius: "6px",
  },
};
