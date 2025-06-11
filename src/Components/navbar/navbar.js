
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom'; // Step 1: Import Link for internal navigation

// Step 2: Import specific icons from @ant-design/icons
import {
  CodeOutlined,
  ProfileOutlined,
  SettingOutlined,
  GithubOutlined,      // For Github
  CodeSandboxOutlined, // For Code Sandbox
  MailOutlined,        // For Contact (or ContactsOutlined)
} from '@ant-design/icons';

//import '../../antd.css';
import './navbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navbar extends React.Component { // Changed from React.Component to just Component
  // The constructor, toggle method, and isOpen state seemed unused for this navbar.
  // If they were intended for other features (like a mobile responsive toggle),
  // you would need to re-integrate that logic.

  // The handleClick method for SubMenu was also not defined and often isn't
  // needed if the SubMenu's only job is to open/close.

  render() {
    return (
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="home">
          {/* Step 3: Use Link for internal navigation */}
          <Link to="/">
            <CodeOutlined />
            <span>Home</span>
          </Link>
        </Menu.Item>

        <Menu.Item key="blog">
          {/* External link, so <a> tag with target="_blank" is appropriate */}
          <a href="https://www.facebook.com/Phasematrixmedia-108166067256262/" target="_blank" rel="noopener noreferrer">
            <ProfileOutlined />
            <span>Blog</span>
          </a>
        </Menu.Item>

        <SubMenu key="features" title={<span className="submenu-title-wrapper"><SettingOutlined /><span>Features</span></span>}>
          <MenuItemGroup title="Site Features">
            <Menu.Item key="setting:1">Remote Access</Menu.Item> {/* These could also be Links if they navigate */}
            <Menu.Item key="setting:2">API</Menu.Item>
            <Menu.Item key="setting:3">Music</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Coding Repos">
            <Menu.Item key="github">
              <a href="https://github.com/PMatrixMedia" target="_blank" rel="noopener noreferrer">
                <GithubOutlined /> {/* Added Github icon */}
                <span>Github</span>
              </a>
            </Menu.Item>
            <Menu.Item key="codesandbox">
              <a href="https://codesandbox.io/u/PMatrixMedia" target="_blank" rel="noopener noreferrer">
                <CodeSandboxOutlined /> {/* Added CodeSandbox icon */}
                <span>Code Sandbox</span>
              </a>
            </Menu.Item>
          </MenuItemGroup>
        </SubMenu>

        <Menu.Item key="contact">
          <Link to="/contact">
            <MailOutlined /> {/* Added Mail icon */}
            <span>Contact</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;