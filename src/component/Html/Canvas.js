import React, { useEffect } from "react";

export default function CanvasTutorial() {
  useEffect(() => {
    // --- Example 1: Draw Rectangle ---
    const c1 = document.getElementById("canvas1");
    if (c1) {
      const ctx = c1.getContext("2d");
      ctx.fillStyle = "#04AA6D";
      ctx.fillRect(20, 20, 150, 100);
    }

    // --- Example 2: Draw Text ---
    const c2 = document.getElementById("canvas2");
    if (c2) {
      const ctx = c2.getContext("2d");
      ctx.font = "28px Arial";
      ctx.fillStyle = "#04AA6D";
      ctx.fillText("Hello Canvas!", 20, 50);
    }

    // --- Example 3: Draw Circle ---
    const c3 = document.getElementById("canvas3");
    if (c3) {
      const ctx = c3.getContext("2d");
      ctx.beginPath();
      ctx.arc(70, 70, 50, 0, 2 * Math.PI);
      ctx.fillStyle = "#04AA6D";
      ctx.fill();
      ctx.stroke();
    }
  }, []);

  return (
    <>
      <style>{`
        .page {
          padding: 20px;
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        .green-title {
          color: #04AA6D;
          font-weight: bold;
        }
        h1, h2 {
          color: #333;
        }
        .example-box {
          background: #f1f1f1;
          padding: 15px;
          border-left: 6px solid #04AA6D;
          margin: 25px 0;
        }
        code {
          background: #eee;
          padding: 10px;
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
        canvas {
          border: 1px solid #777;
          margin-top: 15px;
          background: #fff;
        }

        /* Responsive */
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
        <h1>HTML Canvas Tutorial</h1>
        <p>
          <b>Canvas</b> HTML ka ek powerful element hai jisme hum JavaScript ka
          use karke graphics, drawings, animations, charts, games, images, text
          wagaira bana sakte hain.
        </p>

        <hr />

        <h2 className="green-title">Canvas Kya Hota Hai?</h2>
        <p>
          <b>&lt;canvas&gt;</b> ek rectangular drawing area hota hai jisme hum
          JavaScript ke through shapes, images aur animations draw kar sakte hain.
        </p>

        <div className="example-box">
          <h3>Basic Canvas Syntax</h3>
          <code>{`
<canvas id="myCanvas" width="300" height="150"></canvas>

<script>
  const c = document.getElementById("myCanvas");
  const ctx = c.getContext("2d");
</script>
          `}</code>

          <canvas width="300" height="150"></canvas>
        </div>

        <hr />

        <h2 className="green-title">Canvas Kyu Use Karte Hai?</h2>

        <table>
          <thead>
            <tr>
              <th>Use Case</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Graphics Draw</td>
              <td>Rectangle, circle, lines, shapes easily draw kar sakte hain.</td>
            </tr>

            <tr>
              <td>Games</td>
              <td>2D games Canvas par banaye jaate hain like Chrome Dinosaur game.</td>
            </tr>

            <tr>
              <td>Animations</td>
              <td>Smooth animations drawFrame() ke through create hoti hain.</td>
            </tr>

            <tr>
              <td>Charts</td>
              <td>Chart.js, D3.js jaise libraries canvas par graphs draw karti hain.</td>
            </tr>

            <tr>
              <td>Image Editing</td>
              <td>Filters, cropping, coloring — sab Canvas par hota hai.</td>
            </tr>

            <tr>
              <td>Fast Rendering</td>
              <td>DOM elements se zyada fast hota hai graphical rendering.</td>
            </tr>
          </tbody>
        </table>

        <hr />

        <h2 className="green-title">Canvas Ke Benefits</h2>
        <ul>
          <li>Fast performance</li>
          <li>No extra plugins needed</li>
          <li>Game development friendly</li>
          <li>Animation support</li>
          <li>Chart creation</li>
          <li>Pixel-level control</li>
        </ul>

        <hr />

        {/* ---------------------- EXAMPLE 1 ---------------------- */}
        <h2 className="green-title">1. Rectangle Draw Example</h2>

        <div className="example-box">
          <code>{`
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

ctx.fillStyle = "#04AA6D";
ctx.fillRect(20, 20, 150, 100);
           `}</code>

          <canvas id="canvas1" width="300" height="150"></canvas>
        </div>

        {/* ---------------------- EXAMPLE 2 ---------------------- */}
        <h2 className="green-title">2. Text Draw Example</h2>

        <div className="example-box">
          <code>{`
ctx.font = "28px Arial";
ctx.fillStyle = "#04AA6D";
ctx.fillText("Hello Canvas!", 20, 50);
          `}</code>

          <canvas id="canvas2" width="300" height="100"></canvas>
        </div>

        {/* ---------------------- EXAMPLE 3 ---------------------- */}
        <h2 className="green-title">3. Circle Draw Example</h2>

        <div className="example-box">
          <code>{`
ctx.beginPath();
ctx.arc(70, 70, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#04AA6D";
ctx.fill();
ctx.stroke();
          `}</code>

          <canvas id="canvas3" width="200" height="150"></canvas>
        </div>

        <hr />

        <h2 className="green-title">Summary</h2>
        <p>Canvas ek super powerful tool hai — graphics, games, animations ke liye perfect.</p>
        <p>React me bhi Canvas same tarah use hota hai jaise HTML me.</p>
      </div>
    </>
  );
}
