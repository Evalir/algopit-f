import { useState } from "react";
import { Menu, Icon } from "antd";
import Link from "next/link";

const SideDrawer = ({ collapsed, setCollapsed }) => (
  <div
    className={`side-drawer ${collapsed || "not_closed"}`}
    style={{ background: "#001529" }}
  >
    {/* <div className="side-drawer-user">User</div>
    <div className="side-drawer-nav">
      <nav>
        <ul>
          <li>Problems</li>
          <li>Lists</li>
        </ul>
      </nav>
    </div>
    <Button
      type="primary"
      onClick={() => setCollapsed(collapsed === "closed" ? "" : "closed")}
    >
      <Icon type="arrow-left" />
    </Button> */}
    <Menu mode="inline" theme="dark" inlineCollapsed={`${collapsed}`}>
      <Menu.Item
        key="1"
        onClick={() => setCollapsed(collapsed === "closed" ? "" : "closed")}
      >
        <Icon type="close" />
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="read" />
        <span>Problems</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="profile" />
        <span>Lists</span>
      </Menu.Item>
    </Menu>
  </div>
);

const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState("closed");
  // TODO: Modify selection to not light up.
  return (
    <>
      <SideDrawer
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        theme="dark"
      />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ lineHeight: "64px", left: "0" }}
      >
        <Menu.Item
          key="1"
          onClick={() => setCollapsed(collapsed === "closed" ? "" : "closed")}
        >
          <span>Algopit</span>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SideMenu;
