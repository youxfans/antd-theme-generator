import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import SettingForm from '../SettingForm';

import './index.less';

const { Header } = Layout;


const Navbar = props => {
  const [visible, setVisible] = useState(false);
  const menu = (
    <Menu
      theme="dark"
      mode={visible ? 'vertical': 'horizontal'}
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">About</Menu.Item>
      <Menu.Item key="3">Contact</Menu.Item>
    </Menu>
  );

  return (
    <Header className="app-header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div className="logo">Venus Design</div>
      <Button onClick={() => setVisible(true)}>
        Setting
      </Button>
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
      {/* <Default>{menu}</Default>
      <Mobile>
        <Icon type="bars" size="large" className="nav-icon" onClick={() => setVisible(true)} />
        <Drawer
          title=""
          placement="right"
          closable
          onClose={() => setVisible(false)}
          visible={visible}
          className="nav-drawer"
        >
          <div className="logo">Venus Design</div>
          {menu}
        </Drawer>
      </Mobile> */}
    </Header>
  );
};

export default Navbar;
