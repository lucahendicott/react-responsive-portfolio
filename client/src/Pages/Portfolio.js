import React from "react";
import Project from "../Components/Project";
import burgerEater from "../images/burger-eater.gif";
import durationStation from "../images/duration-station.png";
import mixtape from "../images/mixtape-usage.gif";

const Portfolio = () => {
  return (
    <>
      <div>
        <h1 className="text-center py-5 portfolio-header">Portfolio</h1>
        <Project
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
        <Project
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
        <Project
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
        <Project
          title={"CODE QUIZ"}
          text={
            "An application designed for the user to take a timed JavaScript quiz."
          }
          imageSrc={
            "https://user-images.githubusercontent.com/70814349/97099774-fc860f80-1649-11eb-9a0b-b64c31ca1552.gif"
          }
          link={"https://lucahendicott.github.io/code-quiz/"}
          repo={"https://github.com/lucahendicott/code-quiz.git"}
        />
        <br />
        <br />
        <Project
          title={"WORK DAY SCHEDULER"}
          text={
            "An application designed for the user to plan and save events for their work day."
          }
          imageSrc={
            "https://user-images.githubusercontent.com/70814349/97759401-2f9f2780-1abe-11eb-9996-18d63c24d027.gif"
          }
          link={"https://lucahendicott.github.io/work-day-scheduler/"}
          repo={"https://github.com/lucahendicott/work-day-scheduler.git"}
        />
        <br />
        <br />
        <Project
          title={"WEATHER DASHBOARD"}
          text={
            "An application using Open Weather API for users to search by city and recieve weather information for that day, as well as a 5 day forcast."
          }
          imageSrc={
            "https://user-images.githubusercontent.com/70814349/98759084-24cd7800-2385-11eb-90d2-2c4658e15efa.png"
          }
          link={"https://lucahendicott.github.io/weather-dashboard/"}
          repo={"https://github.com/lucahendicott/weather-dashboard.git"}
        />
        <br />
        <br />
      </div>
    </>
  );
};

export default Portfolio;
