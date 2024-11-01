import React, { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="NavbarLogo">Viajes</h1>

        <div
          className="menu-icons"
          onClick={this.handleClick}
          aria-expanded={this.state.clicked}
        >
          {this.state.clicked ? "×" : "≡"}
        </div>

        <ul className={this.state.clicked ? "Navbarmenu active" : "Navbarmenu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
