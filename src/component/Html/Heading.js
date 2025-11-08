import React, { useState } from "react";

export default function HtmlHeading() {
  const [code, setCode] = useState(`<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>`);

  const [quizAnswer, setQuizAnswer] = useState("");
  const [result, setResult] = useState("");

  const checkQuiz = () => {
    if (quizAnswer.trim().toLowerCase() === "h1") {
      setResult("✅ Correct! <h1> is the most important heading.");
    } else {
      setResult("❌ Try again! Remember, <h1> is the top-level heading.");
    }
  };

  return (
    <div style={styles.container}>
      {/* 🌈 Internal Styling */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

          h1, h2, h3, h4, h5, h6 {
            margin-top: 10px;
            margin-bottom: 10px;
          }

          .main-title {
            text-align: center;
            color: #2563eb;
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .intro {
            font-size: 1.1rem;
            line-height: 1.7;
            color: #333;
          }

          .highlight {
            background: #e0f2fe;
            padding: 3px 6px;
            border-radius: 4px;
          }

          .image-box {
            text-align: center;
            margin: 25px 0;
          }

          .image-box img {
            width: 100%;
            max-width: 600px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }

          pre {
            background: #0f172a;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 10px;
            overflow-x: auto;
            font-size: 0.95rem;
          }

          textarea {
            width: 100%;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 10px;
            font-family: monospace;
            font-size: 1rem;
            resize: vertical;
          }

          .output {
            background: #fff;
            margin-top: 10px;
            padding: 15px;
            border-radius: 8px;
            border: 1px solid #ddd;
            min-height: 100px;
          }

          .task-box, .quiz-box {
            background: #fefce8;
            border-left: 6px solid #facc15;
            padding: 15px;
            margin-top: 25px;
            border-radius: 8px;
          }

          .quiz-box input {
            padding: 8px;
            font-size: 1rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            margin-right: 10px;
          }

          .quiz-box button {
            background: #2563eb;
            color: white;
            border: none;
            padding: 8px 14px;
            border-radius: 6px;
            cursor: pointer;
          }

          .quiz-box button:hover {
            background: #1d4ed8;
          }

          .result {
            margin-top: 10px;
            font-weight: 600;
          }

          .footer {
            text-align: center;
            margin-top: 40px;
            font-size: 0.9rem;
            color: #555;
          }

          .footer a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
          }

          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      {/* 🧠 Title */}
      <h1 className="main-title">HTML Headings Tutorial</h1>

      {/* 📘 Introduction */}
      <p className="intro">
        In HTML, headings are defined with tags from{" "}
        <span className="highlight">&lt;h1&gt;</span> to{" "}
        <span className="highlight">&lt;h6&gt;</span>.  
        Headings help organize your content and show importance levels.  
        <b>&lt;h1&gt;</b> is the most important, while <b>&lt;h6&gt;</b> is the least.
      </p>

      <div className="image-box">
        <img
          src="https://www.w3schools.com/html/img_notepad.png"
          alt="HTML Headings Example"
        />
        <p style={{ fontStyle: "italic", marginTop: "5px" }}>
          Example of headings used in a web page
        </p>
      </div>

      {/* 🧩 Why Important */}
      <h2>Why Are Headings Important?</h2>
      <ul>
        <li><b>SEO:</b> Helps search engines understand your page content.</li>
        <li><b>Accessibility:</b> Screen readers use them for navigation.</li>
        <li><b>Readability:</b> Makes content visually structured.</li>
        <li><b>Design:</b> Adds visual hierarchy and appeal.</li>
      </ul>

      {/* 🧱 Syntax */}
      <h2>Syntax</h2>
      <pre>{`<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>`}</pre>

      {/* 💻 Try It Yourself */}
      <h2>Try it Yourself 💻</h2>
      <p>Type or edit your own heading code below and see the output instantly 👇</p>
      <textarea rows="8" value={code} onChange={(e) => setCode(e.target.value)} />
      <div className="output" dangerouslySetInnerHTML={{ __html: code }}></div>

      {/* 🧠 Practice Tasks */}
      <div className="task-box">
        <h3>Practice Tasks 🧠</h3>
        <ol>
          <li>Create a webpage using all six heading tags from h1 to h6.</li>
          <li>Use <code>style</code> attribute to give different colors to each heading.</li>
          <li>Create a blog structure: <b>h1</b> for title, <b>h2</b> for subheadings, <b>h3</b> for smaller sections.</li>
          <li>Experiment with font sizes and alignments using CSS.</li>
        </ol>
      </div>

      {/* 🎯 Quiz */}
      <div className="quiz-box">
        <h3>Quick Quiz 🎯</h3>
        <p>Which HTML tag is used for the largest heading?</p>
        <input
          type="text"
          placeholder="Your answer (like h1)"
          value={quizAnswer}
          onChange={(e) => setQuizAnswer(e.target.value)}
        />
        <button onClick={checkQuiz}>Check Answer</button>
        <div className="result">{result}</div>
      </div>

      {/* 🔗 Footer */}
      <div className="footer">
        Learn more about headings at{" "}
        <a
          href="https://www.w3schools.com/html/html_headings.asp"
          target="_blank"
          rel="noopener noreferrer"
        >
          W3Schools
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    padding: "30px",
    background: "#f8fafc",
    color: "#111827",
    maxWidth: "900px",
    margin: "40px auto",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
  },
};
