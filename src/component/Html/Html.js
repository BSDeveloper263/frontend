// import React, { useState } from "react";
// import { Select } from "antd";

// // HTML Topic Components
// import Introduction from "./Introduction/Introduction";
// import Elements from "./Element/Element";
// // import Attributes from "../html/Attributes";
// // import Headings from "../html/Headings";
// // import Paragraphs from "../html/Paragraphs";
// // import Links from "../html/Links";

// const { Option } = Select;

// export default function HTMLTopics() {
//   const [selectedTopic, setSelectedTopic] = useState("");

//   const onChange = (topic) => {
//     setSelectedTopic(topic);
//   };

//   return (
//     <>
//       <div
//         style={{
//           width: "100%",
//           background: "#f8fafc",
//           minHeight: "100vh",
//           padding: "20px 0",
//         }}
//       >
//         <h2
//           style={{
//             marginLeft: "2%",
//             fontWeight: "bold",
//             fontSize: 22,
//             color: "#1d3557",
//           }}
//         >
//           Select HTML Topic
//         </h2>

//         <Select
//           onChange={onChange}
//           showSearch
//           style={{
//             width: "95%",
//             marginLeft: "2%",
//             marginTop: "10px",
//             marginBottom: "20px",
//           }}
//           placeholder="Select HTML Topic"
//         >
//           <Option value="introduction">Introduction</Option>
//            <Option value="elements">Elements</Option>
//           {/* <Option value="attributes">Attributes</Option> */}
//           {/* <Option value="headings">Headings</Option> */}
//           {/* <Option value="paragraphs">Paragraphs</Option> */}
//           {/* <Option value="links">Links</Option>  */}
//         </Select>

//         {/* Render selected topic */}
//         <div
//           style={{
//             background: "#fff",
//             width: "95%",
//             margin: "0 auto",
//             padding: "25px",
//             borderRadius: "10px",
//             boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//             fontSize: 17,
//             lineHeight: 1.7,
//           }}
//         >
//           {selectedTopic === "introduction" && <Introduction />}
//           {selectedTopic === "elements" && <Elements />} 
//           {selectedTopic === "attributes" && <Attributes />}
//           {selectedTopic === "headings" && <Headings />}
//           {selectedTopic === "paragraphs" && <Paragraphs />}
//           {selectedTopic === "links" && <Links />} 
//            {selectedTopic === "attribute" && <Attribute />} 


//           {!selectedTopic && (
//             <p style={{ textAlign: "center", color: "#888", marginTop: 20 }}>
//               📘 Select an HTML topic from the dropdown above to view details.
//             </p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

import React from 'react'

function Html() {
  return (
    <div>Html</div>
  )
}

export default Html