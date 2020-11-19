import React, { Component } from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Website's logo"
            className="navbar-brand"
            width="30"
            height="30"
          />
          idrissCodes
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/projects" className="nav-link">
                projects <span className="parenthesis">()</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" className="nav-link">
                contact <span className="parenthesis">()</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">
                about <span className="parenthesis">()</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
