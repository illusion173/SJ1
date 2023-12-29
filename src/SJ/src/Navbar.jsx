// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem, View, MenuButton } from "@aws-amplify/ui-react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/worldmap">World Map</Link>
          </li>
          <li>
            <Menu trigger={<MenuButton>Locations</MenuButton>}>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
            </Menu>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
