/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

export const NavItem = (props) => {
  return (
    <a
      className={props.className}
      href={props.href}
      onClick={props.onClickFunction}
      title={props.title}
    >
      <i className={props.icon}></i>
      {props.label}
    </a>
  );
};
function Navbar(props) {
  return (
    <div className="w3-top">
      <div className="w3-bar" id="myNavbar">
        <NavItem
          className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
          href="javascript:void(0);"
          onClickFunction={props.onClickFunction}
          title="Toggle Navigation Menu"
          icon="fa fa-bars"
        />
        <NavItem className="w3-bar-item w3-button" href="#home" label="HOME" />
        <NavItem
          className="w3-bar-item w3-button w3-hide-small"
          href="#about"
          icon="fa fa-user"
          label="ABOUT"
        />
        <NavItem
          className="w3-bar-item w3-button w3-hide-small"
          href="#portfolio"
          icon="fa fa-th"
          label="PORTFOLIO"
        />
        <NavItem
          className="w3-bar-item w3-button w3-hide-small"
          href="#contact"
          icon="fa fa-envelope"
          label="CONTACT"
        />
        <NavItem
          className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red"
          href="#"
          icon="fa fa-search"
        />
      </div>

      {/* <!-- Navbar on small screens --> */}
      <div
        id="navDemo"
        className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium"
      >
        <NavItem
          className="w3-bar-item w3-button"
          href="#about"
          onClickFunction={props.onClickFunction}
          label="ABOUT"
        />
        <NavItem
          className="w3-bar-item w3-button"
          href="#portfolio"
          onClickFunction={props.onClickFunction}
          label="PORTFOLIO"
        />
        <NavItem
          className="w3-bar-item w3-button"
          href="#contact"
          onClickFunction={props.onClickFunction}
          label="CONTACT"
        />
        <NavItem
          className="w3-bar-item w3-button"
          href="#"
          onClickFunction={props.onClickFunction}
          label="SEARCH"
        />
      </div>
    </div>
  );
}

export default Navbar;
