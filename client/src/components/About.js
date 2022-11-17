import React from "react";
import { Header, Icon, Image } from "semantic-ui-react";
// import dogGroupPicture from "/home/jaden/code/labs/phase-5/PUPPUR/client/src/DogGroupPicture.png";

function About() {
  return (
    <div>
       <Image size='tiny' centered src="https://cdn-icons-png.flaticon.com/512/1596/1596810.png" />
      <Header
        as="h2"
        textAlign='center'
        content="Learn about new breeds with PUPPUR!"
        subheader="Built by Jaden (Speckles) Lund"
      />
      <img
        className="marquee"
        src={
          "https://media2.giphy.com/media/326iF1qWfsTgKA4c78/giphy.gif?cid=6c09b952895bd3e79a8d60f61dc7362e095c919c2a692c76&rid=giphy.gif&ct=s"
        }
      />
    </div>
  );
}
export default About;
