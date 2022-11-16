import React from "react";
import Header from "semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader";
// import dogGroupPicture from "/home/jaden/code/labs/phase-5/PUPPUR/client/src/DogGroupPicture.png";

function About() {
  return (
    <div>
      <Header as="h1">
        This application was built to help you learn about different dog breeds
      </Header>
      <Header as="h3">Built by Jaden (Speckles) Lund</Header>
      <img className="marquee" src={"https://media2.giphy.com/media/326iF1qWfsTgKA4c78/giphy.gif?cid=6c09b952895bd3e79a8d60f61dc7362e095c919c2a692c76&rid=giphy.gif&ct=s"} />
    </div>
  );
}
export default About;
