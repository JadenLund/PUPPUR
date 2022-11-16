import React from "react";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
import dogGroupPicture from "/home/jaden/code/labs/phase-5/PUPPUR/client/src/DogGroupPicture.png";

function About() {
  return (
    <div>
      <Header as="h1">
        This application was built to help you learn about different dog breeds
      </Header>
      <Header as="h3">Built by Jaden (Speckles) Lund</Header>
      <img className="marquee" src={dogGroupPicture} />
    </div>
  );
}
export default About;
