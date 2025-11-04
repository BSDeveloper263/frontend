// import React, { useState } from "react";
// import {
//   Layout,
//   Menu,
//   Button,
//   Avatar,
//   Dropdown,
//   Space,
//   message,
// } from "antd";
// import {
//   MenuOutlined,
//   CloseOutlined,
//   DashboardOutlined,
//   Html5Outlined,
//   BgColorsOutlined,
//   CodeOutlined,
//   AppstoreOutlined,
//   UserOutlined,
//   LogoutOutlined,
//   LoginOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons";

// const { Header, Sider, Content } = Layout;
// const { SubMenu } = Menu;

// export default function DashboardLayout() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [activeContent, setActiveContent] = useState("Welcome");
//   const user = { username: "Yashvi" }; // demo user
//   const darkBlueGradient = "linear-gradient(180deg, #0d1b2a, #1b263b, #1d3557)";

//   // HTML Content topics
//   const htmlTopics = {
//     introduction:
//       "HTML (HyperText Markup Language) is the standard language for creating webpages. It describes the structure of a web page using elements represented by tags.",
//     elements:
//       "HTML elements are building blocks of web pages. They are defined by start and end tags like <p>...</p>.",
//     attributes:
//       "HTML attributes provide additional information about elements, such as id, class, src, href, etc.",
//     headings:
//       "HTML headings are defined with <h1> to <h6> tags. <h1> defines the most important heading.",
//     paragraph:
//       "HTML paragraphs are defined with the <p> tag. Browsers automatically add some space before and after paragraphs.",
//     links:
//       "HTML links are defined with the <a> tag. You can use the href attribute to define the destination URL.",
//   };

//   const handleMenuClick = (topicKey, label) => {
//     setActiveContent(htmlTopics[topicKey] || `You clicked on ${label}`);
//   };

//   const dropdownMenu = (
//     <Menu>
//       <Menu.Item key="profile" icon={<UserOutlined />}>
//         My Profile
//       </Menu.Item>
//       <Menu.Item
//         key="logout"
//         icon={<LogoutOutlined />}
//         onClick={() => message.success("Logged out successfully!")}
//       >
//         Logout
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <Layout style={{ minHeight: "100vh", transition: "all 0.4s ease" }}>
//       {/* Sidebar */}
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         trigger={null}
//         width={220}
//         style={{
//           background: darkBlueGradient,
//           color: "#fff",
//           position: "fixed",
//           height: "100vh",
//           left: 0,
//           top: 0,
//           zIndex: 100,
//           boxShadow: "4px 0 10px rgba(0,0,0,0.2)",
//           transition: "all 0.4s ease",
//         }}
//       >
//         <div
//           style={{
//             padding: "20px",
//             color: "#ffb703",
//             textAlign: "center",
//             fontWeight: "bold",
//             fontSize: 20,
//             letterSpacing: 1,
//           }}
//         >
//           ⚡ {!collapsed && "Yashvitech Dashboard"}
//         </div>

//         <Menu
//           theme="dark"
//           mode="inline"
//           style={{
//             background: "transparent",
//             color: "#fff",
//             border: "none",
//             transition: "all 0.3s ease",
//           }}
//         >
//           <Menu.Item
//             key="dashboard"
//             icon={<DashboardOutlined />}
//             onClick={() => setActiveContent("Welcome to the Developer Dashboard!")}
//           >
//             {!collapsed && "Dashboard"}
//           </Menu.Item>

//           <SubMenu
//             key="html"
//             icon={<Html5Outlined />}
//             title={!collapsed && "HTML"}
//             style={{
//               background: "rgba(255,255,255,0.05)",
//               borderRadius: 6,
//             }}
//           >
//             <Menu.Item key="intro" onClick={() => handleMenuClick("introduction", "Introduction")}>
//               Introduction
//             </Menu.Item>
//             <Menu.Item key="elements" onClick={() => handleMenuClick("elements", "Elements")}>
//               Elements
//             </Menu.Item>
//             <Menu.Item key="attributes" onClick={() => handleMenuClick("attributes", "Attributes")}>
//               Attributes
//             </Menu.Item>
//             <Menu.Item key="headings" onClick={() => handleMenuClick("headings", "Headings")}>
//               Headings
//             </Menu.Item>
//             <Menu.Item key="paragraph" onClick={() => handleMenuClick("paragraph", "Paragraphs")}>
//               Paragraphs
//             </Menu.Item>
//             <Menu.Item key="links" onClick={() => handleMenuClick("links", "Links")}>
//               Links
//             </Menu.Item>
//           </SubMenu>

//           <Menu.Item
//             key="css"
//             icon={<BgColorsOutlined />}
//             onClick={() => setActiveContent("CSS Section Coming Soon...")}
//           >
//             {!collapsed && "CSS"}
//           </Menu.Item>

//           <Menu.Item
//             key="js"
//             icon={<CodeOutlined />}
//             onClick={() => setActiveContent("JavaScript Section Coming Soon...")}
//           >
//             {!collapsed && "JavaScript"}
//           </Menu.Item>

//           <Menu.Item
//             key="react"
//             icon={<AppstoreOutlined />}
//             onClick={() => setActiveContent("React Section Coming Soon...")}
//           >
//             {!collapsed && "React"}
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       {/* Main Layout */}
//       <Layout
//         style={{
//           marginLeft: collapsed ? 80 : 220,
//           transition: "all 0.4s ease",
//           minHeight: "100vh",
//         }}
//       >
//         {/* Header */}
//         <Header
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             background: darkBlueGradient,
//             padding: "0 20px",
//             boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//             height: 64,
//           }}
//         >
//           <Space align="center">
//             {/* Toggle Button */}
//             <div
//               onClick={() => setCollapsed(!collapsed)}
//               style={{
//                 width: 42,
//                 height: 42,
//                 borderRadius: 8,
//                 background: "rgba(255,255,255,0.1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//               }}
//             >
//               {!collapsed ? (
//                 <MenuOutlined style={{ fontSize: 22, color: "#ffb703" }} />
//               ) : (
//                 <CloseOutlined style={{ fontSize: 22, color: "#ffb703" }} />
//               )}
//             </div>
//             <h2
//               style={{
//                 color: "#ffb703",
//                 fontSize: 20,
//                 margin: 0,
//                 marginLeft: 10,
//               }}
//             >
//               Developer Dashboard
//             </h2>
//           </Space>

//           {/* Right Avatar */}
//           <Dropdown overlay={dropdownMenu} placement="bottomRight">
//             <Avatar
//               size={40}
//               style={{
//                 background: "#ffb703",
//                 cursor: "pointer",
//                 fontSize: 18,
//                 border: "2px solid #fff",
//               }}
//             >
//               {user.username[0].toUpperCase()}
//             </Avatar>
//           </Dropdown>
//         </Header>

//         {/* Content */}
//         <Content
//           style={{
//             padding: 30,
//             background: "#f8fafc",
//             minHeight: "calc(100vh - 64px)",
//             transition: "all 0.3s ease",
//           }}
//         >
//           <div
//             style={{
//               background: "#fff",
//               borderRadius: 12,
//               padding: 30,
//               boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               fontSize: 17,
//               lineHeight: 1.8,
//               color: "#333",
//             }}
//           >
//             {activeContent}
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }


// import React, { useState } from "react";

// // W3-like full dashboard (HTML + CSS + JavaScript + React + Python)
// // Single-file React component. Paste as src/App.js in a create-react-app project.
// // Uses inline styles inside a <style> tag so no external CSS file required.

// export default function App() {
//   const categories = {
//     HTML: {
//       title: "HTML",
//       topics: [
//         {
//           id: "intro",
//           title: "Introduction",
//           content: `
// <h2>What is HTML?</h2>
// <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a webpage using elements (tags) such as <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, and <code>&lt;a&gt;</code>.</p>
// <h3>Simple example</h3>
// <pre>&lt;!doctype html&gt;
// &lt;html&gt;
//   &lt;head&gt;
//     &lt;title&gt;My page&lt;/title&gt;
//   &lt;/head&gt;
//   &lt;body&gt;
//     &lt;h1&gt;Hello, world!&lt;/h1&gt;
//     &lt;p&gt;This is a paragraph.&lt;/p&gt;
//   &lt;/body&gt;
// &lt;/html&gt;</pre>
// `
//         },
//         {
//           id: "editors",
//           title: "HTML Editors",
//           content: `
// <p>You can write HTML in any text editor: VS Code, Sublime Text, Atom, Notepad++ or even Notepad. Use browser DevTools to experiment and inspect HTML live.</p>
// `
//         },
//         {
//           id: "doctype",
//           title: "Doctype",
//           content: `
// <p>The <code>&lt;!doctype html&gt;</code> declaration defines this document to be HTML5 and helps browsers render the page correctly.</p>
// `
//         },
//         {
//           id: "elements",
//           title: "Elements & Tags",
//           content: `
// <p>An HTML element usually has an opening tag and a closing tag: <code>&lt;p&gt;...&lt;/p&gt;</code>. Some tags are self-closing like <code>&lt;img&gt;</code> or <code>&lt;br&gt;</code>.</p>
// `
//         },
//         {
//           id: "attributes",
//           title: "Attributes",
//           content: `
// <p>Attributes provide additional information about elements. Example: <code>&lt;a href=\"https://example.com\" target=\"_blank\"&gt;Link&lt;/a&gt;</code>.</p>
// `
//         },
//         {
//           id: "headings",
//           title: "Headings",
//           content: `
// <p>Headings range from <code>&lt;h1&gt;</code> (most important) to <code>&lt;h6&gt;</code> (least important). Use them to structure content.</p>
// `
//         },
//         {
//           id: "paragraphs",
//           title: "Paragraphs",
//           content: `
// <p>Use the <code>&lt;p&gt;</code> tag for paragraphs. Browsers add margin around paragraphs by default.</p>
// `
//         },
//         {
//           id: "formatting",
//           title: "Text Formatting",
//           content: `
// <p>Common formatting tags: <code>&lt;b&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;small&gt;</code>.</p>
// `
//         },
//         {
//           id: "links",
//           title: "Links",
//           content: `
// <p>Use the <code>&lt;a&gt;</code> tag to create links.</p>
// <pre>&lt;a href=\"https://www.example.com\"&gt;Visit example.com&lt;/a&gt;</pre>
// `
//         },
//         {
//           id: "images",
//           title: "Images",
//           content: `
// <p>Images are added with the <code>&lt;img&gt;</code> tag and the <code>src</code> attribute. Always include <code>alt</code> text for accessibility.</p>
// <pre>&lt;img src=\"/images/photo.jpg\" alt=\"A description\" width=\"300\" /&gt;</pre>
// `
//         },
//         {
//           id: "tables",
//           title: "Tables",
//           content: `
// <p>HTML tables: <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code> (row), <code>&lt;th&gt;</code> (header), <code>&lt;td&gt;</code> (cell).</p>
// <pre>&lt;table&gt;
//   &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;/tr&gt;
//   &lt;tr&gt;&lt;td&gt;Alice&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
// &lt;/table&gt;</pre>
// `
//         },
//         {
//           id: "lists",
//           title: "Lists",
//           content: `
// <p>Ordered lists: <code>&lt;ol&gt;</code>. Unordered lists: <code>&lt;ul&gt;</code>. Each item uses <code>&lt;li&gt;</code>.</p>
// <pre>&lt;ol&gt;
//   &lt;li&gt;First&lt;/li&gt;
//   &lt;li&gt;Second&lt;/li&gt;
// &lt;/ol&gt;</pre>
// `
//         },
//         {
//           id: "forms",
//           title: "Forms",
//           content: `
// <p>Forms collect user input. Use <code>&lt;form&gt;</code>, and inside it input controls like <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;button&gt;</code>.</p>
// <pre>&lt;form action=\"/submit\" method=\"post\"&gt;
//   &lt;label&gt;Name: &lt;input type=\"text\" name=\"name\" /&gt;&lt;/label&gt;
//   &lt;button type=\"submit\"&gt;Send&lt;/button&gt;
// &lt;/form&gt;</pre>
// `
//         },
//         {
//           id: "input-types",
//           title: "Input Types",
//           content: `
// <p>Common input types: <code>text</code>, <code>email</code>, <code>password</code>, <code>number</code>, <code>date</code>, <code>checkbox</code>, <code>radio</code>, <code>file</code>.</p>
// `
//         },
//         {
//           id: "semantics",
//           title: "Semantic Elements",
//           content: `
// <p>Semantic HTML provides meaning: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>.</p>
// `
//         },
//         {
//           id: "media",
//           title: "Audio & Video",
//           content: `
// <p>Use <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> to embed media.</p>
// <pre>&lt;video controls width=\"480\"&gt;
//   &lt;source src=\"movie.mp4\" type=\"video/mp4\"&gt;
//   Your browser does not support the video tag.
// &lt;/video&gt;</pre>
// `
//         },
//         {
//           id: "iframes",
//           title: "Iframes",
//           content: `
// <p>Iframes embed other pages: <code>&lt;iframe src=\"https://example.com\" width=\"600\" height=\"400\"&gt;&lt;/iframe&gt;</code>.</p>
// `
//         },
//         {
//           id: "elements-inline-block",
//           title: "Inline vs Block",
//           content: `
// <p>Block elements take full width and start on a new line (e.g., <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>). Inline elements do not start on a new line (e.g., <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</p>
// `
//         },
//         {
//           id: "comments",
//           title: "Comments",
//           content: `
// <p>Comments are added with <code>&lt;!-- comment here --&gt;</code> and are not displayed in the browser.</p>
// `
//         },
//         {
//           id: "entities",
//           title: "HTML Entities",
//           content: `
// <p>Use entities for reserved characters: <code>&amp;lt;</code> for <code>&lt;</code>, <code>&amp;gt;</code> for <code>&gt;</code>, <code>&amp;amp;</code> for <code>&amp;</code>.</p>
// `
//         },
//         {
//           id: "layout-div-span",
//           title: "Layout: div & span",
//           content: `
// <p><code>&lt;div&gt;</code> is a block-level container. <code>&lt;span&gt;</code> is an inline container. They are used to group elements for styling with CSS.</p>
// `
//         }
//       ]
//     },
//     CSS: {
//       title: "CSS",
//       topics: [
//         { id: "css-intro", title: "Introduction", content: `<p>CSS (Cascading Style Sheets) styles HTML content. Link with <code>&lt;link rel=\"stylesheet\" href=\"styles.css\"/&gt;</code> or use inline <code>style</code> attribute.</p>` },
//         { id: "selectors", title: "Selectors", content: `<p>Selectors target elements (type, class <code>.class</code>, id <code>#id</code>, attribute selectors, pseudo-classes).</p>` },
//         { id: "box-model", title: "Box Model", content: `<p>Every element has margin, border, padding and content area. Understanding the box model is essential for layout.</p>` },
//         { id: "flexbox", title: "Flexbox", content: `<p>Flexbox is a one-dimensional layout model for arranging items in rows or columns using <code>display: flex;</code>.</p>` },
//         { id: "grid", title: "Grid", content: `<p>CSS Grid provides a two-dimensional layout system using <code>display: grid;</code> and grid-template properties.</p>` }
//       ]
//     },
//     JavaScript: {
//       title: "JavaScript",
//       topics: [
//         { id: "js-intro", title: "Introduction", content: `<p>JavaScript is a programming language for the web. It can change HTML content, handle events, and communicate with servers.</p>` },
//         { id: "dom", title: "DOM Manipulation", content: `<p>Use <code>document.querySelector</code>, <code>addEventListener</code>, and modify <code>innerHTML</code> to manipulate the page.</p>` },
//         { id: "fetch", title: "Fetch / AJAX", content: `<p>Use <code>fetch()</code> or libraries like Axios to call APIs and update the UI asynchronously.</p>` }
//       ]
//     },
//     React: {
//       title: "React",
//       topics: [
//         { id: "react-intro", title: "Introduction", content: `<p>React is a JavaScript library for building user interfaces with components. It uses JSX to describe UI.</p>` },
//         { id: "components", title: "Components", content: `<p>Components are reusable pieces of UI. Use function components and hooks like <code>useState</code> and <code>useEffect</code>.</p>` },
//         { id: "state-props", title: "State & Props", content: `<p>Props pass data to components. State holds local data inside a component.</p>` }
//       ]
//     },
//     Python: {
//       title: "Python",
//       topics: [
//         { id: "py-intro", title: "Introduction", content: `<p>Python is a versatile, readable programming language used for web development, data science, scripting and more.</p>` },
//         { id: "py-syntax", title: "Syntax Basics", content: `<p>Indentation defines blocks. Use <code>def</code> to create functions, and <code>print()</code> to output text.</p>` }
//       ]
//     }
//   };

//   // initial selected category and topic
//   const [selectedCategory, setSelectedCategory] = useState("HTML");
//   const initialTopic = categories["HTML"].topics[0].id;
//   const [selectedTopic, setSelectedTopic] = useState(initialTopic);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
//   const [expandedCategory, setExpandedCategory] = useState("HTML");
//   const [query, setQuery] = useState("");

//   // Helper to find topic object
//   const getTopicObj = (cat, tid) => {
//     const t = categories[cat].topics.find((x) => x.id === tid);
//     return t || categories[cat].topics[0];
//   };

//   const topicObj = getTopicObj(selectedCategory, selectedTopic);

//   return (
//     <div className={`app ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
//       <style>{`
//         *{box-sizing:border-box}
//         body, #root{height:100%; margin:0; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial}
//         .app{display:flex; height:100vh; background: linear-gradient(180deg,#f8fafc,#ffffff)}

//         /* SIDEBAR */
//         .sidebar{width:280px; background:#0b1220; color:#fff; padding:18px; display:flex; flex-direction:column; gap:14px; transition:width .2s ease}
//         .sidebar-collapsed .sidebar{width:72px}
//         .brand{display:flex; align-items:center; gap:12px}
//         .logo{width:44px;height:44px;border-radius:8px;background:linear-gradient(135deg,#06b6d4,#7c3aed);display:grid;place-items:center;font-weight:800}
//         .brand h1{font-size:16px;margin:0}
//         .brand small{color:rgba(255,255,255,.7);font-size:12px}

//         .searchbar{background:rgba(255,255,255,.06);padding:8px;border-radius:10px;display:flex;align-items:center;gap:8px}
//         .searchbar input{background:transparent;border:0;outline:none;color:#fff}

//         .cat{margin-top:6px}
//         .cat button.catbtn{width:100%;background:transparent;border:0;color:inherit;padding:10px;border-radius:8px;display:flex;justify-content:space-between;align-items:center;cursor:pointer}
//         .cat button.catbtn:hover{background:rgba(255,255,255,.02)}
//         .topics{margin-top:8px;display:flex;flex-direction:column;gap:6px}
//         .topicbtn{background:transparent;border:0;color:rgba(255,255,255,.9);padding:8px 10px;border-radius:8px;text-align:left;cursor:pointer}
//         .topicbtn:hover{background:rgba(255,255,255,.02)}
//         .topicbtn.active{background:linear-gradient(90deg, rgba(255,255,255,.04), rgba(255,255,255,.02));font-weight:700}

//         .sidebar-footer{margin-top:auto;display:flex;gap:8px}
//         .btn{padding:8px 10px;border-radius:8px;border:0;cursor:pointer}

//         /* MAIN */
//         .main{flex:1;display:flex;flex-direction:column}
//         .header{height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 20px;border-bottom:1px solid rgba(11,17,28,.04)}
//         .header .left{display:flex;align-items:center;gap:12px}
//         .hamb{width:44px;height:44;display:grid;place-items:center;border-radius:8px;cursor:pointer}
//         .header .right{display:flex;align-items:center;gap:12px}

//         .content-area{display:flex;flex:1;overflow:hidden}
//         .sidebar-panel{width:360px;border-right:1px solid rgba(11,17,28,.04);overflow:auto;padding:18px;background:linear-gradient(180deg,#ffffff,#f8fafc)}
//         .doc-panel{flex:1;overflow:auto;padding:26px}

//         .topic-title{font-size:22px;margin:0 0 8px 0}
//         .doc-example{background:#0b1220;color:#fff;padding:12px;border-radius:8px;margin:14px 0}
//         pre{background:#0f1724;color:#e6eef8;padding:12px;border-radius:8px;overflow:auto}

//         /* Responsive */
//         @media (max-width:900px){
//           .sidebar{position:fixed;left:0;top:0;bottom:0;z-index:40;transform:translateX(-110%);transition:transform .18s ease}
//           .app.sidebar-collapsed .sidebar{transform:translateX(0)}
//           .sidebar-panel{display:none}
//         }
//       `}</style>

//       {/* SIDEBAR */}
//       <aside className="sidebar">
//         <div className="brand">
//           <div className="logo">WS</div>
//           <div>
//             <h1>W3Clone</h1>
//             <small>Full Tutorials</small>
//           </div>
//         </div>

//         <div className="searchbar">
//           <span>🔎</span>
//           <input placeholder="Search topics..." value={query} onChange={(e) => setQuery(e.target.value)} />
//         </div>

//         <div style={{overflow:'auto'}}>
//           {Object.keys(categories).map((cat) => {
//             // filter topics by query
//             const topics = categories[cat].topics.filter(t => t.title.toLowerCase().includes(query.toLowerCase()) || t.content.toLowerCase().includes(query.toLowerCase()));
//             if (topics.length === 0 && query) return null;
//             return (
//               <div className="cat" key={cat}>
//                 <button className="catbtn" onClick={() => { setExpandedCategory(cat); setSelectedCategory(cat); setSelectedTopic(categories[cat].topics[0].id); }}>
//                   <div style={{display:'flex',gap:10,alignItems:'center'}}>
//                     <div style={{width:28,height:28,background:'linear-gradient(90deg,#06b6d4,#7c3aed)',display:'grid',placeItems:'center',borderRadius:6,fontWeight:800}}>{cat[0]}</div>
//                     <div style={{textAlign:'left'}}>
//                       <div style={{fontWeight:700}}>{categories[cat].title}</div>
//                       <div style={{fontSize:12,color:'rgba(255,255,255,.6)'}}>{categories[cat].topics.length} topics</div>
//                     </div>
//                   </div>
//                   <div style={{fontSize:12,color:'rgba(255,255,255,.6)'}}>{expandedCategory === cat ? '▾' : '▸'}</div>
//                 </button>

//                 {expandedCategory === cat && (
//                   <div className="topics">
//                     {topics.map((t) => (
//                       <button
//                         key={t.id}
//                         className={`topicbtn ${selectedCategory===cat && selectedTopic===t.id ? 'active' : ''}`}
//                         onClick={() => { setSelectedCategory(cat); setSelectedTopic(t.id); }}
//                       >
//                         {t.title}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         <div className="sidebar-footer">
//           <button className="btn" onClick={() => setSidebarCollapsed(s => !s)} style={{background:'linear-gradient(90deg,#2563eb,#4f46e5)',color:'#fff'}}>Toggle Sidebar</button>
//           <button className="btn" style={{background:'transparent',border:'1px solid rgba(255,255,255,.06)',color:'#fff'}}>Login</button>
//         </div>
//       </aside>

//       {/* MAIN */}
//       <div className="main">
//         <header className="header">
//           <div className="left">
//             <div className="hamb" onClick={() => setSidebarCollapsed(s => !s)}>☰</div>
//             <div style={{fontWeight:800}}>{categories[selectedCategory].title} Tutorial</div>
//             <div style={{marginLeft:8,color:'gray'}}>|</div>
//             <div style={{color:'gray'}}>{topicObj.title}</div>
//           </div>
//           <div className="right">
//             <div style={{textAlign:'right'}}>
//               <div style={{fontSize:12,color:'#64748b'}}>Welcome</div>
//               <div style={{fontWeight:700}}>Guest</div>
//             </div>
//             <div style={{display:'flex',gap:8}}>
//               <button className="btn" style={{background:'transparent',border:'1px solid rgba(11,17,28,.06)'}}>Docs</button>
//               <button className="btn" style={{background:'linear-gradient(90deg,#06b6d4,#7c3aed)',color:'#fff'}}>Get Started</button>
//             </div>
//           </div>
//         </header>

//         <div className="content-area">
//           <div className="sidebar-panel">
//             <h3 style={{marginTop:0}}>Contents</h3>
//             <p style={{color:'#6b7280'}}>Category: {categories[selectedCategory].title}</p>
//             <div style={{display:'flex',flexDirection:'column',gap:10}}>
//               {categories[selectedCategory].topics.map(t => (
//                 <div key={t.id} style={{display:'flex',flexDirection:'column'}}>
//                   <button
//                     className={`topicbtn ${selectedTopic===t.id ? 'active' : ''}`}
//                     onClick={() => setSelectedTopic(t.id)}
//                     style={{textAlign:'left'}}
//                   >
//                     {t.title}
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div style={{height:20}} />
//             <h4 style={{marginBottom:8}}>Quick Tips</h4>
//             <ul style={{paddingLeft:18,color:'#374151'}}>
//               <li>Use semantic elements.</li>
//               <li>Include alt text for images.</li>
//               <li>Validate your HTML with a validator.</li>
//             </ul>
//           </div>

//           <div className="doc-panel">
//             <article>
//               <h2 className="topic-title">{topicObj.title}</h2>
//               <div dangerouslySetInnerHTML={{ __html: topicObj.content }} />

//               {/* Example area */}
//               {topicObj.title.toLowerCase().includes('example') || topicObj.content.includes('<pre>') ? null : (
//                 <div className="doc-example">
//                   <strong>Example</strong>
//                   <pre>{getExampleForTopic(selectedCategory, selectedTopic)}</pre>
//                 </div>
//               )}

//             </article>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function getExampleForTopic(cat, tid){
//   // Provide simple examples per category/topic
//   if(cat === 'HTML'){
//     switch(tid){
//       case 'intro':
//         return `<!doctype html>\n<html>\n  <head><meta charset=\"utf-8\"/><title>Demo</title></head>\n  <body>\n    <h1>Hello, HTML!</h1>\n    <p>This is a sample page.</p>\n  </body>\n</html>`;
//       case 'links':
//         return `<a href=\"https://www.example.com\" target=\"_blank\">Visit example</a>`;
//       case 'forms':
//         return `<form action=\"/submit\" method=\"post\">\n  <label>Name: <input type=\"text\" name=\"name\" /></label>\n  <button type=\"submit\">Send</button>\n</form>`;
//       case 'images':
//         return `<img src=\"https://via.placeholder.com/300\" alt=\"Placeholder\" />`;
//       default:
//         return `<!-- Code example for ${tid} -->`;
//     }
//   }

//   if(cat === 'CSS'){
//     return `.container {\n  display: flex;\n  gap: 12px;\n}\n.button {\n  padding: 8px 12px;\n  border-radius: 8px;\n}`;
//   }
//   if(cat === 'JavaScript'){
//     return `document.getElementById('btn').addEventListener('click', function(){\n  alert('Clicked!');\n});`;
//   }
//   if(cat === 'React'){
//     return `function Hello(){\n  return <h1>Hello React</h1>\n}`;
//   }
//   if(cat === 'Python'){
//     return `def greet(name):\n    print(f'Hello, {name}')\n\ngreet('World')`;
//   }

//   return '';
// }






// import React, { useState } from "react";
// import {
//   Layout,
//   Menu,
//   Avatar,
//   Dropdown,
//   Space,
//   message,
// } from "antd";
// import {
//   MenuOutlined,
//   CloseOutlined,
//   DashboardOutlined,
//   Html5Outlined,
//   BgColorsOutlined,
//   CodeOutlined,
//   AppstoreOutlined,
//   UserOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";

// // ✅ Import HTML topic components
// import Introduction from "../Html/Introduction/Introduction";
// // import Elements from "../Html/Elements";
// // import Attributes from "../Html/Attributes";
// // import Headings from "../Html/Headings";
// // import Paragraphs from "../Html/Paragraphs";
// // import Links from "../Html/Links";

// const { Header, Sider, Content } = Layout;
// const { SubMenu } = Menu;

// export default function DashboardLayout() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [activeTopic, setActiveTopic] = useState(null);

//   const user = { username: "Yashvi" };
//   const darkBlueGradient = "linear-gradient(180deg, #0d1b2a, #1b263b, #1d3557)";

//   // ✅ Mapping topics to components
//   const htmlTopics = {
//     introduction: <Introduction />,
//     // elements: <Elements />,
//     // attributes: <Attributes />,
//     // headings: <Headings />,
//     // paragraphs: <Paragraphs />,
//     // links: <Links />,
//   };

//   const dropdownMenu = (
//     <Menu>
//       <Menu.Item key="profile" icon={<UserOutlined />}>
//         My Profile
//       </Menu.Item>
//       <Menu.Item
//         key="logout"
//         icon={<LogoutOutlined />}
//         onClick={() => message.success("Logged out successfully!")}
//       >
//         Logout
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <Layout style={{ minHeight: "100vh", transition: "all 0.4s ease" }}>
//       {/* Sidebar */}
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         trigger={null}
//         width={220}
//         style={{
//           background: darkBlueGradient,
//           color: "#fff",
//           position: "fixed",
//           height: "100vh",
//           left: 0,
//           top: 0,
//           zIndex: 100,
//           boxShadow: "4px 0 10px rgba(0,0,0,0.2)",
//           transition: "all 0.4s ease",
//         }}
//       >
//         <div
//           style={{
//             padding: "20px",
//             color: "#ffb703",
//             textAlign: "center",
//             fontWeight: "bold",
//             fontSize: 20,
//             letterSpacing: 1,
//           }}
//         >
//           ⚡ {!collapsed && "Yashvitech Dashboard"}
//         </div>

//         <Menu
//           theme="dark"
//           mode="inline"
//           style={{
//             background: "transparent",
//             color: "#fff",
//             border: "none",
//           }}
//         >
//           <Menu.Item
//             key="dashboard"
//             icon={<DashboardOutlined />}
//             onClick={() => setActiveTopic(null)}
//           >
//             {!collapsed && "Dashboard"}
//           </Menu.Item>

//           {/* ✅ HTML Submenu with topics */}
//           <SubMenu
//             key="html"
//             icon={<Html5Outlined />}
//             title={!collapsed && "HTML"}
//           >
//             <Menu.Item key="introduction" onClick={() => setActiveTopic("introduction")}>
//               Introduction
//             </Menu.Item>
//             <Menu.Item key="elements" onClick={() => setActiveTopic("elements")}>
//               Elements
//             </Menu.Item>
//             <Menu.Item key="attributes" onClick={() => setActiveTopic("attributes")}>
//               Attributes
//             </Menu.Item>
//             <Menu.Item key="headings" onClick={() => setActiveTopic("headings")}>
//               Headings
//             </Menu.Item>
//             <Menu.Item key="paragraphs" onClick={() => setActiveTopic("paragraphs")}>
//               Paragraphs
//             </Menu.Item>
//             <Menu.Item key="links" onClick={() => setActiveTopic("links")}>
//               Links
//             </Menu.Item>
//           </SubMenu>

//           <Menu.Item
//             key="css"
//             icon={<BgColorsOutlined />}
//             onClick={() => message.info("CSS section coming soon...")}
//           >
//             {!collapsed && "CSS"}
//           </Menu.Item>

//           <Menu.Item
//             key="js"
//             icon={<CodeOutlined />}
//             onClick={() => message.info("JavaScript section coming soon...")}
//           >
//             {!collapsed && "JavaScript"}
//           </Menu.Item>

//           <Menu.Item
//             key="react"
//             icon={<AppstoreOutlined />}
//             onClick={() => message.info("React section coming soon...")}
//           >
//             {!collapsed && "React"}
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       {/* Main Layout */}
//       <Layout
//         style={{
//           marginLeft: collapsed ? 80 : 220,
//           transition: "all 0.4s ease",
//           minHeight: "100vh",
//         }}
//       >
//         {/* Header */}
//         <Header
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             background: darkBlueGradient,
//             padding: "0 20px",
//             boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
//           }}
//         >
//           <Space align="center">
//             <div
//               onClick={() => setCollapsed(!collapsed)}
//               style={{
//                 width: 42,
//                 height: 42,
//                 borderRadius: 8,
//                 background: "rgba(255,255,255,0.1)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//               }}
//             >
//               {!collapsed ? (
//                 <MenuOutlined style={{ fontSize: 22, color: "#ffb703" }} />
//               ) : (
//                 <CloseOutlined style={{ fontSize: 22, color: "#ffb703" }} />
//               )}
//             </div>
//             <h2 style={{ color: "#ffb703", marginLeft: 10 }}>
//               Developer Dashboard
//             </h2>
//           </Space>

//           <Dropdown overlay={dropdownMenu} placement="bottomRight">
//             <Avatar
//               size={40}
//               style={{
//                 background: "#ffb703",
//                 cursor: "pointer",
//                 fontSize: 18,
//                 border: "2px solid #fff",
//               }}
//             >
//               {user.username[0].toUpperCase()}
//             </Avatar>
//           </Dropdown>
//         </Header>

//         {/* ✅ Content */}
//         <Content
//           style={{
//             padding: 30,
//             background: "#f8fafc",
//             minHeight: "calc(100vh - 64px)",
//           }}
//         >
//           {activeTopic ? (
//             <div
//               style={{
//                 background: "#fff",
//                 padding: 25,
//                 borderRadius: 10,
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//               }}
//             >
//               {htmlTopics[activeTopic]}
//             </div>
//           ) : (
//             <div
//               style={{
//                 textAlign: "center",
//                 padding: 80,
//                 fontSize: 22,
//                 color: "#555",
//               }}
//             >
//               ⚡ Welcome to Yashvitech Developer Dashboard
//             </div>
//           )}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }





// import React, { useState } from "react";
// import {
//   Layout,
//   Menu,
//   Avatar,
//   Dropdown,
//   Space,
//   message,
// } from "antd";
// import {
//   MenuOutlined,
//   CloseOutlined,
//   DashboardOutlined,
//   Html5Outlined,
//   BgColorsOutlined,
//   CodeOutlined,
//   AppstoreOutlined,
//   UserOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";

// import Introduction from "../Html/Introduction/Introduction";
// import Element from "../Html/Element/Element";

// const { Header, Sider, Content } = Layout;
// const { SubMenu } = Menu;

// export default function DashboardLayout() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [activeTopic, setActiveTopic] = useState(null);
//   const user = { username: "Yashvi" };

//   const htmlTopics = {
//     introduction: <Introduction />,
//   };

//   const dropdownMenu = (
//     <Menu>
//       <Menu.Item key="profile" icon={<UserOutlined />}>
//         My Profile
//       </Menu.Item>
//       <Menu.Item
//         key="logout"
//         icon={<LogoutOutlined />}
//         onClick={() => message.success("Logged out successfully!")}
//       >
//         Logout
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <Layout style={{ minHeight: "100vh", background: "#f9fafc" }}>
//       {/* Sidebar */}
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         trigger={null}
//         width={230}
//         style={{
//           backdropFilter: "blur(15px)",
//           WebkitBackdropFilter: "blur(15px)",
//           background: "rgba(255,255,255,0.7)",
//           borderRight: "1px solid rgba(0,0,0,0.05)",
//           boxShadow: "5px 0 15px rgba(0,0,0,0.1)",
//           position: "fixed",
//           height: "100vh",
//           transition: "all 0.4s ease",
//           zIndex: 100,
//         }}
//       >
//         <div
//           style={{
//             padding: "20px",
//             textAlign: "center",
//             fontWeight: "700",
//             color: "#333",
//             fontSize: 20,
//             letterSpacing: 1,
//           }}
//         >
//           ⚡ {!collapsed && "Yashvitech"}
//         </div>

//         <Menu
//           mode="inline"
//           style={{
//             background: "transparent",
//             color: "#333",
//             fontWeight: 500,
//           }}
//         >
//           <Menu.Item
//             key="dashboard"
//             icon={<DashboardOutlined />}
//             onClick={() => setActiveTopic(null)}
//           >
//             {!collapsed && "Dashboard"}
//           </Menu.Item>

//           <SubMenu
//             key="html"
//             icon={<Html5Outlined style={{ color: "#ff5722" }} />}
//             title={!collapsed && "HTML"}
//           >
//             <Menu.Item key="introduction" onClick={() => setActiveTopic("introduction")}>
//               Introduction
//             </Menu.Item>
//             <Menu.Item key="elements">Elements</Menu.Item>
//             <Menu.Item key="attributes">Attributes</Menu.Item>
//             <Menu.Item key="headings">Headings</Menu.Item>
//             <Menu.Item key="paragraphs">Paragraphs</Menu.Item>
//             <Menu.Item key="links">Links</Menu.Item>
//           </SubMenu>

//           <Menu.Item key="css" icon={<BgColorsOutlined style={{ color: "#03a9f4" }} />}>
//             {!collapsed && "CSS"}
//           </Menu.Item>

//           <Menu.Item key="js" icon={<CodeOutlined style={{ color: "#ffc107" }} />}>
//             {!collapsed && "JavaScript"}
//           </Menu.Item>

//           <Menu.Item key="react" icon={<AppstoreOutlined style={{ color: "#61dafb" }} />}>
//             {!collapsed && "React"}
//           </Menu.Item>
//         </Menu>
//       </Sider>

//       {/* Main Content Layout */}
//       <Layout
//         style={{
//           marginLeft: collapsed ? 80 : 230,
//           minHeight: "100vh",
//           transition: "all 0.4s ease",
//         }}
//       >
//         {/* Header */}
//         <Header
//           style={{
//             background: "linear-gradient(90deg, #ffffff, #f5f7fa)",
//             boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "0 25px",
//             position: "sticky",
//             top: 0,
//             zIndex: 200,
//           }}
//         >
//           <Space align="center">
//             <div
//               onClick={() => setCollapsed(!collapsed)}
//               style={{
//                 width: 42,
//                 height: 42,
//                 borderRadius: 10,
//                 background: "rgba(0,0,0,0.05)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 cursor: "pointer",
//                 transition: "0.3s",
//               }}
//             >
//               {!collapsed ? (
//                 <MenuOutlined style={{ fontSize: 22, color: "#333" }} />
//               ) : (
//                 <CloseOutlined style={{ fontSize: 22, color: "#333" }} />
//               )}
//             </div>
//             <h2 style={{ marginLeft: 12, fontWeight: 600, color: "#333" }}>
//               Developer Dashboard
//             </h2>
//           </Space>

//           <Dropdown overlay={dropdownMenu} placement="bottomRight">
//             <Avatar
//               size={42}
//               style={{
//                 background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
//                 color: "#fff",
//                 cursor: "pointer",
//                 fontSize: 18,
//                 boxShadow: "0 0 10px rgba(0,0,0,0.15)",
//               }}
//             >
//               {user.username[0].toUpperCase()}
//             </Avatar>
//           </Dropdown>
//         </Header>

//         {/* Content Area */}
//         <Content
//           style={{
//             padding: 40,
//             background: "#f9fafc",
//             minHeight: "calc(100vh - 64px)",
//             transition: "all 0.3s ease",
//           }}
//         >
//           {activeTopic ? (
//             <div
//               style={{
//                 // background: "#fff",
//                 // padding: 35,
//                 // borderRadius: 15,
//                 boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//               }}
//             >
//               {htmlTopics[activeTopic]}
//             </div>
//           ) : (
//             <div
//               style={{
//                 background: "linear-gradient(135deg, #ffffff, #f5f7fa)",
//                 borderRadius: 15,
//                 boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
//                 padding: 80,
//                 textAlign: "center",
//               }}
//             >
//               <h2 style={{ fontSize: 28, color: "#333", fontWeight: 600 }}>
//                 ⚡ Welcome to <span style={{ color: "#2575fc" }}>Yashvitech Dashboard</span>
//               </h2>
//               <p style={{ marginTop: 10, fontSize: 18, color: "#666" }}>
//                 Select any topic from the left to start learning HTML.
//               </p>
//             </div>
//           )}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }



import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Dropdown,
  Space,
  message,
} from "antd";
import {
  MenuOutlined,
  CloseOutlined,
  DashboardOutlined,
  Html5Outlined,
  BgColorsOutlined,
  CodeOutlined,
  AppstoreOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import Introduction from "../Html/Introduction/Introduction";
import Element from "../Html/Element/Element"; // ✅ correct import

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);
  const user = { username: "Yashvi" };

  // ✅ Add Element component here
  const htmlTopics = {
    introduction: <Introduction />,
    element: <Element />,
  };

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        My Profile
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => message.success("Logged out successfully!")}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: "100vh", background: "#f9fafc" }}>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={230}
        style={{
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.7)",
          borderRight: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "5px 0 15px rgba(0,0,0,0.1)",
          position: "fixed",
          height: "100vh",
          transition: "all 0.4s ease",
          zIndex: 100,
        }}
      >
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            fontWeight: "700",
            color: "#333",
            fontSize: 20,
            letterSpacing: 1,
          }}
        >
          ⚡ {!collapsed && "Yashvitech"}
        </div>

        <Menu
          mode="inline"
          style={{
            background: "transparent",
            color: "#333",
            fontWeight: 500,
          }}
        >
          <Menu.Item
            key="dashboard"
            icon={<DashboardOutlined />}
            onClick={() => setActiveTopic(null)}
          >
            {!collapsed && "Dashboard"}
          </Menu.Item>

          {/* ✅ HTML Submenu Fixed */}
          <SubMenu
            key="html"
            icon={<Html5Outlined style={{ color: "#ff5722" }} />}
            title={!collapsed && "HTML"}
          >
            <Menu.Item key="introduction" onClick={() => setActiveTopic("introduction")}>
              Introduction
            </Menu.Item>

            {/* ✅ Click event fixed here */}
            <Menu.Item key="element" onClick={() => setActiveTopic("element")}>
              Elements
            </Menu.Item>

            <Menu.Item key="attributes">Attributes</Menu.Item>
            <Menu.Item key="headings">Headings</Menu.Item>
            <Menu.Item key="paragraphs">Paragraphs</Menu.Item>
            <Menu.Item key="links">Links</Menu.Item>
          </SubMenu>

          <Menu.Item key="css" icon={<BgColorsOutlined style={{ color: "#03a9f4" }} />}>
            {!collapsed && "CSS"}
          </Menu.Item>

          <Menu.Item key="js" icon={<CodeOutlined style={{ color: "#ffc107" }} />}>
            {!collapsed && "JavaScript"}
          </Menu.Item>

          <Menu.Item key="react" icon={<AppstoreOutlined style={{ color: "#61dafb" }} />}>
            {!collapsed && "React"}
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content Layout */}
      <Layout
        style={{
          marginLeft: collapsed ? 80 : 230,
          minHeight: "100vh",
          transition: "all 0.4s ease",
        }}
      >
        {/* Header */}
        <Header
          style={{
            background: "linear-gradient(90deg, #ffffff, #f5f7fa)",
            boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 25px",
            position: "sticky",
            top: 0,
            zIndex: 200,
          }}
        >
          <Space align="center">
            <div
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "rgba(0,0,0,0.05)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {!collapsed ? (
                <MenuOutlined style={{ fontSize: 22, color: "#333" }} />
              ) : (
                <CloseOutlined style={{ fontSize: 22, color: "#333" }} />
              )}
            </div>
            <h2 style={{ marginLeft: 12, fontWeight: 600, color: "#333" }}>
              Developer Dashboard
            </h2>
          </Space>

          <Dropdown overlay={dropdownMenu} placement="bottomRight">
            <Avatar
              size={42}
              style={{
                background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                color: "#fff",
                cursor: "pointer",
                fontSize: 18,
                boxShadow: "0 0 10px rgba(0,0,0,0.15)",
              }}
            >
              {user.username[0].toUpperCase()}
            </Avatar>
          </Dropdown>
        </Header>

        {/* Content Area */}
        <Content
          style={{
            padding: 40,
            background: "#f9fafc",
            minHeight: "calc(100vh - 64px)",
            transition: "all 0.3s ease",
          }}
        >
          {activeTopic ? (
            <div
              style={{
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
            >
              {htmlTopics[activeTopic]}
            </div>
          ) : (
            <div
              style={{
                background: "linear-gradient(135deg, #ffffff, #f5f7fa)",
                borderRadius: 15,
                boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
                padding: 80,
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: 28, color: "#333", fontWeight: 600 }}>
                ⚡ Welcome to <span style={{ color: "#2575fc" }}>Yashvitech Dashboard</span>
              </h2>
              <p style={{ marginTop: 10, fontSize: 18, color: "#666" }}>
                Select any topic from the left to start learning HTML.
              </p>
            </div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
