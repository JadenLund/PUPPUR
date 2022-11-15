import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";

function NewCommentForm({ dog, client, setClient }) {
  const [newComment, setNewComment] = useState(false);
  const [button, setButton] = useState(false);
  const [submitForm, setSubmitForm] = useState();
  const [name, setName] = useState();
  const [summary, setSummary] = useState();


  function handleNewComment() {
    setNewComment(!newComment);
    setButton(!button);
    if (button == false) {
      document.getElementById("add-comment").style.display = "none";
    }
  }
  const handleNameChange = (e, { name, value }) => {
    setName(value);
  };
  const handleSummaryChange = (e, { name, value }) => {
    setSummary(value);
  };

  const handleSubmit = (e) => {
    const data = { name, summary, client_id: client.id, dog_id: dog.id };

    e.preventDefault();
    fetch("/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((resp) => {
        resp.json();
      })
      .then();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div id={"add-comment"} className="add-comment">
        Want to add a comment? Click {"  "}
        <button onClick={handleNewComment}>Here</button>
      </div>
      <div className="new-comment-form">
        {newComment ? (
          <div>
            <Form.Input
              onChange={handleNameChange}
              label="Title"
              placeholder="title"
            />
            <Form.TextArea
              onChange={handleSummaryChange}
              label="About"
              placeholder="Tell us what you know!"
            />
            <Form.Button content="Submit" />
          </div>
        ) : null}
      </div>
    </Form>
  );
}
export default NewCommentForm;
