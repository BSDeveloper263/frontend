import React from "react";

export default function InputTutorial() {
  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
        }
        .page {
          padding: 20px;
          line-height: 1.6;
        }
        h1, h2 {
          color: #333;
        }
        .green-title {
          color: #04AA6D;
          font-weight: bold;
        }
        .example-box {
          background: #f1f1f1;
          padding: 15px;
          border-left: 6px solid #04AA6D;
          margin: 20px 0;
        }
        code {
          background: #eee;
          padding: 6px;
          display: block;
          margin: 10px 0;
          white-space: pre-line;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }
        table, th, td {
          border: 1px solid #999;
        }
        th, td {
          padding: 10px;
          text-align: left;
        }
        input, button {
          padding: 8px;
          margin: 6px 0;
          width: 100%;
        }

        /* Responsive Table */
        @media (max-width: 600px) {
          table, thead, tbody, th, td, tr {
            display: block;
          }
          th {
            background: #ddd;
          }
          td {
            border: none;
            border-bottom: 1px solid #ccc;
          }
        }
      `}</style>

      <div className="page">
        <h1>HTML Input Types & Input Attributes</h1>
        <p>
          Is React page me aapko <b>Input Types</b> aur <b>Input Attributes</b> 
          W3Schools style me ek hi jagah milenge.
        </p>

        <hr />

        {/* ----------------- INPUT TYPES ----------------- */}
        <h2 className="green-title">HTML Input Types</h2>

        <p>HTML me bahut saare input types hote hain. Niche common types listed hain:</p>

        <table>
          <thead>
            <tr>
              <th>Input Type</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>text</td><td>Normal text input</td></tr>
            <tr><td>email</td><td>Email validation ke sath</td></tr>
            <tr><td>password</td><td>Hidden characters</td></tr>
            <tr><td>number</td><td>Only numbers</td></tr>
            <tr><td>date</td><td>Date picker</td></tr>
            <tr><td>time</td><td>Time picker</td></tr>
            <tr><td>color</td><td>Color picker</td></tr>
            <tr><td>checkbox</td><td>Multiple selection</td></tr>
            <tr><td>radio</td><td>Single selection</td></tr>
            <tr><td>file</td><td>File upload</td></tr>
            <tr><td>range</td><td>Slider input</td></tr>
          </tbody>
        </table>

        <h3>Example:</h3>

        <div className="example-box">
          <code>{`
<input type="text">
<input type="email">
<input type="password">
<input type="number">
<input type="date">
<input type="color">
          `}</code>

          <form>
            <input type="text" placeholder="Text input" />
            <input type="email" placeholder="Email input" />
            <input type="password" placeholder="Password" />
            <input type="number" placeholder="Number" />
            <input type="date" />
            <input type="color" />
          </form>
        </div>

        <hr />

        {/* ----------------- INPUT ATTRIBUTES ----------------- */}
        <h2 className="green-title">HTML Input Attributes</h2>

        <p>Attributes input ke behavior ko control karte hain:</p>

        <table>
          <thead>
            <tr>
              <th>Attribute</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>value</td><td>Default value</td></tr>
            <tr><td>placeholder</td><td>Hint text</td></tr>
            <tr><td>required</td><td>Mandatory field</td></tr>
            <tr><td>readonly</td><td>Read only input</td></tr>
            <tr><td>disabled</td><td>Disable input</td></tr>
            <tr><td>name</td><td>Backend name</td></tr>
            <tr><td>maxlength</td><td>Max characters</td></tr>
            <tr><td>min / max</td><td>Min/Max values</td></tr>
            <tr><td>pattern</td><td>Regex validation</td></tr>
            <tr><td>autocomplete</td><td>On/Off</td></tr>
            <tr><td>autofocus</td><td>Focus on load</td></tr>
            <tr><td>step</td><td>Number step size</td></tr>
          </tbody>
        </table>

        <h3>Example:</h3>

        <div className="example-box">
          <code>{`
<input placeholder="Enter Name" required>
<input type="number" min="1" max="10">
<input value="Read Only" readonly>
<input type="email" autocomplete="off">
          `}</code>

          <form>
            <input type="text" placeholder="Enter Name" required />
            <input type="number" min="1" max="100" placeholder="Age 1-100" />
            <input type="text" value="Cannot edit this" readOnly />
            <input type="email" placeholder="Email" autoComplete="off" />
          </form>
        </div>

        <hr />

        {/* ----------------- FINAL BIG FORM ----------------- */}
        <h2 className="green-title">Final Combined Form</h2>

        <div className="example-box">
          <form>
            <input type="text" placeholder="Full Name" required maxLength="25" />

            <input type="email" placeholder="Email Address" required autoComplete="off" />

            <input
              type="password"
              placeholder="Password (min 6 chars)"
              minLength="6"
              required
            />

            <input type="number" min="1" max="120" placeholder="Age" />

            <input type="date" />

            <input type="color" />

            <input
              type="text"
              pattern="[A-Za-z]+"
              title="Only letters allowed"
              placeholder="Letters Only"
            />

            <input type="text" value="Read Only Value" readOnly />

            <input type="text" value="Disabled Input" disabled />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
