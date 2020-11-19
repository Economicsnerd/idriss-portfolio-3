import React from "react";
import "./App.css";
import Typical from "react-typical";

const Home = () => {
  return (
    <div className="flexContainer">
      <div className="hero centered">
        <h1>Hi, I'm Idriss.</h1>
        <h3>I'm, a developer based in Montreal, Canada.</h3>
        <h5>
          <strong className="mr-2">I can</strong>
          <Typical
            loop={3}
            wrapper="b"
            steps={[
              "help you build a website 🖥️ ",
              1000,
              "help you build a web application 📱",
              1000,
              "update/Fix your existing website 🔧",
              1000,
              "help with SEO to reach your target audience 🧑‍💻 ",
              1000,
              "join your team of devs to work on a big project ⛰️",
              1000,
            ]}
          />
        </h5>
        <h5>Contact me</h5>
      </div>
    </div>
  );
};

export default Home;
