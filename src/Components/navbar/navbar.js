import React, {Component} from 'react';
import { Menu, Icon } from 'antd';
import './navbar.css';


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
          theme="dark"
        >
          <Menu.Item key="code-o">
          <a href="/" target="_blank" rel="noopener noreferrer"></a>
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
              <Menu.Item key="setting:1">Github
              <a href="https://github.com/PMatrixMedia" target="_blank" rel="noopener noreferrer"></a>
              </Menu.Item>
              <Menu.Item key="setting:3">Code Pen
              <a href="https://codepen.io/pmatrixmedia/" target="_blank" rel="noopener noreferrer"></a>
              </Menu.Item>
              <Menu.Item key="setting:4">Code Sandbox
              <a href="https://codesandbox.io/u/PMatrixMedia" target="_blank" rel="noopener noreferrer"></a>
              </Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a>
          </Menu.Item>
        </Menu>
      );
    }
  }

export default Navbar;