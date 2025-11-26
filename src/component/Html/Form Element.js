import React, { useState } from "react";

const examples = [
  {
    id: "input",
    title: "Text Input",
    code: `<form>
  <label>Username:</label><br>
  <input type="text" name="username" placeholder="Enter name">
</form>`
  },
  {
    id: "password",
    title: "Password Field",
    code: `<form>
  <label>Password:</label><br>
  <input type="password" name="password" placeholder="Enter password">
</form>`
  },
  {
    id: "textarea",
    title: "Textarea",
    code: `<form>
  <label>Message:</label><br>
  <textarea rows="4" cols="30">Write something...</textarea>
</form>`
  },
  {
    id: "select",
    title: "Select Dropdown",
    code: `<form>
  <label>Select Country:</label><br>
  <select>
    <option>India</option>
    <option>USA</option>
    <option>UK</option>
  </select>
</form>`
  },
  {
    id: "radio",
    title: "Radio Buttons",
    code: `<form>
  <p>Gender:</p>
  <input type="radio" name="gender" value="male"> Male<br>
  <input type="radio" name="gender" value="female"> Female
</form>`
  },
  {
    id: "checkbox",
    title: "Checkbox",
    code: `<form>
  <input type="checkbox" name="agree"> I Agree Terms
</form>`
  },
  {
    id: "button",
    title: "Submit Button",
    code: `<form>
  <button type="submit">Submit</button>
</form>`
  }
];

export default function HtmlFormElements() {
  const [selected, setSelected] = useState(examples[0]);

  const runCode = () => {
    document.getElementById("output").innerHTML = selected.code;
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>HTML Form Elements (W3Schools Style)</h2>

      {/* Buttons */}
      <div style={{ marginBottom: "15px" }}>
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => setSelected(ex)}
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              padding: "8px 12px",
              cursor: "pointer"
            }}
          >
            {ex.title}
          </button>
        ))}
      </div>

      {/* Code Box */}
      <textarea
        value={selected.code}
        onChange={() => {}}
        rows="8"
        style={{ width: "100%", fontFamily: "monospace", padding: "10px" }}
      ></textarea>

      <br />
      <button
        onClick={runCode}
        style={{
          marginTop: "10px",
          padding: "8px 18px",
          cursor: "pointer"
        }}
      >
        Run Output
      </button>

      {/* Output */}
      <h3>Output:</h3>
      <div
        id="output"
        style={{
          minHeight: "120px",
          padding: "12px",
          border: "1px solid #ccc",
          background: "#fafafa"
        }}
      ></div>
    </div>
  );
}
