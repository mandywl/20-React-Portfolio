/* eslint-disable no-unused-vars */
import React from "react";
import ProfileContainer from "../components/ProfileContainer";
import Coverflow from "react-coverflow";
import { StyleRoot } from "radium";

function Portfolio() {
  return (
    <>
      <ProfileContainer
        backgroundImg="2"
        title="Portfolio"
        id="portfolio"
        articleClass="portfolio"
      >
        <Coverflow
          width={850}
          height={500}
          displayQuantityOfSide={1}
          infiniteScroll
          enableHeading
          media={{
            "@media (max-width: 540px)": {
              width: "330px",
              height: "300px",
            },
            "@media (min-width: 540px)": {
              width: "510px",
              height: "500px",
            },
            "@media (min-width: 1500px)": {
              width: "850px",
              height: "500px",
            },
          }}
        >
          <img
            src="./assets/project1.png"
            alt="CSS Zen Garden"
            data-action="https://mandywl.github.io/cssZenGarden/"
          />
          <img
            src="./assets/project2.jpg"
            alt="Check github ranking"
            data-action="https://github.com/mandywl/Check-Your-GitHub-Ranking"
          />
          <img
            src="./assets/knowledge_hub.PNG"
            alt="Group Project - Knowledge hub"
            data-action="https://mandywl.github.io/project1-knowledge-hub/"
          />
          <img
            src="./assets/weather_dashboard.PNG"
            alt="Weather Dashboard"
            data-action="https://mandywl.github.io/weather-dashboard-mandy/"
          />
          <img
            src="./assets/day_planner.PNG"
            alt="Day Planner"
            data-action="https://mandywl.github.io/day-planner-mandy/"
          />
          <img
            src="./assets/code_quiz.PNG"
            alt="Code Quiz"
            data-action="https://mandywl.github.io/web-apis-code-quiz-mandy/"
          />
          <img
            src="./assets/team_profile.png"
            alt="Team Profile Generator"
            data-action="https://github.com/mandywl/Team-Profile-Generator"
          />
          <img
            src="./assets/burger_app.png"
            alt="Node Express Handlebars"
            data-action="https://eat-da-burger-mandy.herokuapp.com/"
          />
          <img
            src="./assets/shopping_cart.png"
            alt="Group Project - Shopping Cart"
            data-action="https://e-store-template.herokuapp.com"
          />
        </Coverflow>
      </ProfileContainer>
    </>
  );
}

export default Portfolio;
