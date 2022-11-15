import {
  Image,
  Reveal,
  Card,
  Grid,
  Modal,
  Button,
  Icon,
} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import "./css_files/PageSetup.css";
import NewCommentForm from "./CommentForm";

function exampleReducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return { open: true, dimmer: action.dimmer };
    case "CLOSE_MODAL":
      return { open: false };
    default:
      throw new Error();
  }
}
function DogBreedCard({ client, dog, comment }) {
  const [likes, setLikes] = useState(0);
  const [aDog, setADog] = useState([]);
  const [moreInfo, setMoreInfo] = useState(false);

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;
  // console.log(dog.comments)
  useEffect(() => {
    //fetches one dog at a time
    fetch(`/dog/${dog.id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setADog(resp);
      });
  }, []);

  function handleMoreInfo() {
    //more info toggle
    setMoreInfo(!moreInfo);
  }
  function handleDelete(id) {
    fetch(`/comments/${id}`, { method: "DELETE" });
  }
  function handleUpdate(id) {
    fetch(`/comments/${id}`, { method: "PATCH" });
  }
  function handleThumbsUp(eachCommentForThisDog) {
    //make this a post
    dog.comments[0].likes += 1;
    console.log(dog.comments[0].likes);
  }

  function handleThumbsDown() {}
  // function handleNewComment() {}
  // {dog.comments[0].name === undefined ? "There are no comments yet!" : dog.comments[0].name }
  // !!dog.comments.length ? dog.comments.at(0) : ""
  return (
    <div>
      <Modal
        dimmer={dimmer}
        open={open}
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
      >
        <Modal.Header floated="left">
          Comments
          <Button
            floated="right"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            X
          </Button>
        </Modal.Header>

        <Modal.Content>
          {dog.comments &&
            dog.comments.map((eachCommentForThisDog) => (
              <div>
                <h3 className="comment-title">{eachCommentForThisDog.name}</h3>
                <p>user:</p>
                <p className="comment-summary">
                  {eachCommentForThisDog.summary}
                </p>
                <Button
                  className="delete-button"
                  onClick={() => handleDelete(eachCommentForThisDog.id)}
                >
                  X
                </Button>
                <Button
                  className="Edit-button"
                  onClick={() => handleUpdate(eachCommentForThisDog.id)}
                >
                  Edit
                </Button>
                <Icon
                  onClick={handleThumbsUp}
                  color="grey"
                  name="thumbs up"
                  size="big"
                />
                <Icon
                  onClick={handleThumbsDown}
                  color="grey"
                  rotated="flipped horizontally"
                  name="thumbs down"
                  size="big"
                />
              </div>
            ))}

          <NewCommentForm client={client} dog={dog} />
        </Modal.Content>
      </Modal>

      <Card className="dog-card">
        <Image
          className="favorite-icon"
          fluid
          label={{ as: "a", corner: "left", icon: "heart" }}
        />
        <div className="dog-card-image">
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
          <Button
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          >
            Comments
          </Button>
          {moreInfo ? (
            <Card.Content extra>
              <p>Size: {dog.size}</p>
              <p>AKC Group: {dog.group}</p>
              <p>Coat Length: {dog.coat_length}</p>
            </Card.Content>
          ) : null}
        </Card.Content>
      </Card>
    </div>
  );
}
export default DogBreedCard;
