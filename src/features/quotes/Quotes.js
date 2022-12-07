import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux"
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";


function Quotes() {
  const quotes = useSelector(state => state.quotes)

  const renderQuotes = quotes.map(quote => (
    <QuoteCard key={quote.id} quote={quote.content} author={quote.author} votes={quote.votes} remove={removeQuote} upvote={upvoteQuote} downvote={downvoteQuote} id={quote.id}/>
  ))

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {renderQuotes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
