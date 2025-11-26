import React from "react";

export default function HtmlList() {
  const container = {
    width: "90%",
    margin: "20px auto",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    padding: "25px",
    lineHeight: 1.7,
    fontFamily: "Poppins, sans-serif",
  };

  const heading1 = {
    color: "#1d3557",
    textAlign: "center",
    marginBottom: "20px",
  };

  const heading2 = {
    color: "#0d47a1",
    marginTop: "25px",
  };

  const exampleBox = {
    background: "#f1f3f6",
    borderRadius: "10px",
    padding: "15px",
    margin: "20px 0",
  };

  const codeBox = {
    background: "#272822",
    color: "#fff",
    padding: "12px",
    borderRadius: "8px",
    overflowX: "auto",
  };

  const outputBox = {
    background: "#fff",
    border: "1px solid #ccc",
    padding: "15px",
    marginTop: "10px",
    borderRadius: "8px",
  };

  return (
    <div style={container}>
      <h1 style={heading1}>HTML Lists</h1>

      <p>
        <b>HTML Lists</b> ka use web page par related items ko ek structured
        format me dikhane ke liye hota hai. Ye items ek ke baad ek ordered
        (numbered) ya unordered (bulleted) format me show kiye ja sakte hain.
      </p>

      <h2 style={heading2}>Why Use Lists?</h2>
      <p>
        Lists ka use tab hota hai jab hume multiple similar items (jaise menu,
        features, steps, etc.) ko ek sath clearly show karna hota hai.
      </p>

      <h3 style={{ color: "#0d47a1" }}>Types of HTML Lists:</h3>
      <ul style={{ marginLeft: "20px" }}>
        <li>
          <b>1. Ordered List (&lt;ol&gt;):</b> Numbered items ke liye.
        </li>
        <li>
          <b>2. Unordered List (&lt;ul&gt;):</b> Bulleted items ke liye.
        </li>
        <li>
          <b>3. Description List (&lt;dl&gt;):</b> Term aur uske description ke
          liye.
        </li>
      </ul>

      <hr />

      <h2 style={heading2}>1. Ordered List Example</h2>
      <p>Ordered list me items numbers ke sath display hote hain (1, 2, 3...)</p>

      <div style={exampleBox}>
        <h4>Example:</h4>
        <pre style={codeBox}>{`<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>`}</pre>

        <div style={outputBox}>
          <h4>Output:</h4>
          <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ol>
        </div>
      </div>

      <h2 style={heading2}>2. Unordered List Example</h2>
      <p>Unordered list me items bullet points ke sath display hote hain.</p>

      <div style={exampleBox}>
        <h4>Example:</h4>
        <pre style={codeBox}>{`<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Mango</li>
</ul>`}</pre>

        <div style={outputBox}>
          <h4>Output:</h4>
          <ul>
            <li>Apple</li>
            <li>Banana</li>
            <li>Mango</li>
          </ul>
        </div>
      </div>

      <h2 style={heading2}>3. Description List Example</h2>
      <p>
        Description list ek term aur uske description ko define karta hai.
      </p>

      <div style={exampleBox}>
        <h4>Example:</h4>
        <pre style={codeBox}>{`<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`}</pre>

        <div style={outputBox}>
          <h4>Output:</h4>
          <dl>
            <dt>
              <b>HTML</b>
            </dt>
            <dd>HyperText Markup Language</dd>
            <dt>
              <b>CSS</b>
            </dt>
            <dd>Cascading Style Sheets</dd>
          </dl>
        </div>
      </div>

      <hr />

      <h2 style={heading2}>Why Lists Are Important?</h2>
      <ul style={{ marginLeft: "20px" }}>
        <li>Web content ko readable aur structured banata hai.</li>
        <li>Navigation menus, to-do lists, features list me kaam aata hai.</li>
        <li>SEO ke liye helpful hote hain (Google ko structured data milta hai).</li>
      </ul>
    </div>
  );
}
