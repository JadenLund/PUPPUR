import React, { useState, useEffect } from "react";

function CommentCard(id) {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(`/dog/${id.id}/comments`)
      .then((res) => res.json())
      .then((res) => {
        setComment(res);
      });
  }, [id.id]);

  return (
    <div className="comment">
      <h1></h1>
      <h3>{comment.title}</h3>
    </div>
  );
}
export default CommentCard;
