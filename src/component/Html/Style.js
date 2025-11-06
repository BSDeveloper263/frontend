import React, { useState } from "react";

export default function HtmlStyles() {
  const [code, setCode] = useState(
    `<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`
  );
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div style={styles.page}>
      <style>
        {`
          body { background: #fff; }
          pre {
            background: #272822;
            color: #f8f8f2;
            padding: 10px;
            border-radius: 6px;
            overflow-x: auto;
          }
          .example-box {
            background: #f5f5f5;
            padding: 15px;
            border-left: 4px solid #0a58ca;
            margin-bottom: 25px;
            border-radius: 6px;
          }
          .example {
            background: white;
            padding: 15px;
            border: 1px solid #ddd;
            margin-top: 10px;
            border-radius: 5px;
          }
          .editor {
            width: 100%;
            height: 150px;
            border: 1px solid #ccc;
            padding: 10px;
            font-family: monospace;
            resize: vertical;
            border-radius: 6px;
          }
          .run-btn {
            background-color: #0a58ca;
            color: white;
            padding: 10px 20px;
            border: none;
            margin-top: 10px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
          }
          .run-btn:hover { background-color: #084298; }
          .output-box {
            margin-top: 20px;
            border: 1px solid #ccc;
            border-radius: 6px;
            background: #fafafa;
          }
          .output-frame {
            width: 100%;
            height: 200px;
            border: none;
            background: white;
          }
          h1 { color: #0a58ca; border-bottom: 2px solid #ddd; padding-bottom: 10px; }
          h2 { color: #084298; margin-top: 30px; }
          h3 { color: #0d6efd; }
          ul li { margin-bottom: 8px; }
        `}
      </style>

      <h1>HTML Styles</h1>
      <p>
        The <code>style</code> attribute is used to add styles to an element, such as color, font, size, and more.
        It allows inline CSS directly inside HTML tags.
      </p>

      <div className="example-box">
        <h2>Example</h2>
        <div className="example">
          <p style={{ color: "red" }}>I am Red</p>
          <p style={{ color: "blue" }}>I am Blue</p>
          <p style={{ fontSize: "25px" }}>I am Big</p>
        </div>
      </div>

      <h2>The HTML Style Attribute</h2>
      <p>Setting the style of an HTML element can be done with the <code>style</code> attribute:</p>
      <pre>{`<tagname style="property:value;">`}</pre>
      <p>
        The <b>property</b> is a CSS property. The <b>value</b> is a CSS value.
      </p>

      {/* Background Color */}
      <h2>Background Color</h2>
      <p>The <code>background-color</code> property defines the background color for an element.</p>
      <div className="example-box">
        <h3>Example</h3>
        <pre>{`<body style="background-color:powderblue;">
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>`}</pre>
        <div className="example" style={{ backgroundColor: "powderblue" }}>
          <h1>This is a heading</h1>
          <p>This is a paragraph.</p>
        </div>
      </div>

      {/* Text Color */}
      <h2>Text Color</h2>
      <div className="example-box">
        <pre>{`<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`}</pre>
        <div className="example">
          <h1 style={{ color: "blue" }}>This is a heading</h1>
          <p style={{ color: "red" }}>This is a paragraph.</p>
        </div>
      </div>

      {/* Font Family */}
      <h2>Fonts</h2>
      <div className="example-box">
        <pre>{`<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`}</pre>
        <div className="example">
          <h1 style={{ fontFamily: "Verdana" }}>This is a heading</h1>
          <p style={{ fontFamily: "Courier New" }}>This is a paragraph.</p>
        </div>
      </div>

      {/* Font Size */}
      <h2>Text Size</h2>
      <div className="example-box">
        <pre>{`<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`}</pre>
        <div className="example">
          <h1 style={{ fontSize: "300%" }}>This is a heading</h1>
          <p style={{ fontSize: "160%" }}>This is a paragraph.</p>
        </div>
      </div>

      {/* Text Alignment */}
      <h2>Text Alignment</h2>
      <div className="example-box">
        <pre>{`<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`}</pre>
        <div className="example" style={{ textAlign: "center" }}>
          <h1>Centered Heading</h1>
          <p>Centered paragraph.</p>
        </div>
      </div>

      {/* Multiple Style Example */}
      <h2>Multiple Properties Example</h2>
      <p>You can add multiple style properties separated by a semicolon <code>;</code>.</p>
      <div className="example-box">
        <pre>{`<p style="color:white;background-color:green;font-size:20px;text-align:center;padding:10px;">
This is a styled paragraph with multiple properties.
</p>`}</pre>
        <div className="example">
          <p
            style={{
              color: "white",
              backgroundColor: "green",
              fontSize: "20px",
              textAlign: "center",
              padding: "10px",
            }}
          >
            This is a styled paragraph with multiple properties.
          </p>
        </div>
      </div>

      {/* Try It Yourself Section */}
      <h2>Try It Yourself!</h2>
      <p>Write your own HTML style example below and click "Run Output" to see the result 👇</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="editor"
      ></textarea>
      <button onClick={runCode} className="run-btn">
        Run Output
      </button>

      <div className="output-box">
        <h3 style={{ padding: "10px" }}>Output:</h3>
        <iframe
          title="output"
          srcDoc={output}
          sandbox="allow-scripts allow-same-origin"
          className="output-frame"
        ></iframe>
      </div>

      {/* Practice Section */}
      <h2>Practice Tasks 🧠</h2>
      <ol>
        <li>Create a heading with red text and yellow background.</li>
        <li>Make a paragraph with font size 25px and color green.</li>
        <li>Center a text using <code>text-align:center</code>.</li>
        <li>Add a blue border and padding to a div.</li>
        <li>Change background of body to light gray.</li>
        <li>Use <code>font-family:Courier</code> in paragraph text.</li>
        <li>Create a box with 10px margin and background color coral.</li>
        <li>Use multiple properties (color, size, background, border).</li>
        <li>Make a paragraph with italic text and bold font.</li>
        <li>Design your name beautifully with inline style! 🎨</li>
      </ol>

      <h2>Chapter Summary</h2>
      <ul>
        <li>Use the style attribute for styling HTML elements</li>
        <li>Use background-color for background color</li>
        <li>Use color for text colors</li>
        <li>Use font-family for text fonts</li>
        <li>Use font-size for text sizes</li>
        <li>Use text-align for text alignment</li>
        <li>You can combine multiple style properties using semicolons</li>
      </ul>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    padding: "40px",
    maxWidth: "1000px",
    margin: "auto",
    color: "#222",
    lineHeight: 1.7,
  },
};
