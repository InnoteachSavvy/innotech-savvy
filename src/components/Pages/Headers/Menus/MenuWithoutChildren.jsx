// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuWithoutChildren = ({ main_menu_name, main_menu_link }) => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link" to={`/${main_menu_link}`}>
          {main_menu_name}
        </Link>
      </li>
    </>
  );
};

export default MenuWithoutChildren;
