import {
  Image,
  Reveal,
  Card,
  Grid,
  Popup,
  Modal,
  Button,
  Header,
  Segment,
  Comment,
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

function DogBreedCard({ client, dog, handleFavorites, handleUnfavorites }) {
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
            color="teal"
            floated="right"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            X
          </Button>
        </Modal.Header>

        <Modal.Content>
          <Comment.Group size="massive">
            <Comment>
              <Comment.Content>
                {comments &&
                  comments.map((eachCommentForThisDog) => (
                    <Segment key={eachCommentForThisDog.id}>
                      <div>
                        <Comment.Author as="h2" className="comment-title">
                          {eachCommentForThisDog.name}
                        </Comment.Author>
                        <Comment.Text className="comment-summary">
                          {eachCommentForThisDog.summary}
                        </Comment.Text>
                        {eachCommentForThisDog.client_id == client.id ? (
                          <Button
                            color="teal"
                            className="delete-button"
                            compact
                            onClick={() =>
                              handleDelete(eachCommentForThisDog.id)
                            }
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
                  <Button color="teal" compact onClick={handleNewComment}>
                    Here
                  </Button>
                </div>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Modal.Content>
      </Modal>

      <Image
        onClick={() =>
          dog.favorite ? handleUnfavorites(dog.id) : handleFavorites(dog.id)
        }
        className={`favorite-icon ${dog.favorite ? "active" : ""}`}
        fluid
        label={{ as: "a", corner: "left", icon: "heart" }}
      />
      <div className="dog-card-image">
        <Reveal animated="move" instant>
          <Reveal.Content visible>
            <Image className="dog-icon" src={dog.icon} size={"medium"} />
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src={dog.image} size="medium" />
          </Reveal.Content>
        </Reveal>
      </div>
      <>
        <Header textAlign="center">{dog.breed}</Header>

        <Card.Content extra>
          <Popup
            onClose={handleMoreInfo}
            onOpen={handleMoreInfo}
            position="bottom center"
            content={
              <>
                <p>Size: {dog.size}</p>
                <p>AKC Group: {dog.group}</p>
                <p>Coat Length: {dog.coat_length}</p>
              </>
            }
            on="click"
            trigger={
              <Header textAlign="center">
                <Header.Subheader>
                  {moreInfo ? "LESS INFO" : "MORE INFO"}
                </Header.Subheader>
              </Header>
            }
          />

          <Button
            fluid
            floated="right"
            color="teal"
            onClick={() => dispatch({ type: "OPEN_MODAL", dimmer: "blurring" })}
          >
            Comments
          </Button>
        </Card.Content>
      </>
    </div>
  );
}
export default DogBreedCard;
