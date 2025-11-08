import React, { useState } from "react";

export default function HtmlFormatting() {
  const defaultCode = `<!-- Try different formatting tags below -->
<h1>HTML Formatting Examples</h1>

<p>Normal paragraph with some <strong>strong</strong> and <b>bold</b> text.</p>
<p>Use <em>emphasize</em> or <i>italic</i> to stress words.</p>
<p><u>Underlined text</u> and <small>small text</small>.</p>
<p>Use <mark>highlight (mark)</mark> to mark important text.</p>

<p>Deleted text: <del>Old text</del> | Inserted text: <ins>New text</ins></p>

<p>Subscript: H<sub>2</sub>O &nbsp; Superscript: x<sup>2</sup></p>

<pre><code>// code block preserves whitespace
function hello() {
  console.log("Hello World");
}
</code></pre>

<blockquote>
  This is a blockquote for quoting large text or paragraphs.
</blockquote>

<p>Inline code: <code>const x = 10;</code></p>
`;
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    // wrap in a minimal HTML document for iframe rendering
    const doc = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Output</title>
  <style>
    body{font-family:Segoe UI, Roboto, Arial, sans-serif; padding:16px; color:#222;}
    pre{background:#272822;color:#f8f8f2;padding:12px;border-radius:6px;overflow:auto;}
    code{background:#f1f1f1;padding:2px 6px;border-radius:4px;font-family:monospace;}
    blockquote{border-left:4px solid #ccc;padding-left:12px;color:#555;margin:12px 0;}
    h1{color:#0a58ca}
    p{margin:8px 0}
  </style>
</head>
<body>
${code}
</body>
</html>`;
    setOutput(doc);
  };

  return (
    <div style={styles.page}>
      <style>{`
        .panel {background:#fff;border:1px solid #e6e9ee;border-radius:8px;padding:16px;margin-bottom:18px;}
        .examples {display:flex;gap:12px;flex-wrap:wrap;}
        .example-card {flex:1 1 320px;background:#f8f9fb;border:1px solid #e9eef7;padding:12px;border-radius:8px;}
        .editor{width:100%;height:200px;padding:12px;border-radius:8px;border:1px solid #ccd6e3;font-family:monospace;resize:vertical;}
        .runBtn{background:#0a58ca;color:#fff;padding:10px 16px;border:none;border-radius:6px;cursor:pointer;font-weight:600}
        .runBtn:hover{background:#084298}
        .task-list li{margin:10px 0}
      `}</style>

      <h1>HTML Formatting</h1>
      <p style={{ fontSize: 16 }}>
        HTML formatting tags change how text appears — bold, italic, underline, smaller text, code blocks, quotes, and more.
        Formatting does <b>not</b> change the meaning of content (for semantics use &lt;strong&gt; / &lt;em&gt; appropriately).
      </p>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Common Formatting Tags — Quick Reference</h2>
        <div className="examples">
          <div className="example-card">
            <h3>&lt;strong&gt; / &lt;b&gt;</h3>
            <p><strong>Strong</strong> (semantic) and <b>bold</b> (visual).</p>
            <pre>&lt;strong&gt;Important&lt;/strong&gt;  &lt;b&gt;Bold&lt;/b&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;em&gt; / &lt;i&gt;</h3>
            <p><em>Emphasized</em> (semantic) and <i>italic</i> (visual).</p>
            <pre>&lt;em&gt;emphasize&lt;/em&gt;  &lt;i&gt;italic&lt;/i&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;u&gt; &amp; &lt;small&gt;</h3>
            <p><u>Underlined</u> and <small>smaller text</small>.</p>
            <pre>&lt;u&gt;underline&lt;/u&gt;  &lt;small&gt;small&lt;/small&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;mark&gt; (highlight)</h3>
            <p><mark>Marked text</mark> for highlighting.</p>
            <pre>&lt;mark&gt;important&lt;/mark&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;del&gt; &amp; &lt;ins&gt;</h3>
            <p><del>deleted</del> vs <ins>inserted</ins> text.</p>
            <pre>&lt;del&gt;old&lt;/del&gt;  &lt;ins&gt;new&lt;/ins&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;sub&gt; &amp; &lt;sup&gt;</h3>
            <p>Subscript H<sub>2</sub>O and superscript x<sup>2</sup>.</p>
            <pre>H&lt;sub&gt;2&lt;/sub&gt;O  x&lt;sup&gt;2&lt;/sup&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;code&gt; &amp; &lt;pre&gt;</h3>
            <p>Inline code <code>const x = 1;</code> and code block:</p>
            <pre>&lt;pre&gt;&lt;code&gt;...&lt;/code&gt;&lt;/pre&gt;</pre>
          </div>

          <div className="example-card">
            <h3>&lt;blockquote&gt;</h3>
            <p>Block quote for longer quotes.</p>
            <pre>&lt;blockquote&gt;...&lt;/blockquote&gt;</pre>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Detailed Explanation</h2>

        <h3>1. &lt;strong&gt; vs &lt;b&gt;</h3>
        <p>
          <strong>&lt;strong&gt;</strong> marks text of <b>strong importance</b> (semantic — assistive tech understands it).  
          <code>&lt;b&gt;</code> makes text bold visually without extra semantic meaning. Prefer <code>&lt;strong&gt;</code> for important content.
        </p>

        <h3>2. &lt;em&gt; vs &lt;i&gt;</h3>
        <p>
          <code>&lt;em&gt;</code> indicates emphasis (semantic). <code>&lt;i&gt;</code> is purely presentational for italics. Use <code>&lt;em&gt;</code> when emphasis matters for meaning.
        </p>

        <h3>3. &lt;mark&gt;, &lt;small&gt;, &lt;u&gt;</h3>
        <p>
          <code>&lt;mark&gt;</code> highlights text (useful for search results), <code>&lt;small&gt;</code> reduces font-size, and <code>&lt;u&gt;</code> underlines text (avoid underline for links confusion).
        </p>

        <h3>4. Deleted/Inserted — &lt;del&gt; &amp; &lt;ins&gt;</h3>
        <p>
          Use <code>&lt;del&gt;</code> to show removed text (often rendered with a strike-through) and <code>&lt;ins&gt;</code> for inserted text.
        </p>

        <h3>5. Subscript &amp; Superscript</h3>
        <p>
          Use <code>&lt;sub&gt;</code> for subscript and <code>&lt;sup&gt;</code> for superscript (scientific notation, mathematical exponents).
        </p>

        <h3>6. Code &amp; Preformatted</h3>
        <p>
          <code>&lt;code&gt;</code> shows inline code. <code>&lt;pre&gt;</code> preserves whitespace and line breaks; combine with <code>&lt;code&gt;</code> for blocks.
        </p>

        <h3>7. Blockquote</h3>
        <p>
          <code>&lt;blockquote&gt;</code> is for longer quotations — often displayed indented and maybe styled.
        </p>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Multiple Examples (Live)</h2>

        <div className="example">
          <h3>Examples rendered below:</h3>

          <p>
            This is <strong>strong</strong> and this is <b>bold</b>. This is <em>emphasized</em> and this is <i>italic</i>.
          </p>

          <p><u>Underlined</u> • <small>Small text</small> • <mark>Marked text</mark></p>

          <p>Deleted: <del>old</del> — Inserted: <ins>new</ins></p>

          <p>Formula: CO<sub>2</sub> and area = x<sup>2</sup></p>

          <pre><code>let a = 10;
console.log(a);</code></pre>

          <blockquote>
            “A quoted paragraph using blockquote — good for citing long text or references.”
          </blockquote>

          <p>Inline code example: <code>document.getElementById('id')</code></p>
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Try It Yourself</h2>
        <p>Write or paste HTML formatting code below — then click <b>Run Output</b> to preview.</p>

        <textarea
          className="editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div style={{ marginTop: 10 }}>
          <button className="runBtn" onClick={runCode}>▶ Run Output</button>
        </div>

        <div style={{ marginTop: 14, borderRadius: 8, overflow: "hidden" }}>
          <div style={{ padding: 10, background: "#f7f9fc", border: "1px solid #e6eef7" }}>
            <strong>Output:</strong>
          </div>
          <iframe
            title="output"
            srcDoc={output}
            sandbox="allow-same-origin allow-scripts"
            style={{ width: "100%", height: 300, border: 0 }}
          />
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Practice Tasks (10)</h2>
        <ol className="task-list">
          <li><b>Bold vs Strong:</b> Create a sentence where one word uses <code>&lt;b&gt;</code> and another uses <code>&lt;strong&gt;</code>. Explain which to use for meaning.</li>
          <li><b>Italic vs Emphasis:</b> Write a paragraph where a phrase is emphasized using <code>&lt;em&gt;</code> and another with <code>&lt;i&gt;</code>.</li>
          <li><b>Underline & Small:</b> Make a sentence that contains underlined text and a footnote in <code>&lt;small&gt;</code>.</li>
          <li><b>Mark & Highlight:</b> Highlight the keyword in a sentence using <code>&lt;mark&gt;</code>.</li>
          <li><b>Del & Ins:</b> Show an edited sentence using <code>&lt;del&gt;</code> for removed words and <code>&lt;ins&gt;</code> for inserted words.</li>
          <li><b>Sub & Sup:</b> Type a chemical formula (e.g., H<sub>2</sub>O) and a squared number (e.g., x<sup>2</sup>).</li>
          <li><b>Inline Code:</b> Insert a short piece of inline code inside a paragraph using <code>&lt;code&gt;</code>.</li>
          <li><b>Code Block:</b> Paste a small function inside <code>&lt;pre&gt;&lt;code&gt;</code> to preserve indentation.</li>
          <li><b>Blockquote:</b> Add a multi-line quote inside <code>&lt;blockquote&gt;</code> and credit the author below.</li>
          <li><b>Final Challenge:</b> Create a short “profile card” HTML using formatting tags — name in &lt;strong&gt;, short bio in &lt;em&gt;, a highlighted skill with &lt;mark&gt;, and a small note.</li>
        </ol>

        <p style={{ marginTop: 12, color: "#0a58ca" }}><strong>Tip:</strong> Use the Try Editor above to build and test each task. Copy-paste each solution into the editor and run.</p>
      </section>

      <section style={{ textAlign: "center", marginTop: 14 }}>
        <p style={{ color: "#555" }}>✅ Practice all tasks to master HTML formatting tags — the more you try, the better you learn!</p>
      </section>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Segoe UI, Roboto, Arial, sans-serif",
    maxWidth: 1000,
    margin: "18px auto",
    padding: 18,
    color: "#222",
    lineHeight: 1.6,
  },
};
