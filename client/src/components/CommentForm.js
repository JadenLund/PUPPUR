import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";

function NewCommentForm({
  dog,
  client,
  newComment,
  submitNewComment,
  closeNewComment,
}) {
  const [name, setName] = useState();
  const [summary, setSummary] = useState();

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
        return resp.json();
      })
      .then((data) => {
        submitNewComment(data);
        closeNewComment();
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
            <Form.Button color='teal' content="Submit" />
          </div>
        ) : null}
      </div>
    </Form>
  );
}
export default NewCommentForm;
