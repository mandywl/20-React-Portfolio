/* eslint-disable no-unused-vars */
import React from "react";
import ProfileContainer from "../components/ProfileContainer";

function About() {
  return (
    <>
      <ProfileContainer backgroundImg="1" title="About me" id="about">
        <p>
          Full Stack Web Developer with experience as an ISTQB certified
          Advanced Test Analyst. Attained qualifications in Bachelor of Computer
          Science and Business Management and Certificate in Full Stack
          Development from Monash University Coding Bootcamp. Proficient in
          HTML, CSS and JavaScript with experience in web development, testing
          web services and writing automated tests. I applied aspects of
          Javascript and SQL in a recent project to develop manual and automated
          test scenarios to help organisations achieve their business outcomes.
          Demonstrated excellent communication and ability to build strong
          relationships and produce quality outcomes throughout my 5 years of
          work experience in Education, Government, Banking, Healthcare, Real
          Estate and Insurance industries.
        </p>
        <br />
        <p>
          I am seeking the opportunity to apply my practical experience,
          knowledge and personal attributes to add value to your team and build
          further success for your organisation. Looking forward to contributing
          my creativity and innovation and prepared to excel in a technical
          environment.
        </p>
      </ProfileContainer>
    </>
  );
}

export default About;
