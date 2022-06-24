import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../component/index";
import styles from "./SidebarLayoutPage.module.css";

const SidebarLayoutPage = () => {
  return (
    <div className={`${styles.sidebar_wrapper}`}>
      {<Sidebar />}
      <div className={`${styles.outlet_wrapper}`}>
        <Outlet />
      </div>
    </div>
  );
};

export { SidebarLayoutPage };
