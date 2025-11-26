import React, { useState } from "react";

export default function HtmlRgbColor() {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const rgbColor = `rgb(${red}, ${green}, ${blue})`;

  const boxStyle = {
    width: "100%",
    height: "100px",
    backgroundColor: rgbColor,
    borderRadius: "8px",
    border: "2px solid #ccc",
    marginTop: "10px",
  };

  const sliderStyle = {
    width: "100%",
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Poppins, sans-serif" }}>
      <h1 style={{ color: "#04AA6D" }}>HTML RGB Colors</h1>
      <p>
        RGB color values are supported in all browsers.  
        An RGB color value represents **RED**, **GREEN**, and **BLUE** light sources.
      </p>

      <div style={{ backgroundColor: "#f1f1f1", padding: "15px", borderRadius: "10px" }}>
        <h2>RGB Syntax:</h2>
        <pre style={{ background: "#fff", padding: "10px", borderRadius: "5px" }}>
{`rgb(red, green, blue)
Each parameter defines the intensity of the color between 0 and 255.`}
        </pre>
        <p><b>Example:</b></p>
        <pre style={{ background: "#fff", padding: "10px", borderRadius: "5px" }}>
{`rgb(255, 0, 0) → Red
rgb(0, 255, 0) → Green
rgb(0, 0, 255) → Blue`}
        </pre>
      </div>

      <h2 style={{ marginTop: "20px" }}>RGB Color Examples:</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
        <div style={{ background: "rgb(255,0,0)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(0,255,0)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(0,0,255)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(255,255,0)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(0,255,255)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(255,0,255)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(192,192,192)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(128,128,128)", height: "80px", borderRadius: "8px" }}></div>
        <div style={{ background: "rgb(0,0,0)", height: "80px", borderRadius: "8px" }}></div>
      </div>

      <h2 style={{ marginTop: "30px" }}>🎨 Try It Yourself</h2>
      <p>Move the sliders to change RGB color combination:</p>

      <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}>
        <label>Red: {red}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={red}
          onChange={(e) => setRed(e.target.value)}
          style={sliderStyle}
        />

        <label>Green: {green}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={green}
          onChange={(e) => setGreen(e.target.value)}
          style={sliderStyle}
        />

        <label>Blue: {blue}</label>
        <input
          type="range"
          min="0"
          max="255"
          value={blue}
          onChange={(e) => setBlue(e.target.value)}
          style={sliderStyle}
        />

        <div style={boxStyle}></div>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          Current Color Code: <span style={{ color: rgbColor }}>{rgbColor}</span>
        </p>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h2>Why RGB Colors Are Important?</h2>
        <ul>
          <li>They are used in **all displays** (TVs, monitors, web browsers).</li>
          <li>They give **millions of color combinations** using just three values.</li>
          <li>Used in **web design**, **digital art**, and **UI themes**.</li>
          <li>RGB model is **additive**, meaning combining lights gives white color.</li>
        </ul>
      </div>
    </div>
  );
}
