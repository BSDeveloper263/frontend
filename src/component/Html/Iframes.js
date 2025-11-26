import React, { useState } from "react";

export default function HtmlIframes() {
  const [code, setCode] = useState(`
<iframe src="https://www.wikipedia.org" width="400" height="200"></iframe>
`);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ color: "#04AA6D" }}>HTML Iframes</h1>
      <p>
        HTML <code>&lt;iframe&gt;</code> tag ek page ke andar dusra web page
        embed karne ke liye use hota hai. Iframe ka matlab hota hai{" "}
        <strong>Inline Frame</strong>.
      </p>

      <h2 style={{ color: "#333" }}>Iframe Syntax</h2>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`<iframe src="url" title="description"></iframe>`}
      </pre>

      <h2 style={{ color: "#333" }}>Example</h2>
      <p>Yahan ek iframe me Wikipedia website show ki gayi hai:</p>

      <div
        style={{
          background: "#f9f9f9",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <iframe
          src="https://www.wikipedia.org"
          width="400"
          height="200"
          title="Wikipedia"
          style={{ border: "2px solid #04AA6D", borderRadius: "6px" }}
        ></iframe>
      </div>

      <h2 style={{ color: "#333" }}>Iframe Attributes</h2>
      <ul>
        <li>
          <b>src</b> - Page ka URL batata hai jo iframe ke andar load hoga.
        </li>
        <li>
          <b>height</b> aur <b>width</b> - Iframe ke size ko control karte hain.
        </li>
        <li>
          <b>title</b> - Accessibility ke liye iframe ka title specify karta hai.
        </li>
        <li>
          <b>style</b> - Border, background ya aur design add karne ke liye.
        </li>
      </ul>

      <h2 style={{ color: "#333" }}>Iframe Without Border</h2>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`<iframe src="https://www.wikipedia.org" style="border:none;" title="Wikipedia"></iframe>`}
      </pre>
      <iframe
        src="https://www.wikipedia.org"
        title="Wikipedia No Border"
        style={{ border: "none", width: "400px", height: "200px" }}
      ></iframe>

      <h2 style={{ color: "#333" }}>Iframe Inside a Page</h2>
      <p>
        Iframe ke andar aap kisi bhi apni HTML file ya dusre domain ki file load
        kar sakte hain. Example:
      </p>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`<iframe src="about.html" width="600" height="300" title="About Page"></iframe>`}
      </pre>

      <h2 style={{ color: "#333" }}>Iframe - Target for a Link</h2>
      <p>
        Aap links ko iframe me open kar sakte hain using <b>target</b> attribute:
      </p>
      <pre
        style={{
          background: "#f1f1f1",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {`<iframe name="myframe" width="400" height="200"></iframe>
<a href="https://www.w3schools.com" target="myframe">Visit W3Schools</a>`}
      </pre>
      <iframe
        name="myframe"
        title="Example Target"
        width="400"
        height="200"
        style={{ border: "2px solid #04AA6D" }}
      ></iframe>
      <br />
      <a
        href="https://www.w3schools.com"
        target="myframe"
        style={{
          color: "white",
          background: "#04AA6D",
          padding: "8px 12px",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "10px",
          textDecoration: "none",
        }}
      >
        Visit W3Schools
      </a>

      <h2 style={{ color: "#333", marginTop: "30px" }}>Try It Yourself</h2>
      <p>Code likho aur output dekhne ke liye run button dabao:</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: "100%",
          height: "150px",
          borderRadius: "5px",
          padding: "10px",
          fontSize: "14px",
        }}
      ></textarea>
      <button
        onClick={() => {
          const iframe = document.getElementById("outputIframe");
          const blob = new Blob([code], { type: "text/html" });
          iframe.src = URL.createObjectURL(blob);
        }}
        style={{
          background: "#04AA6D",
          color: "white",
          padding: "10px 15px",
          marginTop: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Run Code
      </button>

      <div
        style={{
          border: "2px solid #ddd",
          borderRadius: "10px",
          marginTop: "15px",
          overflow: "hidden",
        }}
      >
        <iframe
          id="outputIframe"
          title="Output Preview"
          style={{ width: "100%", height: "200px", border: "none" }}
        ></iframe>
      </div>
    </div>
  );
}
