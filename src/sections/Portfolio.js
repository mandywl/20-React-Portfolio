/* eslint-disable no-unused-vars */
import React from "react";
import ProfileContainer from "../components/ProfileContainer";

function Portfolio() {
  return (
    <>
      <ProfileContainer backgroundImg="1" title="Portfolio" id="portfolio">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://www.w3schools.com/w3images/p2.jpg"
                alt="..."
              ></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>first image</h5>
                <p>this is a test</p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://www.w3schools.com/w3images/p1.jpg"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://www.w3schools.com/w3images/p3.jpg"
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </ProfileContainer>
    </>
  );
}

export default Portfolio;
