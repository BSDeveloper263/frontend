import React, { useState } from "react";

export default function HtmlQuotation() {
  const defaultCode = `<!-- Inline short quote (q) -->
<p>He said <q>Learning never stops</q> during the meeting.</p>

<!-- Block quote for longer quotations -->
<blockquote cite="https://www.example.com/source">
  <p>
    “The journey of a thousand miles begins with one step.” 
    <br /><small>— Lao Tzu</small>
  </p>
</blockquote>

<!-- Nested quotes -->
<p>
  She replied: <q>He told me <q>you should try it</q> and I did.</q>
</p>

<!-- Quote with cite attribute and source link -->
<blockquote cite="https://www.brainyquote.com/quotes/lao_tzu_121993">
  <p>Life is really simple, but we insist on making it complicated.</p>
  <footer>— <cite><a href="https://www.brainyquote.com" target="_blank" rel="noopener noreferrer">BrainyQuote</a></cite></footer>
</blockquote>

<!-- Using typographic quotes -->
<p>Use &amp;ldquo; &amp;rdquo; or &amp;lsquo; &amp;rsquo; for typographic quotes when needed.</p>
`;
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    const doc = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Quotation Output</title>
<style>
  body{ font-family: "Segoe UI", Roboto, Arial, sans-serif; padding:18px; color:#222; line-height:1.6; }
  h1{ color:#0a58ca; }
  pre{ background:#272822; color:#f8f8f2; padding:10px; border-radius:6px; overflow:auto; }
  blockquote{ border-left:4px solid #ccc; margin:12px 0; padding:10px 16px; background:#f9f9fb; border-radius:6px; }
  q{ quotes: "“" "”" "‘" "’"; }
  q:before{ content: open-quote; }
  q:after{ content: close-quote; }
  cite{ font-style:normal; color:#555; }
  footer{ margin-top:8px; font-size:0.95em; color:#333; }
  a{ color:#0a58ca; text-decoration:none; }
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
        .panel { background:#fff; border:1px solid #e6e9ee; border-radius:10px; padding:14px; margin-bottom:18px; }
        .editor{ width:100%; height:220px; padding:12px; border-radius:8px; border:1px solid #ccd6e3; font-family:monospace; resize:vertical; }
        .btn { background:#0a58ca; color:#fff; padding:10px 16px; border:none; border-radius:8px; cursor:pointer; font-weight:600; }
        .btn:hover{ background:#084298; }
        .task-list li{ margin:10px 0; }
      `}</style>

      <h1>HTML Quotations</h1>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>What are quotations?</h2>
        <p>
          Quotations are used to show someone else's words. HTML provides tags to display
          short inline quotations and longer block quotations:
        </p>
        <ul>
          <li><code>&lt;q&gt;</code> — for short, inline quotations.</li>
          <li><code>&lt;blockquote&gt;</code> — for longer quotations (block-level).</li>
          <li><code>&lt;cite&gt;</code> — to reference the source (title or author).</li>
          <li><code>cite</code> attribute on <code>&lt;blockquote&gt;</code> can hold the source URL.</li>
        </ul>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Key Differences</h2>
        <p><b>&lt;q&gt;</b> is inline and usually wraps short quotes inside a paragraph. Browsers may render quotation marks automatically. <b>&lt;blockquote&gt;</b> is block-level and used for longer quoted blocks — you can include a citation and footer inside it.</p>
        <p><b>Accessibility tip:</b> use <code>&lt;cite&gt;</code> for the source and include a readable footer if attribution is important.</p>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Examples (Rendered)</h2>
        <div style={{ display: "grid", gap: 12 }}>
          <div style={{ background: "#f8f9fb", padding: 12, borderRadius: 8 }}>
            <strong>Inline quote (<code>&lt;q&gt;</code>):</strong>
            <p>He said <q>Learning never stops</q> during the meeting.</p>
          </div>

          <div style={{ background: "#f8f9fb", padding: 12, borderRadius: 8 }}>
            <strong>Block quote (<code>&lt;blockquote&gt;</code>) with cite:</strong>
            <blockquote cite="https://www.example.com/source">
              <p>“The journey of a thousand miles begins with one step.”</p>
              <footer>— <cite>Lao Tzu</cite></footer>
            </blockquote>
          </div>

          <div style={{ background: "#f8f9fb", padding: 12, borderRadius: 8 }}>
            <strong>Nested quotes:</strong>
            <p>She replied: <q>He told me <q>you should try it</q> and I did.</q></p>
          </div>

          <div style={{ background: "#f8f9fb", padding: 12, borderRadius: 8 }}>
            <strong>Quote with source link:</strong>
            <blockquote cite="https://www.brainyquote.com">
              <p>Life is really simple, but we insist on making it complicated.</p>
              <footer>— <cite><a href="https://www.brainyquote.com" target="_blank" rel="noopener noreferrer">BrainyQuote</a></cite></footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Best Practices & Tips</h2>
        <ul>
          <li>Use <code>&lt;q&gt;</code> for short inline quotes and <code>&lt;blockquote&gt;</code> for long quotes.</li>
          <li>Provide source attribution using <code>&lt;cite&gt;</code> and/or a <code>cite</code> attribute on <code>&lt;blockquote&gt;</code>.</li>
          <li>For nested quotes, browsers usually alternate quote marks — use <code>&lt;q&gt;</code> nesting properly.</li>
          <li>Don’t use <code>&lt;blockquote&gt;</code> for mere indentation — it's semantic for quotes.</li>
          <li>For accessibility, include author or source text in a <code>&lt;footer&gt;</code> inside the blockquote.</li>
        </ul>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Try It Yourself</h2>
        <p>Paste or write quotation HTML in the editor and click <strong>Run Output</strong> to preview.</p>

        <textarea
          className="editor"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div style={{ marginTop: 10 }}>
          <button className="btn" onClick={runCode}>▶ Run Output</button>
        </div>

        <div style={{ marginTop: 12, borderRadius: 8, overflow: "hidden", border: "1px solid #e6eef7" }}>
          <div style={{ padding: 10, background: "#f7f9fc" }}><strong>Output:</strong></div>
          <iframe
            title="quotation-output"
            srcDoc={output}
            sandbox="allow-same-origin allow-scripts"
            style={{ width: "100%", height: 320, border: 0 }}
          />
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Practice Tasks (10)</h2>
        <ol className="task-list">
          <li><b>Simple inline quote:</b> Create a sentence that uses <code>&lt;q&gt;</code> for a short quote.</li>
          <li><b>Blockquote with attribution:</b> Add a <code>&lt;blockquote&gt;</code> containing a paragraph and a footer with <code>&lt;cite&gt;</code>.</li>
          <li><b>Nested quotes:</b> Write a sentence that contains a nested <code>&lt;q&gt;</code> inside another <code>&lt;q&gt;</code>.</li>
          <li><b>Quote source URL:</b> Use the <code>cite</code> attribute on <code>&lt;blockquote&gt;</code> with a sample URL.</li>
          <li><b>Typographic quotes:</b> Display left and right double quotes using HTML entities (<code>&amp;ldquo;</code> / <code>&amp;rdquo;</code>).</li>
          <li><b>Quote with link:</b> Include a hyperlink inside a <code>&lt;blockquote&gt;</code> pointing to the source.</li>
          <li><b>Attribution styling:</b> Style the <code>&lt;footer&gt;</code> inside <code>&lt;blockquote&gt;</code> to look subtle (small font).</li>
          <li><b>Quoted code line:</b> Put a small code sample inside <code>&lt;code&gt;</code> and quote it with <code>&lt;q&gt;</code> inline.</li>
          <li><b>Multiple blockquotes:</b> Show two different blockquotes stacked with citations.</li>
          <li><b>Final challenge:</b> Build a “quote card” — a blockquote with the quote, author (cite), and a small image/avatar (use &lt;img&gt; with inline styles).</li>
        </ol>

        <p style={{ marginTop: 12, color: "#0a58ca" }}><strong>Tip:</strong> Use the Try Editor above — build each task there and click Run to preview. Save or copy your best quote card!</p>
      </section>

      <section style={{ textAlign: "center", marginTop: 12 }}>
        <p style={{ color: "#555" }}>✅ Practice all tasks to master HTML quotation tags — practice makes perfect!</p>
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
