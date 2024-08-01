import React, { useState } from "react";
import { getComments } from "../utils/utilFunctions";

const Comment = ({ data }) => {
  const { name, img, comment, replies } = data;
  return (
    <div className="flex p-2 m-1 rounded-lg bg-gray-100">
      <img className="w-8 h-8" src={img} alt="user-icon" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
        {replies?.length > 0 && (
          <div className="pl-1 border border-l-gray-700 ml-1">
            <CommentsList comments={replies} />
          </div>
        )}
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment) => (
    <Comment key={comment.key} data={comment} />
  ));
};

const CommentsContainer = () => {
  const [commentsData] = useState(getComments());

  return (
    <div className="mt-5">
      <h1 className="text-2xl font-bold">{commentsData.length} Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
