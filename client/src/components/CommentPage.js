import React from "react";
import CommentCard from "./CommentCard";

function CommentPage({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      <button className="leave-comments">X</button>
      <CommentCard comments={comments} />
    </div>
  );
}
export default CommentPage;
