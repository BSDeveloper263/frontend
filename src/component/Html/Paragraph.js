import React, { useState } from "react";

export default function HtmlParagraph() {
  const [code, setCode] = useState(`<p>This is a paragraph.</p>
<p>HTML paragraphs are used to write text on web pages.</p>`);
  const [output, setOutput] = useState("");
  const runCode = () => setOutput(code);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>HTML Paragraphs</h1>

      <p style={styles.para}>
        The <b>&lt;p&gt;</b> tag in HTML defines a <b>paragraph</b>.  
        A paragraph always starts on a new line and browsers automatically add
        space before and after each paragraph to make text readable.
      </p>

      <div style={styles.section}>
        <h2 style={styles.subheading}>💡 Why We Use Paragraphs?</h2>
        <ul style={styles.list}>
          <li>To break long text into readable blocks.</li>
          <li>To organize content properly on a web page.</li>
          <li>To improve structure and readability.</li>
          <li>For better user experience and SEO optimization.</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Basic Example</h2>
        <pre style={styles.codeBox}>{`<p>This is my first paragraph.</p>
<p>This is my second paragraph.</p>`}</pre>

        <p style={styles.para}>
          The browser automatically adds space between the two paragraphs.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🔹 Line Break vs Paragraph</h2>
        <p style={styles.para}>
          The <b>&lt;br&gt;</b> tag creates a line break inside the same paragraph,  
          while the <b>&lt;p&gt;</b> tag starts a completely new paragraph.
        </p>

        <pre style={styles.codeBox}>{`<p>This is a paragraph<br>This is a line break in same paragraph.</p>`}</pre>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>🎨 Styling Paragraphs with CSS</h2>
        <p style={styles.para}>
          You can use the <b>style</b> attribute to make paragraphs colorful or bigger:
        </p>

        <pre style={styles.codeBox}>{`<p style="color:green;">This is a green paragraph.</p>
<p style="font-size:20px;">This is a large paragraph.</p>`}</pre>
      </div>

      {/* Live Try It Yourself Section */}
      <div style={styles.exampleBox}>
        <h3 style={styles.subheading}>💻 Try it Yourself</h3>
        <p style={styles.para}>
          Type your own HTML paragraph code below and click <b>Run</b> to see the output.
        </p>

        <textarea
          style={styles.textarea}
          rows={6}
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

      {/* Practice Section */}
      <div style={styles.taskBox}>
        <h2 style={styles.subheading}>🧠 Practice Tasks (Assignments)</h2>
        <ol style={styles.taskList}>
          <li>
            Create a paragraph that says:  
            <code>"HTML is the structure of every web page."</code>
          </li>
          <li>
            Write three different paragraphs introducing yourself, your hobbies, and your goals.
          </li>
          <li>
            Add a paragraph with <b>inline style</b> to make it blue and center-aligned.
          </li>
          <li>
            Create two paragraphs and use the <b>&lt;br&gt;</b> tag in between lines of one paragraph.
          </li>
          <li>
            Try to make one paragraph bold and another italic using HTML formatting tags inside paragraphs.
          </li>
          <li>
            Experiment in the “Try It Yourself” editor above and change text colors or font sizes.
          </li>
          <li>
            Create a paragraph that includes a quote using the <b>&lt;q&gt;</b> tag.
          </li>
          <li>
            Write a paragraph with a <b>title attribute</b> that shows tooltip text when hovered.
          </li>
          <li>
            Make a paragraph where one word links to <code>w3schools.com</code> using the <b>&lt;a&gt;</b> tag.
          </li>
          <li>
            Write a paragraph with different <b>inline CSS styles</b> — background color, padding, and border.
          </li>
        </ol>
      </div>

      <div style={styles.noteBox}>
        <b>Note:</b> You can style paragraphs globally using CSS classes or inline styles.  
        Always close your <b>&lt;p&gt;</b> tag properly for valid HTML.
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
