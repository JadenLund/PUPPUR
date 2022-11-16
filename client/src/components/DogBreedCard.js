import {
  Image,
  Reveal,
  Card,
  Grid,
  Modal,
  Button,
  Segment,
} from "semantic-ui-react";
import React, { useState, useEffect, useReducer } from "react";
import NewCommentForm from "./CommentForm";
import "./css_files/DogBreedCard.css";

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

function DogBreedCard({ client, dog }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [comments, setComments] = useState(dog.comments || []);
  const [newComment, setNewComment] = useState(false);
  const [button, setButton] = useState(false);

  const [state, dispatch] = useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  });
  const { open, dimmer } = state;



  function handleMoreInfo() {
    //more info toggle
    setMoreInfo(!moreInfo);
  }
  function handleDelete(id) {
    fetch(`/comments/${id}`, { method: "DELETE" }).then(() => {
      const newComments = comments.filter((comment) => comment.id != id);
      setComments(newComments);
    });
  }

  // function handleThumbsUp(eachCommentForThisDog) {
  //   //make this a post
  //   dog.comments[0].likes += 1;
  //   console.log(dog.comments[0].likes);
  // }

  // function handleThumbsDown() {}
  // function handleNewComment() {}
  // {dog.comments[0].name === undefined ? "There are no comments yet!" : dog.comments[0].name }
  // !!dog.comments.length ? dog.comments.at(0) : ""

  function handleNewComment() {
    setNewComment(!newComment);
    setButton(!button);
    if (!newComment) {
      document.getElementById("add-comment").style.display = "none";
    } else {
      document.getElementById("add-comment").style.display = "block";
    }
  }

  function submitNewComment(comment) {
    const newComments = [...comments];
    newComments.push(comment);
    setComments(newComments);
  }
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
          {comments &&
            comments.map((eachCommentForThisDog) => (
              <Segment key={eachCommentForThisDog.id}>
                <div>
                  <h3 className="comment-title">
                    {eachCommentForThisDog.name}
                  </h3>s
                  <p className="comment-summary">
                    {eachCommentForThisDog.summary}
                  </p>
                  {eachCommentForThisDog.client_id == client.id ? (
                    <Button
                      className="delete-button"
                      onClick={() => handleDelete(eachCommentForThisDog.id)}
                    >
                      X
                    </Button>
                  ) : null}

                  {/* <Icon
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
                /> */}
                </div>
              </Segment>
            ))}

          <NewCommentForm
            client={client}
            dog={dog}
            newComment={newComment}
            submitNewComment={submitNewComment}
            closeNewComment={handleNewComment}
          />
          <div id="add-comment">
            Want to add a comment? Click {"  "}
            <button onClick={handleNewComment}>Here</button>
          </div>
        </Modal.Content>
      </Modal>

      <Card className="dog-card">
        {/* <Image
          className="favorite-icon"
          fluid
          label={{ as: "a", corner: "left", icon: "heart" }}
        /> */}
        <div className="dog-card-image">
          <Reveal animated="move" instant>
            <Reveal.Content visible>
              <Image className="dog-icon" src={dog.icon} size={"medium"} />
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
