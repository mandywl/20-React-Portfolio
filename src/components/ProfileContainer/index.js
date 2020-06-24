/* eslint-disable no-unused-vars */
import React from "react";
import "./style.css";

function ProfileContainer(props) {
  return (
    <div
      className={`bgimg-${props.backgroundImg} w3-display-container w3-opacity-min1`}
      id={props.id}
    >
      <div className="w3-display-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <header className="entry-header heading">
                <h2 className="entry-title  profile-title">{props.title}</h2>
              </header>
            </div>
            <div className="col-md-8 col-12">
              <article className="block">{props.children}</article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContainer;
