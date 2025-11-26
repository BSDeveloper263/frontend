import React, { useState } from "react";

export default function InputTypesPage() {
  const [form, setForm] = useState({
    text: "",
    password: " ",
    email: "",
    url: "",
    tel: "",
    number: 5,
    range: 50,
    date: "",
    time: "",
    datetime: "",
    month: "",
    week: "",
    color: "#ff6600",
    checkboxA: false,
    radio: "option1",
    file: null,
    textarea: "",
    select: "option1",
    datalist: "",
  });

  function handleChange(e) {
    const { name, type, value, checked, files } = e.target;
    if (type === "checkbox") setForm((s) => ({ ...s, [name]: checked }));
    else if (type === "file") setForm((s) => ({ ...s, [name]: files[0] }));
    else setForm((s) => ({ ...s, [name]: value }));
  }

  return (
    <>
      <style>{`
        :root{
          --bg:#f6f9fc;
          --card:#fff;
          --muted:#6b7280;
          --accent:#06b6d4;
          --radius:12px;
        }
        body{font-family:Inter, Poppins, system-ui, sans-serif;}
        .page {
          background: var(--bg);
          padding: 30px;
          min-height:100vh;
        }
        .wrap {
          max-width:1100px;
          margin: 0 auto;
        }
        h1{
          font-size:28px;
          margin-bottom:6px;
        }
        p.lead{ color:var(--muted); margin-bottom:20px;}

        .grid {
          display:grid;
          grid-template-columns: 1fr 360px;
          gap:20px;
        }

        .card {
          background:var(--card);
          border-radius:var(--radius);
          padding:18px;
          box-shadow: 0 6px 20px rgba(10,20,30,0.06);
        }

        .left .section{ margin-bottom:18px; padding-bottom:10px; border-bottom:1px dashed #eee;}
        .section h3{ margin:0 0 8px 0; font-size:18px; color:#0f1724;}
        .muted{ color:var(--muted); font-size:14px; margin-bottom:10px;}

        .demo-row{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
        label.small{ font-size:13px; color:var(--muted); width:220px; }

        input[type="text"], input[type="password"], input[type="email"], input[type="url"],
        input[type="tel"], input[type="number"], input[type="date"], input[type="time"],
        input[type="datetime-local"], input[type="month"], input[type="week"], textarea,
        select, input[type="color"]{
          padding:10px 12px;
          border-radius:8px;
          border:1px solid #e6edf3;
          background:#fff;
          font-size:14px;
          min-width:180px;
        }

        input[type="range"]{ width:240px; }
        .small-note{ font-size:13px; color:var(--muted); margin-top:6px;}

        pre.snip{
          background:#0b1220;
          color:#dbeafe;
          padding:12px;
          border-radius:8px;
          overflow:auto;
          font-size:13px;
          margin-top:8px;
        }

        .right h3{ margin-top:0; }
        .summary-list{ font-size:14px; color:var(--muted); line-height:1.6; }

        .row { display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
        .btn{ background:var(--accent); color:white; border:none; padding:10px 14px; border-radius:8px; cursor:pointer;}
        .meta{ font-size:13px; color:var(--muted); }

        @media (max-width:980px){
          .grid{ grid-template-columns: 1fr; }
          .right{ order:2; }
        }

        /* accessibility focus */
        input:focus, textarea:focus, select:focus { outline: 3px solid rgba(6,182,212,0.12); box-shadow:0 6px 18px rgba(6,182,212,0.06); }
      `}</style>

      <div className="page">
        <div className="wrap">
          <h1>Form Input Types — Interactive Guide</h1>
          <p className="lead">W3Schools-style demo: हर input type के live examples, short explanation और code snippet. Try them on mobile/desktop to see behavior.</p>

          <div className="grid">
            {/* LEFT — examples */}
            <div className="left">
              {/* TEXT */}
              <div className="card section">
                <h3>Text</h3>
                <div className="muted">Basic single-line text input. Use for names, titles, etc.</div>
                <div className="demo-row">
                  <label className="small" htmlFor="text">Text:</label>
                  <input id="text" name="text" type="text" value={form.text} onChange={handleChange} placeholder="Enter text" />
                </div>
                <div className="small-note">Code:</div>
                <pre className="snip">{`<input type="text" name="text" placeholder="Enter text" />`}</pre>
              </div>

              {/* PASSWORD */}
              <div className="card section">
                <h3>Password</h3>
                <div className="muted">Hidden characters for passwords. Use minlength/maxlength for rules.</div>
                <div className="demo-row">
                  <label className="small" htmlFor="password">Password:</label>
                  <input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••" />
                </div>
                <div className="small-note">Code:</div>
                <pre className="snip">{`<input type="password" name="password" />`}</pre>
              </div>

              {/* EMAIL, URL, TEL */}
              <div className="card section">
                <h3>Email / URL / Tel</h3>
                <div className="muted">Semantic types with built-in validation and mobile keyboard hints.</div>
                <div className="demo-row">
                  <label className="small" htmlFor="email">Email:</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@site.com" />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="url">URL:</label>
                  <input id="url" name="url" type="url" value={form.url} onChange={handleChange} placeholder="https://example.com" />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="tel">Telephone:</label>
                  <input id="tel" name="tel" type="tel" value={form.tel} onChange={handleChange} placeholder="+91 98xxxx" />
                </div>
              </div>

              {/* NUMBER / RANGE */}
              <div className="card section">
                <h3>Number / Range</h3>
                <div className="muted">Number accepts numeric input; range is a slider.</div>
                <div className="demo-row">
                  <label className="small" htmlFor="number">Number:</label>
                  <input id="number" name="number" type="number" value={form.number} onChange={handleChange} min="0" max="100" />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="range">Range:</label>
                  <input id="range" name="range" type="range" value={form.range} onChange={handleChange} min="0" max="100" />
                  <div className="meta">{form.range}</div>
                </div>
              </div>

              {/* DATE & TIME */}
              <div className="card section">
                <h3>Date & Time</h3>
                <div className="muted">Date/time pickers provided by browser; format varies by device/locale.</div>
                <div className="demo-row">
                  <label className="small" htmlFor="date">Date:</label>
                  <input id="date" name="date" type="date" value={form.date} onChange={handleChange} />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="time">Time:</label>
                  <input id="time" name="time" type="time" value={form.time} onChange={handleChange} />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="datetime">Datetime-local:</label>
                  <input id="datetime" name="datetime" type="datetime-local" value={form.datetime} onChange={handleChange} />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="month">Month:</label>
                  <input id="month" name="month" type="month" value={form.month} onChange={handleChange} />
                </div>
                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="week">Week:</label>
                  <input id="week" name="week" type="week" value={form.week} onChange={handleChange} />
                </div>
              </div>

              {/* COLOR */}
              <div className="card section">
                <h3>Color</h3>
                <div className="muted">Color picker (desktop/mobile). Returns hex code.</div>
                <div className="demo-row">
                  <label className="small" htmlFor="color">Color:</label>
                  <input id="color" name="color" type="color" value={form.color} onChange={handleChange} />
                  <div className="meta">{form.color}</div>
                </div>
              </div>

              {/* CHECKBOX / RADIO */}
              <div className="card section">
                <h3>Checkbox / Radio</h3>
                <div className="muted">Checkbox for multiple selections; radio for single selection among options.</div>
                <div className="demo-row">
                  <label className="small">Subscribe:</label>
                  <input id="cb" name="checkboxA" type="checkbox" checked={form.checkboxA} onChange={handleChange} />
                </div>

                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small">Choose:</label>
                  <div className="row">
                    <label><input type="radio" name="radio" value="option1" checked={form.radio==="option1"} onChange={handleChange} /> Option 1</label>
                    <label style={{marginLeft:8}}><input type="radio" name="radio" value="option2" checked={form.radio==="option2"} onChange={handleChange} /> Option 2</label>
                  </div>
                </div>
              </div>

              {/* FILE */}
              <div className="card section">
                <h3>File</h3>
                <div className="muted">File upload. For images use accept="image/*". Files accessible via JS (File API).</div>
                <div className="demo-row">
                  <label className="small" htmlFor="file">Upload:</label>
                  <input id="file" name="file" type="file" onChange={handleChange} />
                  <div className="meta">{form.file ? form.file.name : "No file"}</div>
                </div>
              </div>

              {/* TEXTAREA, SELECT, DATALIST */}
              <div className="card section">
                <h3>Textarea / Select / Datalist</h3>
                <div className="muted">Multi-line input, dropdown select, and suggestions via datalist.</div>

                <div className="demo-row">
                  <label className="small" htmlFor="textarea">Textarea:</label>
                  <textarea id="textarea" name="textarea" rows="3" value={form.textarea} onChange={handleChange} style={{minWidth:220}} />
                </div>

                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="select">Select:</label>
                  <select id="select" name="select" value={form.select} onChange={handleChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small" htmlFor="datalist">Datalist:</label>
                  <input id="datalist" name="datalist" list="cities" value={form.datalist} onChange={handleChange} placeholder="Start typing..." />
                  <datalist id="cities">
                    <option value="Mumbai" />
                    <option value="Delhi" />
                    <option value="Bengaluru" />
                    <option value="Indore" />
                    <option value="Pune" />
                  </datalist>
                </div>
              </div>

              {/* OUTPUT / PROGRESS / METER */}
              <div className="card section">
                <h3>Output / Progress / Meter</h3>
                <div className="muted">Non-editable output, progress bar, and meter for scalar measurements.</div>

                <div className="demo-row">
                  <label className="small">Progress:</label>
                  <progress value="45" max="100">45%</progress>
                </div>

                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small">Meter:</label>
                  <meter value="0.6" min="0" max="1">60%</meter>
                </div>

                <div className="demo-row" style={{marginTop:8}}>
                  <label className="small">Output:</label>
                  <output name="result">Example output</output>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="card section">
                <h3>Buttons</h3>
                <div className="muted">Button types: button, submit, reset. Useful in forms.</div>
                <div className="row" style={{marginTop:8}}>
                  <button className="btn" type="button" onClick={()=>alert("Button clicked")}>Button</button>
                  <button className="btn" type="reset" onClick={()=>setForm({
                    text:"", password:"", email:"", url:"", tel:"", number:5, range:50, date:"",
                    time:"", datetime:"", month:"", week:"", color:"#ff6600", checkboxA:false, radio:"option1",
                    file:null, textarea:"", select:"option1", datalist:""
                  })}>Reset</button>
                </div>
              </div>
            </div>

            {/* RIGHT — summary & tips */}
            <div className="right">
              <div className="card">
                <h3>Quick Reference & Tips</h3>
                <ul className="summary-list">
                  <li><strong>type="email"</strong>: browser validates basic email format.</li>
                  <li><strong>type="tel"</strong>: no validation; use pattern for formatting.</li>
                  <li><strong>type="number"</strong>: use min, max, step for constraints.</li>
                  <li><strong>type="date/time"</strong>: UI differs across browsers/devices.</li>
                  <li><strong>inputmode & autocomplete</strong>: improve mobile keyboard & UX.</li>
                  <li><strong>datalist</strong>: suggestion list, not strict validation.</li>
                  <li><strong>use aria-label/aria-describedby</strong> for screen reader accessibility.</li>
                </ul>

                <h3 style={{marginTop:14}}>Example: add validation</h3>
                <div className="muted">HTML snippet to enforce required email and pattern for phone:</div>
                <pre className="snip">{`<input type="email" name="email" required />
                 <input type="tel" name="phone" pattern="[0-9]{10}" placeholder="10 digits" />`}</pre>

                <h3 style={{marginTop:14}}>Keyboard/input hints</h3>
                <div className="muted">Use <code>inputmode</code> on inputs to suggest keyboard type:</div>
                <pre className="snip">{`<input type="text" inputmode="numeric" pattern="[0-9]*" />`}</pre>

                <h3 style={{marginTop:14}}>Accessibility</h3>
                <div className="muted">Always associate <code>&lt;label&gt;</code> with inputs and provide descriptive placeholders and ARIA attributes where needed.</div>

                <div style={{marginTop:14}}>
                  <button className="btn" onClick={()=>window.scrollTo({top:0, behavior:"smooth"})}>Back to top</button>
                </div>
              </div>

              <div style={{height:18}} />
              <div className="card">
                <h3>Your current values</h3>
                <div className="muted">Live preview of the form state (useful for debugging)</div>
                <pre className="snip">{JSON.stringify(form, null, 2)}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
