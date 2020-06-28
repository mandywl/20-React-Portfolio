/* eslint-disable no-unused-vars */
import React from "react";

function Footer() {
  return (
    <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
      <a href="#about" className="w3-button w3-light-grey">
        <i className="fa fa-arrow-up w3-margin-right"></i>To the top
      </a>
      <div className="w3-xlarge w3-section">
        <a className="contactLink" href="https://github.com/mandywl">
          <i className="fa fa-github-square w3-hover-opacity pr-2"></i>
        </a>
        <a
          className="contactLink"
          href="https://www.linkedin.com/in/mandywellslakeland/"
        >
          <i className="fa fa-linkedin w3-hover-opacity"></i>
        </a>
      </div>
      <p>Mandy Wells-Lakeland</p>
    </footer>
  );
}

export default Footer;
