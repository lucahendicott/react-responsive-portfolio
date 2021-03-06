import React from "react";
import Card from "../Components/Card";
import burgerEater from "../images/burger-eater.gif";
import durationStation from "../images/duration-station.png";
import mixtape from "../images/mixtape-usage.gif";

const Portfolio = () => {
  return (
    <>
      <div>
        <h1 className="text-uppercase text-center py-5 portfolio-header">
          Portfolio
        </h1>
        <Card
          title={"MIXTAPE GENERATION"}
          text={
            "An application for users to search songs by keywords and add them to custom playlists."
          }
          imageSrc={mixtape}
          link={"https://mixtape-generation.herokuapp.com/"}
          repo={"https://github.com/lucahendicott/MixTapeGeneration.git"}
        />
        <br />
        <br />
        <Card
          title={"EAT THE BURGER"}
          text={
            "An application for users to search songs by keywords and add them to custom playlists."
          }
          imageSrc={burgerEater}
          link={"https://murmuring-badlands-36701.herokuapp.com/?"}
          repo={"https://github.com/lucahendicott/burger-eater.git"}
        />
        <br />
        <br />
        <Card
          title={"DURATION STATION"}
          text={
            "An application designed to return music artist's album information, by searching album names."
          }
          imageSrc={durationStation}
          link={"https://lucahendicott.github.io/duration-station/"}
          repo={"https://github.com/lucahendicott/duration-station.git"}
        />
        <br />
        <br />
        <Card
          title={"CODE QUIZ"}
          text={
            "An application designed for the user to take a timed JavaScript quiz."
          }
          imageSrc="https://user-images.githubusercontent.com/70814349/97099774-fc860f80-1649-11eb-9a0b-b64c31ca1552.gif"
          link={"https://lucahendicott.github.io/code-quiz/"}
          repo={"https://github.com/lucahendicott/code-quiz.git"}
        />
      </div>
    </>
  );
};

export default Portfolio;
