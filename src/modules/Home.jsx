import React from "react";
import Navbars from "./Navbars";
import myImage from "../assets/myimage20221227140623.jpg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <div id="Home" name="home" className="parentContainer">
      <Navbars />
      <SocialLinks />
      <div className="homeContainer">
        <div className="textBox">
          <h2 className="heading">I'm a Full Stack Developer</h2>
          <p className="titleclass">
            I have 1 year of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>
          <div>
          <a href="#Portfolio" rel="noreferrer">
            <button className="btnClass" id="portfoliobtn">
              Portfolio
              <span>
                {" "}
                <MdOutlineArrowForwardIos id="arrowid" />
              </span>
            </button>
            </a>
          </div>
        </div>
        <div className="imgBox col-sm-3">
          <img
            src={myImage}
            id="myImageId"
            className="myImageclass"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
