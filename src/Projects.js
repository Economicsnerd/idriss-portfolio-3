import React from "react";
import Card from "./Card.js";

// Tech Logos
import logo from "./logo.svg";
import Rails from "./icons/rails.png";
import WordPress from "./icons/wordpress.svg.png";

// Project Screenshots

import GithubFinder from "./project-images/GithubFinder.jpg";
import OpenProjects from "./project-images/Open_Projects.jpg";
import PoochStagram from "./project-images/PoochStagram.jpg";
import ReactSnake from "./project-images/React-Snake.jpg";
import BrokeFoodie$ from "./project-images/BrokeFoodie$.jpg";
import AConsulting from "./project-images/AConsulting.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="mt-5">
        My Projects <span className="parenthesis">()</span>
      </h1>
      <hr />
      <br />
      <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2">
        <div class="col mb-4">
          <Card
            image={AConsulting}
            title="Amraoui Consulting"
            description="A WordPress Site built for my dad's new consulting agency in Marrakech, Morocco. Good luck to you on this new venture! "
            category={WordPress}
            technology="Built with Wordpress"
            liveDemo="https://consultingamraoui.com/"
            repo=""
          />
        </div>
        <div class="col mb-4">
          <Card
            image={GithubFinder}
            title="Github Finder"
            description="A web app built on ReactJs that interacts with the Github API to find and display github users. All styling is custom."
            category={logo}
            technology="Built with React"
            liveDemo="https://githubffinder.netlify.app/"
            repo="https://github.com/Economicsnerd/github-finder"
          />
        </div>
        <div class="col mb-4">
          <Card
            image={PoochStagram}
            title="PoochStagram"
            description="A fun app inspired by popular social media apps. Features: Sign-in, upload photos, like, comment."
            category={Rails}
            technology="Built with Ruby on Rails"
            repo="https://github.com/Economicsnerd/poochStagram"
            liveDemo="http://poochstagram.herokuapp.com/users/sign_in"
          />
        </div>
        <div class="col mb-4">
          <Card
            image={OpenProjects}
            title="Open Projects"
            description="A simple project manager. Features: Sign-in, add projects and tasks. Arrange tasks by drag and drop. "
            category={Rails}
            technology="Built with Ruby on Rails"
            liveDemo="http://open-projects.herokuapp.com/"
          />
        </div>
        <div class="col mb-4">
          <Card
            image={ReactSnake}
            title="Snake"
            description="This is the classic Nokia game, Snake. This was a fun project and my very first attempt at building something with react. "
            category={logo}
            technology="Built with React"
            liveDemo=""
            repo="https://github.com/Economicsnerd/reactjs-snake"
          />
        </div>
        <div class="col mb-4">
          <Card
            image={BrokeFoodie$}
            title="Broke Foodies"
            description="My recipe blog and first online business. Built using the Genesis Framework. Content and customization was made by me."
            category={WordPress}
            technology="Built with Wordpress"
            liveDemo="https://www.brokefoodies.com/"
            repo=""
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
