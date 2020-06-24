/* eslint-disable no-unused-vars */
import React from "react";
import ProfileContainer from "../components/ProfileContainer";

function Contact() {
  return (
    <>
      <ProfileContainer backgroundImg="1" title="Contact" id="contact">
        <div className="row pb-3">
          <div className="col-sm-1 col-12">
            <i className="icon fa fa-map-marker"></i>
          </div>
          <div className="col-sm-11 col-12">Melbourne, AU</div>
        </div>
        <div className="row pb-3">
          <div className="col-sm-1 col-12">
            <i className="icon fa fa-phone"></i>
          </div>
          <div className="col-sm-11 col-12">0478949511</div>
        </div>
        <div className="row pb-3">
          <div className="col-sm-1 col-12">
            <i className="icon fa fa-envelope"></i>
          </div>
          <div className="col-sm-11 col-12">mandy.liu4@gmail.com</div>
        </div>
        <div className="row pb-3">
          <div className="col-sm-1 col-12">
            <i className="icon fa fa-linkedin"></i>
          </div>
          <div className="col-sm-11 col-12 linkedin">
            <a
              className="contactLink"
              href="https://www.linkedin.com/in/mandywellslakeland/"
            >
              https://www.linkedin.com/in/mandywellslakeland/
            </a>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-sm-1 col-12">
            <i className="icon fa fa-github-square"></i>
          </div>
          <div className="col-sm-11 col-12">
            <a className="contactLink" href="https://github.com/mandywl">
              https://github.com/mandywl
            </a>
          </div>
        </div>
        <div className="row pb-3">
          <div className="col-sm-11 col-12">
            <a className="resume" href="assets/Images/CV_Mandy.pdf" download>
              <strong>Download Resume</strong>
            </a>
          </div>
        </div>
        <div className="row pb-3">
          <p>
            Swing by for a cup of <i class="fa fa-coffee"></i>, or leave me a
            note:
          </p>
          <form action="/action_page.php" target="_blank">
            <div className="w3-row-padding form">
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Name"
                  required
                  name="Name"
                />
              </div>
              <div className="w3-half">
                <input
                  className="w3-input w3-border"
                  type="text"
                  placeholder="Email"
                  required
                  name="Email"
                />
              </div>
            </div>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Message"
              required
              name="Message"
            />
            <button
              className="w3-button w3-black w3-right w3-section"
              type="submit"
            >
              <i className="fa fa-paper-plane"></i> SEND MESSAGE
            </button>
          </form>
        </div>
      </ProfileContainer>
    </>
  );
}

export default Contact;
