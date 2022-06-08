import React from "react";
import { slide as Menu } from "react-burger-menu";
import Skills from "./Skills/skills.js";
export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      {/* <a className="menu-item" href="/">
        Home
      </a> */}

      <a className="menu-item" href="/skills">
        <Skills />
      </a>

      {/* <a className="menu-item" href="/projects">
        Projects
      </a> */}

      {/* <a className="menu-item" href="/testimonials">
        Testimonials
      </a> */}
    </Menu>
  );
};
