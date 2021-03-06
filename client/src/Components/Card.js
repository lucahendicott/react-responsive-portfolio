import React from "react";

const Card = (props) => {
  return (
    <div className="card portfolio-card" style={{ width: "600px" }}>
      <img className="card-img-top" src={props.imageSrc} alt="Mixtape-gen" />
      <div className="card-body">
        <h3 className="card-title text-left">{props.title}</h3>
        <p className="card-text">{props.text}</p>
        <a
          href="https://mixtape-generation.herokuapp.com/"
          className="btn btn-info"
          target="_blank"
        >
          Deploy App
        </a>
        <br />
        <a
          href="https://github.com/lucahendicott/MixTapeGeneration.git"
          className="btn btn-info"
          target="_blank"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Card;
