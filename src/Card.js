import React from "react";
import "./App.css";

const Card = (props) => {
  const liveDemo = props.liveDemo;

  return (
    <div className="card text-center">
      <img
        src={props.image}
        className="card-img-top"
        alt="project screenshot"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="mt-4 mb-4">
          {liveDemo !== "" && (
            <a href={props.liveDemo} className="btn btn-primary m-1 small-text">
              Live Demo <i class="fas fa-eye ml-2"></i>
            </a>
          )}
          <a href={props.repo} className="btn btn-primary m-1 small-text">
            Github Repo <i class="fab fa-github ml-2"></i>
          </a>
        </div>

        <div className="mt-3">
          <img
            src={props.category}
            width="30"
            height="30"
            className="mr-2"
            alt="technology used to build project"
          />
          <span>
            <small>
              <strong>{props.technology}</strong>
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
