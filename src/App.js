/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import emailjs from "emailjs-com";
require("dotenv").config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      name: "Name",
      email: "email@example.com",
      alert: "",
    };
    this.toggleFunction = this.toggleFunction.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ alert: "Sending email to Mandy Wells-Lakeland..." });
    const templateId = "template_EmoVqIXC";
    const userID = `${process.env.REACT_APP_USER_ID}`;
    this.sendFeedback(
      templateId,
      {
        message_html: this.state.message,
        from_name: this.state.name,
        reply_to: this.state.email,
      },
      userID
    );
  }

  sendFeedback(templateId, variables, userID) {
    window.emailjs
      .send("gmail", templateId, variables, userID)
      .then((res) => {
        console.log("Email successfully sent!");
        this.setState({ alert: "Email successfully sent!" });
      })
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
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
        <Contact
          handleNameChange={this.handleNameChange}
          handleEmailChange={this.handleEmailChange}
          handleMessageChange={this.handleMessageChange}
          handleSubmit={this.handleSubmit}
          alert={this.state.alert}
        />
        <Footer />
      </>
    );
  }
}

export default App;
