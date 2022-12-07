import React from "react";
import { useDispatch } from "react-redux";

function QuoteCard({ quote, author, votes, id, remove, upvote, downvote }) {
  const dispatch = useDispatch()
  console.log(quote)

  // const handleUpvote = (id) => {
  //   dispatch(upvote(id))
  // }

  // const handleDownvote = (id) => {
  //   dispatch(downvoteQuote(id))
  // }

  // const handleDelete = (id) => {
  //   dispatch(removeQuote(id))
  // }


  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={() => dispatch(upvote(id))}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary"  onClick={() => dispatch(downvote(id))}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger"  onClick={() => dispatch(remove(id))}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
