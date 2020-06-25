/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

class App extends Component {
  constructor() {
    super();
    this.toggleFunction = this.toggleFunction.bind(this);
  }

  componentDidMount() {
    window.onscroll = function () {
      var navbar = document.getElementById("myNavbar");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navbar.className =
          "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
        navbar.className = navbar.className.replace(
          " w3-card w3-animate-top w3-white",
          ""
        );
      }
    };
  }

  toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

  render() {
    return (
      <>
        <Navbar onClickFunction={this.toggleFunction} />
        <About />
        <Portfolio />
        <Contact />
      </>
    );
  }
}

export default App;
