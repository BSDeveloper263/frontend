import React, { useState } from "react";

export default function HtmlAttributes() {
  const [code, setCode] = useState(`<img src="image.jpg" alt="Beautiful Image" width="300" height="200">`);
  const [output, setOutput] = useState("");
  const [taskOutput, setTaskOutput] = useState("");
  const [quizAnswer1, setQuizAnswer1] = useState("");
  const [quizAnswer2, setQuizAnswer2] = useState("");
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [taskCode, setTaskCode] = useState("");

  const runCode = () => setOutput(code);
  const runTask = () => setTaskOutput(taskCode);

  const checkAnswer1 = () => {
    if (quizAnswer1.toLowerCase().includes("href")) {
      setResult1("✅ Correct! 'href' defines the link destination.");
    } else setResult1("❌ Incorrect! Hint: It's used inside <a> tag.");
  };

  const checkAnswer2 = () => {
    if (quizAnswer2.toLowerCase().includes("alt")) {
      setResult2("✅ Correct! 'alt' provides alternate text for images.");
    } else setResult2("❌ Try again! Hint: It’s used in <img> tag.");
  };

  return (
    <div style={styles.container}>
      {/* 🌟 Title */}
      <h1 style={styles.heading}>HTML Attributes</h1>
      <p style={styles.intro}>
        Attributes provide <b>extra information</b> about HTML elements. They always appear in the
        <b> start tag</b> and are written as <code>name="value"</code>.
      </p>

      {/* 📘 Common Attributes */}
      <div style={styles.section}>
        <h2 style={styles.subheading}>📘 Common HTML Attributes</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Attribute</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>href</td>
              <td style={styles.td}>Specifies the URL for a link</td>
              <td style={styles.td}>&lt;a href="https://google.com"&gt;Google&lt;/a&gt;</td>
            </tr>
            <tr>
              <td style={styles.td}>src</td>
              <td style={styles.td}>Specifies image source path</td>
              <td style={styles.td}>&lt;img src="pic.jpg"&gt;</td>
            </tr>
            <tr>
              <td style={styles.td}>alt</td>
              <td style={styles.td}>Alternate text for image</td>
              <td style={styles.td}>&lt;img src="x.jpg" alt="flower"&gt;</td>
            </tr>
            <tr>
              <td style={styles.td}>style</td>
              <td style={styles.td}>Inline CSS styling</td>
              <td style={styles.td}>&lt;p style="color:red;"&gt;Hi&lt;/p&gt;</td>
            </tr>
            <tr>
              <td style={styles.td}>title</td>
              <td style={styles.td}>Tooltip text on hover</td>
              <td style={styles.td}>&lt;p title="Tooltip"&gt;Hover me&lt;/p&gt;</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 💻 Example */}
      <div style={styles.section}>
        <h2 style={styles.subheading}>💻 Try It Yourself</h2>
        <textarea
          style={styles.textarea}
          rows={6}
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button style={styles.button} onClick={runCode}>▶ Run Code</button>
        <div style={styles.outputBox}>
          <h4>Output:</h4>
          <div dangerouslySetInnerHTML={{ __html: output }}></div>
        </div>
      </div>

      {/* 🧩 PRACTICE TASKS */}
      <div style={styles.practiceSection}>
        <h2 style={styles.subheading}>🧩 Practice Tasks</h2>
        <p>Complete each task by writing valid HTML below 👇</p>

        <div style={styles.task}>
          <h4>Task 1️⃣: Create a link that goes to “https://www.w3schools.com” with text “Visit W3Schools”.</h4>
        </div>
        <div style={styles.task}>
          <h4>Task 2️⃣: Create an image tag with “src” and “alt” attributes.</h4>
        </div>
        <div style={styles.task}>
          <h4>Task 3️⃣: Create a paragraph with red text using the “style” attribute.</h4>
        </div>

        <textarea
          style={styles.textarea}
          rows={6}
          value={taskCode}
          onChange={(e) => setTaskCode(e.target.value)}
          placeholder="Write your HTML code here..."
        />
        <button style={styles.button} onClick={runTask}>▶ Run My Task Code</button>

        <div style={styles.outputBox}>
          <h4>Output:</h4>
          <div dangerouslySetInnerHTML={{ __html: taskOutput }}></div>
        </div>
      </div>

      {/* 🧠 QUIZ SECTION */}
      <div style={styles.quizSection}>
        <h2 style={styles.subheading}>🧠 Quick Quiz</h2>

        <div style={styles.quizItem}>
          <p>1️⃣ Which attribute defines the destination of a link?</p>
          <input
            style={styles.input}
            value={quizAnswer1}
            onChange={(e) => setQuizAnswer1(e.target.value)}
            placeholder="Enter answer..."
          />
          <button style={styles.quizButton} onClick={checkAnswer1}>Check Answer</button>
          {result1 && <p style={styles.result}>{result1}</p>}
        </div>

        <div style={styles.quizItem}>
          <p>2️⃣ Which attribute shows alternate text if an image fails to load?</p>
          <input
            style={styles.input}
            value={quizAnswer2}
            onChange={(e) => setQuizAnswer2(e.target.value)}
            placeholder="Enter answer..."
          />
          <button style={styles.quizButton} onClick={checkAnswer2}>Check Answer</button>
          {result2 && <p style={styles.result}>{result2}</p>}
        </div>
      </div>

      {/* 📘 NOTE */}
      <div style={styles.noteBox}>
        <b>Note:</b> Attribute names are <b>case-insensitive</b>, but use lowercase in HTML5.
      </div>
    </div>
  );
}

// 🌈 STYLES
const styles = {
  container: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "40px",
    background: "linear-gradient(to bottom right, #f0f8ff, #e6f7ff)",
    minHeight: "100vh",
    color: "#333",
  },
  heading: {
    fontSize: "40px",
    color: "#007acc",
    textAlign: "center",
    marginBottom: "20px",
  },
  intro: {
    textAlign: "center",
    fontSize: "18px",
    marginBottom: "30px",
  },
  section: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
  subheading: {
    color: "#007acc",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    background: "#007acc",
    color: "#fff",
    padding: "10px",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
  },
  textarea: {
    width: "100%",
    fontFamily: "monospace",
    fontSize: "16px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "10px",
  },
  button: {
    background: "#007acc",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    marginTop: "10px",
    cursor: "pointer",
  },
  outputBox: {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "6px",
    marginTop: "15px",
    padding: "15px",
    minHeight: "120px",
  },
  practiceSection: {
    background: "#f0f9ff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
  task: {
    background: "#e6f7ff",
    padding: "10px",
    borderRadius: "6px",
    marginBottom: "10px",
  },
  quizSection: {
    background: "#fffaf0",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  quizItem: {
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  quizButton: {
    background: "#ff9800",
    color: "#fff",
    padding: "8px 16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  result: {
    fontWeight: "bold",
    marginTop: "10px",
  },
  noteBox: {
    background: "#fff3cd",
    padding: "15px",
    borderLeft: "5px solid #ffcc00",
    marginTop: "30px",
    borderRadius: "6px",
  },
};
