import React from "react";

const Card = (props) => {
  return (
    <div className="porfolio-styles col-md-6 col-xs-4">
      <div className="container portfolio-container">
        <div className="image-wrapper row">
          <div className="portfolio-photo-box">
            <img
              className="portfolio-photo"
              src={props.imageSrc}
              alt={props.alt}
            />
          </div>
        </div>
        <h3 className="card-title text-left">{props.title}</h3>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-info" target="_blank">
          Deploy App
        </a>
        <br />
        <a href={props.repo} className="btn btn-info" target="_blank">
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Card;
