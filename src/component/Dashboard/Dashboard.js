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
import Headings from "../Html/Heading";
import Image from "../Html/Images";
import Paragraph from "../Html/Paragraph";
import Link from "../Html/Link";
import Style from "../Html/Style";
import Formatting from "../Html/Formatting";
import CSS from "../Html/CSS";
import Color from "../Html/Color"
import RGB  from "../Html/RGB"
import Hex from "../Html/Hex";
import Hsl from "../Html/Hsl";
import Table from "../Html/Tables";
import Tableborder from "../Html/Tableborder";
import TableSize from "../Html/Tablesize";
import Tableheader from "../Html/Tableheader";
import PaddingSpacing from "../Html/Paddingspacing";
import ColspanRowspan from "../Html/ColspanRowspan";
import TableStyling from "../Html/Tablestyling";
import Colorgroup from "../Html/Colorgroup"
import List from "../Html/List"
import UnorderList from "../Html/UnorderLists";
import OrderLists from "../Html/OrderLists";
import HtlmBlock from "../Html/Block & Inline ";
import Div from "../Html/Div";
import Class from "../Html/Class";
import Id from "../Html/Id";
import Iframes from "../Html/Iframes";
import JavaScript  from "../Html/JavaScript";
import Filepaths from "../Html/File Paths"
import Head from "../Html/Head";
import HtmlLayout from "../Html/HtmlLayout";
import Responsive from "../Html/Responsive"
import Semantic from "../Html/Semantic";
import Form from "../Html/Form";
import FormAttribute from "../Html/Form Attribute"
import FormElement from "../Html/Form Element";
import InputType from "../Html/Input Type";
import InputAttributes from "../Html/Input Attributes"
import Canvas from "../Html/Canvas"




const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTopic, setActiveTopic] = useState(null);
  const user = { username: "Yashvi" };

  const htmlTopics = {
    introduction: <Introduction />,
    element: <Element />,
    attribute: <Attribute />,
    headings: <Headings />,
    images: <Image />,
    paragraph: <Paragraph />,
    link: <Link />,
    style: <Style />,
    formatting: <Formatting/>,
    css:<CSS/>,
    color:<Color/>,
    rgb:<RGB/>,
    hex:<Hex/>,
    hsl:<Hsl/>,
    table:<Table/>,
    tableborder:<Tableborder/>,
    tablesize:<TableSize/>,
    tableheader:<Tableheader/>,
    PaddingSpacing:<PaddingSpacing/>,
    colspanrowspan:<ColspanRowspan/>,
    tableStylingt:<TableStyling/>,
    colorgroup:<Colorgroup/>,
    list:<List/>,
    unorderlist:<UnorderList/>,
    orderlist:<OrderLists/>,
    htmlblock :<HtlmBlock/>,
    div:<Div/>,
    class:<Class/>,
    id:<Id/>,
    iframes:<Iframes/>,
    JavaScript:<JavaScript/>,
    Filepaths:<Filepaths/>,
    head:<Head/>,
    htmlayout:<HtmlLayout/>,
    responsive:<Responsive/>,
    semantic:<Semantic/>,
    form:<Form/>,
    formattribute:<FormAttribute/>,
    formelement:<FormElement/>,
    inputtype:<InputType/>,
    inputattributes:<InputAttributes/>,
    canvas:<Canvas/>,
    
     
  
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
          overflowY: "auto", // ✅ Sidebar scroll enabled
          scrollbarWidth: "thin",
          scrollbarColor: "#ccc transparent",
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
            position: "sticky",
            top: 0,
            background: "rgba(255,255,255,0.9)",
            zIndex: 200,
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

          {/* ✅ HTML Submenu */}
          <SubMenu
            key="html"
            icon={<Html5Outlined style={{ color: "#ff5722" }} />}
            title={!collapsed && "HTML"}
          >
            <Menu.Item key="introduction" onClick={() => setActiveTopic("introduction")}>
              HTML Introduction
            </Menu.Item>

            <Menu.Item key="element" onClick={() => setActiveTopic("element")}>
              HTML Elements
            </Menu.Item>

            <Menu.Item key="attribute" onClick={() => setActiveTopic("attribute")}>
              HTML attributes
            </Menu.Item>

            <Menu.Item key="headings" onClick={() => setActiveTopic("headings")}>
              HTML Headings
            </Menu.Item>

            <Menu.Item key="images" onClick={() => setActiveTopic("images")}>
              HTML Images
            </Menu.Item>

            <Menu.Item key="paragraph" onClick={() => setActiveTopic("paragraph")}>
              HTML Paragraph
            </Menu.Item>

            <Menu.Item key="link" onClick={() => setActiveTopic("link")}>
              HTML Links
            </Menu.Item>

            <Menu.Item key="style" onClick={() => setActiveTopic("style")}>
              HTML Style
            </Menu.Item>

            <Menu.Item key="formatting" onClick={() => setActiveTopic("formatting")}>
              HTML Formatting
            </Menu.Item>

             <Menu.Item key="css" onClick={() => setActiveTopic("css")}>
              HTML  CSS
            </Menu.Item>
             

             <SubMenu key=" Colors"
            // icon={<Html5Outlined style={{ color: "#ff5722" }} />}
            title={!collapsed && "  HTML Color"}>
              <Menu.Item key="color" onClick={() => setActiveTopic("color")}>
                 Color
              </Menu.Item>

              <Menu.Item key="rgb" onClick={() => setActiveTopic("rgb")}>
                 RGB
              </Menu.Item>
               <Menu.Item key="hex" onClick={() => setActiveTopic("hex")}>
                HEX
              </Menu.Item>

               <Menu.Item key="hsl" onClick={() => setActiveTopic("hsl")}>
                HSL
              </Menu.Item>
              </SubMenu>
             
             <SubMenu key=" Tables"
            // icon={<Html5Outlined style={{ color: "#ff5722" }} />}
            title={!collapsed && "  HTML Tables"}>
            
             <Menu.Item key="table" onClick={() => setActiveTopic("table")}>
                Table
              </Menu.Item>
              
              <Menu.Item key="tableborder" onClick={() => setActiveTopic("tableborder")}>
                Tableborder
              </Menu.Item>

              <Menu.Item key="tablesize" onClick={() => setActiveTopic("tablesize")}>
                Table size
              </Menu.Item>

               <Menu.Item key="tableheader" onClick={() => setActiveTopic("tableheader")}>
                Table Header
              </Menu.Item>

               <Menu.Item key="PaddingSpacing" onClick={() => setActiveTopic("PaddingSpacing")}>
                Padding & Spacing
              </Menu.Item>

               <Menu.Item key="colspanrowspan" onClick={() => setActiveTopic("colspanrowspan")}>
               Colspan & Rowspan
              </Menu.Item>

              <Menu.Item key="tableStylingt" onClick={() => setActiveTopic("tableStylingt")}>
               Table Stylingt
              </Menu.Item>

               <Menu.Item key="colorgroup  " onClick={() => setActiveTopic("colorgroup")}>
                 Table Colorgroup
              </Menu.Item>
             </SubMenu>
   

              <SubMenu key=" HTML List"
            // icon={<Html5Outlined style={{ color: "#ff5722" }} />}
            title={!collapsed && "  HTML List"}>
              
                <Menu.Item key="list " onClick={() => setActiveTopic("list")}>
                List
              </Menu.Item>

                <Menu.Item key="unorderlist " onClick={() => setActiveTopic("unorderlist")}>
                Unorder List
              </Menu.Item>

               <Menu.Item key="orderlist " onClick={() => setActiveTopic("orderlist")}>
               Order List
              </Menu.Item>
              
              </SubMenu>  

               <Menu.Item key="htmlblock " onClick={() => setActiveTopic("htmlblock")}>
               Html Block & Inline
              </Menu.Item> 

               <Menu.Item key="div " onClick={() => setActiveTopic("div")}>
                 Html  Div
              </Menu.Item> 

              <Menu.Item key="class " onClick={() => setActiveTopic("class")}>
                 Html  Class
              </Menu.Item> 

               <Menu.Item key="id" onClick={() => setActiveTopic("id")}>
                 Html Id
              </Menu.Item> 
              
              <Menu.Item key="iframes" onClick={() => setActiveTopic("iframes")}>
                 Html Iframes
              </Menu.Item> 

              <Menu.Item key="JavaScript" onClick={() => setActiveTopic("JavaScript")}>
                 Html JavaScript
              </Menu.Item> 

               <Menu.Item key="Filepaths" onClick={() => setActiveTopic("Filepaths")}>
                 Html File paths
              </Menu.Item> 

              <Menu.Item key="head" onClick={() => setActiveTopic("head")}>
                 Html Head
              </Menu.Item> 
               
              
              <Menu.Item key="htmlayout" onClick={() => setActiveTopic("htmlayout")}>
                 Html Layout
              </Menu.Item> 

               <Menu.Item key="responsive" onClick={() => setActiveTopic("responsive")}>
                 Html Responsive
              </Menu.Item> 

               <Menu.Item key="semantic" onClick={() => setActiveTopic("semantic")}>
                 Html Semantic
              </Menu.Item> 

               <Menu style={{marginLeft:50, color:"green"}}>
                <h4 >HTML FORM</h4>
              </Menu> 

               <Menu.Item key="form" onClick={() => setActiveTopic("form")}>
                 Form
              </Menu.Item> 
             
              <Menu.Item key="formattribute" onClick={() => setActiveTopic("formattribute")}>
                 Form Attribute
              </Menu.Item> 

               <Menu.Item key="formelement" onClick={() => setActiveTopic("formelement")}>
                 Form Element
              </Menu.Item>

              <Menu.Item key="inputtype" onClick={() => setActiveTopic("inputtype")}>
                 Form Tnput Type
              </Menu.Item> 

              <Menu.Item key="inputattributes" onClick={() => setActiveTopic("inputattributes")}>
                 Input Attributes
              </Menu.Item> 

              <Menu style={{marginLeft:50, color:"green"}}>
                <h4 >HTML Graphics</h4>
              </Menu> 

              <Menu.Item key="canvas" onClick={() => setActiveTopic("canvas ")}>
                HTML Canvas
              </Menu.Item> 
              



             
              </SubMenu>
             


          <SubMenu
            key="css"
            icon={<BgColorsOutlined style={{ color: "#03a9f4" }} />}
            title={!collapsed && "CSS"}
          >
            <Menu.Item onClick={() => setActiveTopic("cssIntroduction")}>
              CSS Introduction
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="js" icon={<CodeOutlined style={{ color: "#ffc107" }} />}>
            {!collapsed && "JavaScript"}
          </Menu.Item>

          <Menu.Item key="react" icon={<AppstoreOutlined style={{ color: "#61dafb" }} />}>
            {!collapsed && "React"}
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
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

        {/* Content */}
        <Content
          style={{
            padding: 40,
            background: "#f9fafc",
            minHeight: "calc(100vh - 64px)",
            transition: "all 0.3s ease",
          }}
        >
          {activeTopic ? (
            <div style={{ boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
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



