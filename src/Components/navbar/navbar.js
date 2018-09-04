import React, {Component} from 'react';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



  class Navbar extends React.Component {
    state = {
      current: 'code-o',
    }
  
    handleClick = (e) => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    }
  
    render() {
      return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="code-o">
            <Icon type="code-o" />Home
          </Menu.Item>
          <Menu.Item key="profile" disabled>
            <Icon type="profile" />Blog
          </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Features</span>}>
            <MenuItemGroup title="Site Features">
              <Menu.Item key="setting:1">Remote Access</Menu.Item>
              <Menu.Item key="setting:2">API</Menu.Item>
              <Menu.Item key="setting:3">Music</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Coding Repos">
              <Menu.Item key="setting:1">Github</Menu.Item>
              <Menu.Item key="setting:3">Code Pen</Menu.Item>
              <Menu.Item key="setting:4">Code Sandbox</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="" target="_blank" rel="noopener noreferrer">Contact</a>
          </Menu.Item>
        </Menu>
      );
    }
  }

export default Navbar;