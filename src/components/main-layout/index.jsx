import { Layout, Menu, Breadcrumb, Icon } from "antd";
import React, { Component } from "react";

import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/product">Product</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/order">Order</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/user">User</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <div>{this.props.children}</div>
      </Layout>
    );
  }
}
