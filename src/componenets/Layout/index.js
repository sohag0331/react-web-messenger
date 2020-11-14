import React from "react";
import Header from "../Header";

/**
 * @author: Sohag Babu
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
