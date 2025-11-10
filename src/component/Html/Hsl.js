import React, { useState } from "react";
import { Card, Typography, Input, Button } from "antd";

const { Title, Paragraph } = Typography;

export default function HSL() {
  const [code, setCode] = useState(`<h1 style="color:hsl(120, 100%, 50%)">Green Text</h1>`);
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(code);
  };

  return (
    <div
      style={{
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(135deg, #e0f7fa, #f3e5f5)",
        minHeight: "100vh",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "900px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "16px",
          background: "white",
          padding: "25px",
        }}
      >
        <Title level={2} style={{ textAlign: "center", color: "#4a148c", marginBottom: "10px" }}>
          🎨 HTML HSL Colors
        </Title>

        <Paragraph style={{ fontSize: "16px", color: "#333", marginBottom: "20px" }}>
          <b>HSL</b> stands for <b>Hue, Saturation, and Lightness</b>.  
          It’s a more human-friendly way to define colors.  
          Example: <code>hsl(120, 100%, 50%)</code> gives a bright green color.
        </Paragraph>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "20px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {[
            { color: "hsl(0, 100%, 50%)", label: "Red" },
            { color: "hsl(120, 100%, 50%)", label: "Green" },
            { color: "hsl(240, 100%, 50%)", label: "Blue" },
            { color: "hsl(60, 100%, 50%)", label: "Yellow" },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                backgroundColor: item.color,
              }}
            >
              {item.label}
            </div>
          ))}
        </div>

        <Paragraph style={{ fontSize: "16px", color: "#333", marginBottom: "20px" }}>
          🔹 <b>Hue</b>: The color degree on the color wheel (0–360).  
          🔹 <b>Saturation</b>: The intensity of the color (0%–100%).  
          🔹 <b>Lightness</b>: How light or dark the color is (0% black – 100% white).
        </Paragraph>

        <Title level={4}>💻 Try It Yourself</Title>

        <Input.TextArea
          rows={5}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{
            marginTop: "15px",
            fontFamily: "monospace",
            fontSize: "15px",
          }}
        />

        <Button
          type="primary"
          onClick={runCode}
          style={{
            marginTop: "10px",
            background: "linear-gradient(90deg, #673ab7, #9c27b0)",
            border: "none",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.target.style.background = "linear-gradient(90deg, #512da8, #7b1fa2)")
          }
          onMouseOut={(e) =>
            (e.target.style.background = "linear-gradient(90deg, #673ab7, #9c27b0)")
          }
        >
          Run Code
        </Button>

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
            minHeight: "80px",
            border: "1px solid #ddd",
          }}
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>
      </Card>
    </div>
  );
}
