import React, { Component } from "react";
import Social from "./Social";

export class About extends Component {
  render() {
    return (
      <div>
        <h1 className="mt-5">
          About me <span className="parenthesis">()</span>
        </h1>
        <hr />
        <br />
        <h1>My name is Idriss</h1>
        <h3>
          Full Stack Web <u>Developer</u> | UI/UX <u>Designer</u>
        </h3>
        <br></br>
        <p>
          I have been programming since the late 2000's when I started my
          computer science program. I later went on to study economics and
          political science and I'm now a graduate student in University of
          Montreal. I love building web applications that help businesses
          conduct their day to day operations smoothly. I am a freelance
          developer and Co-Founder of
          <a className="text-link ml-1" href="https://gitwebsavvy.com/">
            GitWebSavvy.com.
          </a>
        </p>
        <br />
        <h4>Thanks for stopping by!</h4>
        <Social />
      </div>
    );
  }
}

export default About;
