import React, { useState } from "react";

export default function HtmlImages() {
  const defaultCode = `<!-- Basic image -->
<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" />

<!-- Image with width & height -->
<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" width="200" height="150" />

<!-- Image with title -->
<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" title="A smiling girl" />

<!-- Image as a link -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" width="120" />
</a>

<!-- Figure + figcaption -->
<figure style="max-width:320px;">
  <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" style="width:100%;border-radius:8px;" />
  <figcaption style="text-align:center;font-size:14px;color:#555;">Photo: A happy girl</figcaption>
</figure>

<!-- Responsive image using srcset + sizes -->
<img
  src="https://www.w3schools.com/html/img_girl.jpg"
  srcset="https://www.w3schools.com/html/img_girl.jpg 600w, https://www.w3schools.com/html/img_girl.jpg 1200w"
  sizes="(max-width:600px) 100vw, 600px"
  alt="Responsive girl"
/>

<!-- Lazy loading -->
<img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" loading="lazy" width="300" />

<!-- Using background-image via inline style -->
<div style="width:300px;height:150px;background-image:url('https://www.w3schools.com/html/img_girl.jpg');background-size:cover;border-radius:8px;"></div>
`;
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState("");

  const runCode = () => {
    const doc = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>HTML Images Output</title>
<style>
  body{font-family:Segoe UI, Roboto, Arial, sans-serif; padding:18px; color:#222; line-height:1.6;}
  h1{color:#0a58ca}
  pre{background:#272822;color:#f8f8f2;padding:10px;border-radius:6px;overflow:auto;}
  figure{margin:12px 0;}
  figcaption{font-size:0.95rem;color:#555;margin-top:6px;}
  .grid{display:flex;gap:12px;flex-wrap:wrap;align-items:flex-start}
  img{max-width:100%;height:auto;display:block}
  .note{background:#f1f7ff;border-left:4px solid #0a58ca;padding:10px;border-radius:6px;color:#084298}
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
        .panel{background:#fff;border:1px solid #eef3fb;border-radius:10px;padding:16px;margin-bottom:18px}
        .editor{width:100%;height:220px;padding:12px;border-radius:8px;border:1px solid #ccd6e3;font-family:monospace;resize:vertical}
        .runBtn{background:#0a58ca;color:#fff;padding:10px 16px;border:none;border-radius:8px;cursor:pointer;font-weight:700}
        .runBtn:hover{background:#084298}
        .example-card{background:#f8fbff;border:1px solid #e8f0ff;padding:12px;border-radius:8px;margin-bottom:12px}
        .task-list li{margin:10px 0}
      `}</style>

      <h1>HTML Images</h1>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>What is an image in HTML?</h2>
        <p>
          Images are added to web pages with the <code>&lt;img&gt;</code> tag. The
          <code>src</code> attribute points to the image URL and <code>alt</code> provides alternative text for accessibility and SEO.
        </p>
        <p className="note"><strong>Tip:</strong> Always include a meaningful <code>alt</code> attribute — it helps screen readers and shows text when image fails to load.</p>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Basic Example</h2>
        <div className="example-card">
          <pre>{`<img src="image.jpg" alt="Description of image">`}</pre>
          <div style={{ marginTop: 10 }}>
            <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" style={{ maxWidth: 320, borderRadius: 8 }} />
          </div>
        </div>

        <h3>Attributes</h3>
        <ul>
          <li><code>src</code> — image source URL</li>
          <li><code>alt</code> — alternative text (required)</li>
          <li><code>width</code> / <code>height</code> — set dimensions (pixels)</li>
          <li><code>title</code> — optional tooltip text</li>
          <li><code>loading="lazy"</code> — lazy-load images for performance</li>
        </ul>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Responsive Images (srcset & sizes)</h2>
        <p>
          Use <code>srcset</code> and <code>sizes</code> to provide different image files for different screen sizes. The browser picks the best one.
        </p>
        <pre>{`<img src="small.jpg" srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" sizes="(max-width:600px) 100vw, 800px" alt="...">`}</pre>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Figure & Figcaption</h2>
        <p>Wrap images with <code>&lt;figure&gt;</code> and add a caption using <code>&lt;figcaption&gt;</code>.</p>
        <pre>{`<figure>
  <img src="..." alt="...">
  <figcaption>Caption text</figcaption>
</figure>`}</pre>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Image as a Link</h2>
        <p>Wrap an <code>&lt;img&gt;</code> inside an <code>&lt;a&gt;</code> tag to make it clickable.</p>
        <pre>{`<a href="https://example.com"><img src="..." alt="..."></a>`}</pre>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Image Formats & Performance</h2>
        <ul>
          <li><b>JPEG</b> — good for photos (lossy, small size)</li>
          <li><b>PNG</b> — supports transparency (lossless)</li>
          <li><b>WebP/AVIF</b> — modern formats, better compression (use when possible)</li>
          <li>Use <code>loading="lazy"</code> and appropriate sizes to improve performance</li>
        </ul>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Multiple Live Examples</h2>

        <div className="example-card">
          <h4 style={{ margin: "6px 0" }}>Basic, sized, and lazy examples</h4>
          <div className="grid">
            <div style={{ maxWidth: 220 }}>
              <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" style={{ width: "100%", borderRadius: 8 }} />
              <div style={{ fontSize: 13, color: "#555", marginTop: 6 }}>Basic</div>
            </div>

            <div style={{ maxWidth: 220 }}>
              <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" width="200" height="140" style={{ objectFit: "cover", borderRadius: 8 }} />
              <div style={{ fontSize: 13, color: "#555", marginTop: 6 }}>Width & Height</div>
            </div>

            <div style={{ maxWidth: 220 }}>
              <img src="https://www.w3schools.com/html/img_girl.jpg" alt="Girl" loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
              <div style={{ fontSize: 13, color: "#555", marginTop: 6 }}>Lazy Loading</div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Try It Yourself</h2>
        <p>Type or paste HTML image code below and click <strong>Run Output</strong> to preview.</p>

        <textarea className="editor" value={code} onChange={(e) => setCode(e.target.value)} />

        <div style={{ marginTop: 10 }}>
          <button className="runBtn" onClick={runCode}>▶ Run Output</button>
        </div>

        <div style={{ marginTop: 14, borderRadius: 8, overflow: "hidden" }}>
          <div style={{ padding: 10, background: "#f7f9fc", border: "1px solid #e6eef7" }}>
            <strong>Output:</strong>
          </div>
          <iframe
            title="images-output"
            srcDoc={output}
            sandbox="allow-same-origin allow-scripts"
            style={{ width: "100%", height: 340, border: 0 }}
          />
        </div>
      </section>

      <section className="panel">
        <h2 style={{ marginTop: 0 }}>Practice Tasks (10)</h2>
        <ol className="task-list">
          <li><b>Basic image:</b> Insert an image with meaningful <code>alt</code> text.</li>
          <li><b>Size control:</b> Add an image and set <code>width</code> to 250px and maintain aspect ratio.</li>
          <li><b>Image link:</b> Make an image clickable to an external site (open in new tab).</li>
          <li><b>Figure caption:</b> Create a figure with an image and a caption below using <code>figcaption</code>.</li>
          <li><b>Responsive srcset:</b> Provide at least two srcset sources and test resizing the iframe.</li>
          <li><b>Lazy load:</b> Add <code>loading="lazy"</code> to a large image.</li>
          <li><b>Background image:</b> Create a div with a background image and overlay some text.</li>
          <li><b>Format test:</b> Show the same picture using JPEG and WebP (or fallback) and explain differences.</li>
          <li><b>Accessibility:</b> Add <code>alt</code>, <code>title</code>, and a short caption describing the image for screen readers.</li>
          <li><b>Final challenge:</b> Build a small responsive image gallery with 3 images using CSS grid/flex (inline styles okay).</li>
        </ol>

        <p style={{ marginTop: 12, color: "#0a58ca" }}><strong>Tip:</strong> Use the Try Editor above to build each task and run to preview. For remote images use HTTPS links.</p>
      </section>

      <section style={{ textAlign: "center", marginTop: 12 }}>
        <p style={{ color: "#555" }}>✅ Practice all tasks to master HTML images — paste each solution into the editor and run to check your work!</p>
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