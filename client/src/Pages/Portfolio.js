import React from "react";
import Card from "../Components/Card";
import burgerEater from "../images/burger-eater.gif";
import mixtape from "../images/mixtape-usage.gif";

const Portfolio = () => {
  return (
    <div>
      <Card
        title={"Mixtape Generation"}
        text={
          "An application for users to search songs by keywords and add them to custom playlists."
        }
        imageSrc={mixtape}
      />
      <Card
        title={"EAT THE BURGER"}
        text={
          "An application for users to search songs by keywords and add them to custom playlists."
        }
        imageSrc={burgerEater}
      />
    </div>
  );
};

export default Portfolio;
