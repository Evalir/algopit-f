import { useState } from "react";
import { Menu, Icon, Button } from "antd";
import Link from "next/link";

const SideDrawer = ({ collapsed, setCollapsed }) => (
  <div className={`side-drawer ${collapsed || "not_closed"}`}>
    <div className="side-drawer-user">User</div>
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
      <Icon type="arrow-right" />
    </Button>
  </div>
);

const { SubMenu } = Menu;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState("closed");
  // TODO: Modify selection to not light up.
  return (
    <>
      <SideDrawer collapsed={collapsed} setCollapsed={setCollapsed} />
      <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
        <Menu.Item key="1">
          <Button
            type="primary"
            onClick={() => setCollapsed(collapsed === "closed" ? "" : "closed")}
          >
            <Icon type="arrow-right" />
          </Button>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default SideMenu;
