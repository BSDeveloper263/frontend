import React, { useState } from "react";

const semanticTags = [
  {
    id: "header",
    title: "<header>",
    desc: "Defines introductory content, often containing a logo, site name, and navigation links.",
    note: "Use only once per page for the main header.",
    browser: "All modern browsers",
    code: `<header>
  <h1>My Website</h1>
  <nav>
    <a href='/'>Home</a>
    <a href='/about'>About</a>
  </nav>
</header>`
  },
  {
    id: "nav",
    title: "<nav>",
    desc: "Defines a set of navigation links.",
    note: "Typically used inside <header> or as a sidebar navigation.",
    browser: "All modern browsers",
    code: `<nav>
  <ul>
    <li><a href='/home'>Home</a></li>
    <li><a href='/blog'>Blog</a></li>
  </ul>
</nav>`
  },
  {
    id: "main",
    title: "<main>",
    desc: "Specifies the main content of the document. There should be only one <main> element per page.",
    note: "Helps screen readers and SEO to identify main content.",
    browser: "All modern browsers",
    code: `<main>
  <h2>Main Content</h2>
  <p>This is the main content area.</p>
</main>`
  },
  {
    id: "section",
    title: "<section>",
    desc: "Defines a thematic grouping of content.",
    note: "Use for grouping related content with a heading.",
    browser: "All modern browsers",
    code: `<section>
  <h3>Section Title</h3>
  <p>Content goes here.</p>
</section>`
  },
  {
    id: "article",
    title: "<article>",
    desc: "Represents independent content such as a blog post or news article.",
    note: "Can be used multiple times on a page.",
    browser: "All modern browsers",
    code: `<article>
  <h3>Article Heading</h3>
  <p>Article content goes here.</p>
</article>`
  },
  {
    id: "aside",
    title: "<aside>",
    desc: "Represents content aside from the main content, like a sidebar.",
    note: "Often used for sidebars, pull quotes, or advertisements.",
    browser: "All modern browsers",
    code: `<aside>
  <h4>Sidebar</h4>
  <p>Extra information goes here.</p>
</aside>`
  },
  {
    id: "figure",
    title: "<figure> & <figcaption>",
    desc: "Represents self-contained content like an image with a caption.",
    note: "Useful for illustrations, diagrams, or code snippets.",
    browser: "All modern browsers",
    code: `<figure>
  <img src='https://via.placeholder.com/150' alt='Scenic view'/>
  <figcaption>A beautiful view.</figcaption>
</figure>`
  },
  {
    id: "details",
    title: "<details> & <summary>",
    desc: "Specifies additional details that can be shown or hidden.",
    note: "User can toggle visibility by clicking the summary.",
    browser: "All modern browsers",
    code: `<details>
  <summary>More info</summary>
  <p>Extra information can be expanded.</p>
</details>`
  },
  {
    id: "mark",
    title: "<mark>",
    desc: "Highlights text.",
    note: "Used to emphasize search results or important words.",
    browser: "All modern browsers",
    code: `<p>This is a <mark>highlighted</mark> word.</p>`
  },
  {
    id: "time",
    title: "<time>",
    desc: "Represents a specific date or time.",
    note: "Use datetime attribute for machine-readable date/time.",
    browser: "All modern browsers",
    code: `<time datetime='2025-11-21'>November 21, 2025</time>`
  },
  {
    id: "footer",
    title: "<footer>",
    desc: "Represents footer content for its nearest sectioning content or page.",
    note: "Contains copyright, links, or contact info.",
    browser: "All modern browsers",
    code: `<footer>
  <p>© 2025 My Website</p>
  <a href='/contact'>Contact</a>
</footer>`
  }
];

export default function W3SemanticTutorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userCode, setUserCode] = useState(semanticTags[0].code);
  const [output, setOutput] = useState(semanticTags[0].code);

  const handleRun = () => setOutput(userCode);

  const handleSelectTag = (index) => {
    setActiveIndex(index);
    setUserCode(semanticTags[index].code);
    setOutput(semanticTags[index].code);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", padding: "20px", background: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", color: "#04AA6D", marginBottom: "20px" }}>
        HTML Semantic Tags - Try It Yourself
      </h1>

      {semanticTags.map((tag, idx) => (
        <div key={tag.id} style={{ marginBottom: "50px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 12px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#04AA6D" }}>{tag.title}</h2>
          <p>{tag.desc}</p>
          <p style={{ fontStyle: "italic", color: "#555" }}>Note: {tag.note}</p>
          <p style={{ fontStyle: "italic", color: "#555" }}>Browser Support: {tag.browser}</p>

          <textarea
            value={idx === activeIndex ? userCode : tag.code}
            onChange={e => setUserCode(e.target.value)}
            onClick={() => handleSelectTag(idx)}
            style={{ width: "100%", minHeight: "150px", fontFamily: "monospace", fontSize: "14px", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", marginBottom: "12px" }}
          />

          <button
            onClick={handleRun}
            style={{
              background: "#04AA6D",
              color: "white",
              border: "none",
              padding: "10px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
              marginBottom: "12px"
            }}
          >
            Run
          </button>

          <div style={{ background: "#f0f0f0", padding: "16px", borderRadius: "6px", minHeight: "150px" }}>
            <iframe
              title={`output-${tag.id}`}
              srcDoc={output}
              style={{ width: "100%", minHeight: "150px", border: "none" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
