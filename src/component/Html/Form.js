import React, { useState } from "react";

const examples = [
  {
    id: "basic",
    title: "Basic Form",
    description: "A simple HTML form with text input, email, and textarea.",
    code: `<form action="#" method="post">
  Name: <input type="text" name="name"><br>
  Email: <input type="email" name="email"><br>
  Message: <textarea name="message"></textarea><br>
  <button type="submit">Submit</button>
</form>`,
    image: "https://www.w3schools.com/html/img_form.gif"
  },
  {
    id: "radio",
    title: "Radio Buttons & Checkbox",
    description: "Form with radio buttons and checkboxes.",
    code: `<form>
  Gender:<br>
  <input type="radio" name="gender" value="male"> Male<br>
  <input type="radio" name="gender" value="female"> Female<br><br>
  Hobbies:<br>
  <input type="checkbox" name="hobby" value="reading"> Reading<br>
  <input type="checkbox" name="hobby" value="sports"> Sports<br>
  <button type="submit">Submit</button>
</form>`,
    image: "https://www.w3schools.com/html/img_radio.gif"
  },
  {
    id: "dropdown",
    title: "Select Dropdown",
    description: "Form with a select dropdown menu.",
    code: `<form>
  Choose your country:<br>
  <select name="country">
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">UK</option>
  </select><br><br>
  <button type="submit">Submit</button>
</form>`,
    image: "https://www.w3schools.com/html/img_dropdown.gif"
  }
];

export default function HtmlFormTutorial() {
  const [activeExample, setActiveExample] = useState(examples[0].id);
  const [code, setCode] = useState(examples[0].code);
  const [imageSrc, setImageSrc] = useState(examples[0].image);

  const runCode = () => {
    const iframe = document.getElementById("outputFrame");
    iframe.srcdoc = code;
  };

  const handleExampleChange = (id) => {
    const ex = examples.find(e => e.id === id);
    setActiveExample(id);
    setCode(ex.code);
    setImageSrc(ex.image);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>
      <header style={{ backgroundColor: "#4CAF50", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>HTML Form Tutorial</h1>
        <p>Learn HTML Forms step by step with examples, images, and live editor</p>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
        {/* Left Sidebar / Explanation */}
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          flex: 1,
          minWidth: "300px"
        }}>
          <h2 style={{ color: "#4CAF50" }}>What is a Form?</h2>
          <p>An HTML form is used to collect user input. Forms can contain:</p>
          <ul>
            <li>Text fields</li>
            <li>Password fields</li>
            <li>Radio buttons</li>
            <li>Checkboxes</li>
            <li>Select dropdowns</li>
            <li>Textareas</li>
            <li>Submit buttons</li>
          </ul>

          <h2>Form Attributes:</h2>
          <ul>
            <li><strong>action:</strong> URL where form data is sent</li>
            <li><strong>method:</strong> GET or POST</li>
            <li><strong>name:</strong> Name of the form or input field</li>
            <li><strong>type:</strong> Type of input (text, email, password, submit, etc.)</li>
          </ul>

          <h2>Input Types:</h2>
          <ul>
            <li>text</li>
            <li>password</li>
            <li>email</li>
            <li>number</li>
            <li>radio</li>
            <li>checkbox</li>
            <li>submit</li>
            <li>button</li>
          </ul>

          <h2>Example Image:</h2>
          <input
            type="text"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            placeholder="Paste image URL here"
            style={{ width: "100%", padding: "5px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <img
            src={imageSrc}
            alt="Form example"
            style={{ width: "100%", borderRadius: "5px", border: "1px solid #ccc" }}
          />
          <div style={{ marginTop: "5px" }}>
            <a href={imageSrc} target="_blank" rel="noopener noreferrer" style={{ color: "#4CAF50" }}>
              Open Image in new tab
            </a>
          </div>
        </div>

        {/* Right Content: Live Editor */}
        <div style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          flex: 1,
          minWidth: "300px"
        }}>
          <h2 style={{ color: "#4CAF50" }}>Try Yourself Editor</h2>

          {/* Example Buttons */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "10px" }}>
            {examples.map(ex => (
              <button
                key={ex.id}
                onClick={() => handleExampleChange(ex.id)}
                style={{
                  padding: "5px 10px",
                  border: "1px solid #4CAF50",
                  borderRadius: "5px",
                  background: activeExample === ex.id ? "#4CAF50" : "white",
                  color: activeExample === ex.id ? "white" : "#4CAF50",
                  cursor: "pointer"
                }}
              >
                {ex.title}
              </button>
            ))}
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{ width: "100%", height: "200px", padding: "10px", borderRadius: "5px", border: "1px solid #ccc", fontFamily: "monospace" }}
          ></textarea>

          <button
            onClick={runCode}
            style={{ marginTop: "10px", padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
          >
            Run Code
          </button>

          <h3 style={{ marginTop: "15px" }}>Output:</h3>
          <iframe
            id="outputFrame"
            style={{ width: "100%", height: "300px", border: "1px solid #ccc", borderRadius: "5px" }}
          />
        </div>
      </div>
    </div>
  );
}
