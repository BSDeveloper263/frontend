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
import Element from "../Html/Element/Element";
import Attribute from "../Html/Attribute";


// =======CSS=============




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
    attribute:<Attribute/>,

    // =========CSS============

    Cssintroduction:<Introduction/>
    
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
              HTML  Introduction
            </Menu.Item>

            {/* ✅ Click event fixed here */}
            <Menu.Item key="element" onClick={() => setActiveTopic("element")}>
              HTML  Elements
            </Menu.Item>


             <Menu.Item key="attribute" onClick={() => setActiveTopic("attribute")}>
               HTML Attribute
            </Menu.Item>

             
             



            
            <Menu.Item key="headings">Headings</Menu.Item>
            <Menu.Item key="paragraphs">Paragraphs</Menu.Item>
            <Menu.Item key="links">Links</Menu.Item>
          </SubMenu>

           <SubMenu key="css" icon={<BgColorsOutlined style={{ color: "#03a9f4" }} />} title={!collapsed && "CSS"}>
            <Menu.Item onClick={() => setActiveTopic("cssIntroduction")}>CSS Introduction</Menu.Item>
           
          </SubMenu>




          {/* <Menu.Item key="css" icon={<BgColorsOutlined style={{ color: "#03a9f4" }} />}>
            {!collapsed && "CSS"}
          </Menu.Item> */}

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

// // ✅ HTML Imports
// import Introduction from "../Html/Introduction/Introduction";
// import Element from "../Html/Element/Element";
// import Attribute from "../Html/Attribute";

// // ✅ CSS Imports
// import CSSIntroduction from "../CSS/Introduction";
// // import Syntax from "../Css/Syntax/Syntax";
// // import Colors from "../Css/Colors/Colors";
// // import Background from "../Css/Background/Background";
// // import Borders from "../Css/Borders/Borders";

// const { Header, Sider, Content } = Layout;
// const { SubMenu } = Menu;

// export default function DashboardLayout() {
//   const [collapsed, setCollapsed] = useState(false);
//   const [activeTopic, setActiveTopic] = useState(null);
//   const user = { username: "Yashvi" };

//   // ✅ HTML + CSS topic list
//   const topics = {
//     // HTML Topics
//     introduction: <Introduction />,
//     element: <Element />,
//     attribute: <Attribute />,
//     // CSS Topics
//     cssIntroduction: <CSSIntroduction />,
//     // syntax: <Syntax />,
//     // colors: <Colors />,
//     // background: <Background />,
//     // borders: <Borders />,
//   };

//   const dropdownMenu = (
//     <Menu>
//       <Menu.Item key="profile" icon={<UserOutlined />}>My Profile</Menu.Item>
//       <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => message.success("Logged out successfully!")}>Logout</Menu.Item>
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
//           }}
//         >
//           ⚡ {!collapsed && "Yashvitech"}
//         </div>

//         <Menu mode="inline" style={{ background: "transparent", color: "#333", fontWeight: 500 }}>
//           <Menu.Item key="dashboard" icon={<DashboardOutlined />} onClick={() => setActiveTopic(null)}>
//             {!collapsed && "Dashboard"}
//           </Menu.Item>

//           {/* ✅ HTML Section */}
//           <SubMenu key="html" icon={<Html5Outlined style={{ color: "#ff5722" }} />} title={!collapsed && "HTML"}>
//             <Menu.Item onClick={() => setActiveTopic("introduction")}>HTML Introduction</Menu.Item>
//             <Menu.Item onClick={() => setActiveTopic("element")}>HTML Elements</Menu.Item>
//             <Menu.Item onClick={() => setActiveTopic("attribute")}>HTML Attributes</Menu.Item>
//           </SubMenu>

//           {/* ✅ CSS Section */}
//           <SubMenu key="css" icon={<BgColorsOutlined style={{ color: "#03a9f4" }} />} title={!collapsed && "CSS"}>
//             <Menu.Item onClick={() => setActiveTopic("cssIntroduction")}>CSS Introduction</Menu.Item>
//             {/* <Menu.Item onClick={() => setActiveTopic("syntax")}>CSS Syntax</Menu.Item> */}
//             {/* <Menu.Item onClick={() => setActiveTopic("colors")}>CSS Colors</Menu.Item> */}
//             {/* <Menu.Item onClick={() => setActiveTopic("background")}>CSS Backgrounds</Menu.Item> */}
//             {/* <Menu.Item onClick={() => setActiveTopic("borders")}>CSS Borders</Menu.Item> */}
//           </SubMenu>
//         </Menu>
//       </Sider>

//       {/* Main Layout */}
//       <Layout style={{ marginLeft: collapsed ? 80 : 230, transition: "all 0.4s ease" }}>
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
//               {!collapsed ? <MenuOutlined style={{ fontSize: 22 }} /> : <CloseOutlined style={{ fontSize: 22 }} />}
//             </div>
//             <h2 style={{ marginLeft: 12, fontWeight: 600 }}>Developer Dashboard</h2>
//           </Space>

//           <Dropdown overlay={dropdownMenu} placement="bottomRight">
//             <Avatar size={42} style={{ background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)", color: "#fff" }}>
//               {user.username[0].toUpperCase()}
//             </Avatar>
//           </Dropdown>
//         </Header>

//         <Content style={{ padding: 40, background: "#f9fafc", minHeight: "calc(100vh - 64px)" }}>
//           {activeTopic ? (
//             <div style={{ background: "#fff", padding: "25px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
//               {topics[activeTopic]}
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
//               <h2>⚡ Welcome to <span style={{ color: "#2575fc" }}>Yashvitech Dashboard</span></h2>
//               <p>Select any topic from the left to start learning HTML or CSS.</p>
//             </div>
//           )}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }
