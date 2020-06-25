/* eslint-disable no-unused-vars */
import React from "react";
import ProfileContainer from "../components/ProfileContainer";

export const ContactTile = (props) => {
  return (
    <div className="row pb-3">
      <div className="col-sm-1 col-12">
        <i className={`icon fa ${props.icon}`}></i>
      </div>
      <div className={`col-sm-11 col-12 ${props.contactClass}`}>
        {props.children}
      </div>
    </div>
  );
};

function Contact() {
  return (
    <>
      <ProfileContainer backgroundImg="1" title="Contact" id="contact">
        <ContactTile icon="fa-map-marker">Melbourne, AU</ContactTile>
        <ContactTile icon="fa-phone">0478949511</ContactTile>
        <ContactTile icon="fa-envelope">mandy.liu4@gmail.com</ContactTile>
        <ContactTile icon="fa-linkedin" contactClass="linkedin">
          <a
            className="contactLink"
            href="https://www.linkedin.com/in/mandywellslakeland/"
          >
            https://www.linkedin.com/in/mandywellslakeland/
          </a>
        </ContactTile>
        <ContactTile icon="fa-github-square">
          <a className="contactLink" href="https://github.com/mandywl">
            https://github.com/mandywl
          </a>
        </ContactTile>
        <ContactTile>
          <a className="resume" href="assets/Images/CV_Mandy.pdf" download>
            <strong>Download Resume</strong>
          </a>
        </ContactTile>
        <div className="row pb-3 ml-1">
          <p>
            Swing by for a cup of <i className="fa fa-coffee"></i>, or leave me
            a note:
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
