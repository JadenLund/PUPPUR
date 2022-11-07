import { Image, Reveal, Card, Grid, Button } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import "./css_files/PageSetup.css";
function DogBreedCard(id) {
  const [dog, setDog] = useState([]);
  const [moreInfo, setMoreInfo] = useState(false);
  // const [favoriteDogs, setFavoriteDogs] = useState([]);
  // console.log("ID:", id.id);
  // console.log("dog_Id:", dog_id)

  useEffect(() => {
    fetch(`/dog/${id.id}`)
      .then((res) => res.json())
      .then((res) => {
        setDog(res);
      });
  }, [id.id]);

  function handleMoreInfo() {
    //if the box is checked, then hide everything, else dont
    setMoreInfo(!moreInfo);
  }

  function handleComments(){
    console.log("comments")
  }
  // funciton
  // function favoriteClick(id) {
  //   setFavoriteDogs([...favoriteDogs, setFavoriteDogs])
  //   console.log(favoriteDogs)
  // }

  return (
    <Card className="dog_card">
      <Image
        className="favorite-icon"
        fluid
        label={{ as: "a", corner: "left", icon: "heart" }}
      />
      <div className="dog_card_image">
        <Reveal animated="move" instant>
          <Reveal.Content visible>
            <Image src={dog.icon} size={"medium"} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={dog.image} size="medium" />
          </Reveal.Content>
          <Grid columns={2}></Grid>
        </Reveal>
      </div>
      <Card.Content>
        <Card.Header>{dog.breed}</Card.Header>
      </Card.Content>

      <Card.Content extra>
        <a onClick={handleMoreInfo}>{moreInfo ? "LESS INFO" : "MORE INFO"}</a>{" "}
        <Button onClick={handleComments} floated="right">Comments</Button>
        {moreInfo ? (
          <Card.Content extra>
            <p>Size: {dog.size}</p>
            <p>AKC Group: {dog.group}</p>
            <p>Coat Length: {dog.coat_length}</p>
          </Card.Content>
        ) : null}
      </Card.Content>
    </Card>
  );
}
export default DogBreedCard;
