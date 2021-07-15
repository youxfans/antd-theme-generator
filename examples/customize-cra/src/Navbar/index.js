import React, { useState } from "react";
import { Layout, Drawer, Button, Menu } from "antd";
import { Link } from "react-router-dom";
import SettingForm from "../SettingForm";

import "./index.less";

const { Header } = Layout;

const Navbar = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <Header
      className="app-header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <div className="logo">
          <Link to="/">
            <img src="favicon.png" alt="logo" />
            <span>Venus Design</span>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Component"]}
        >
          <Menu.Item key="Component">
            <Link to="component">Component</Link>
          </Menu.Item>
          <Menu.Item key="Design">
            <Link to="design">Design</Link>
          </Menu.Item>
          <Menu.Item key="Demo" disabled>
            Demo
          </Menu.Item>
        </Menu>
      </div>
      <Button onClick={() => setVisible(true)}>Setting</Button>
      <Drawer
        title="Theme Setting"
        placement="right"
        closable={false}
        width={720}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <SettingForm />
      </Drawer>
    </Header>
  );
};

export default Navbar;
