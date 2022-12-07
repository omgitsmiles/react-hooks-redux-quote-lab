import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch, useSelector } from "react-redux";

function QuoteForm() {
  const quotes = useSelector(state => state.quotes)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    content: "",
    author: ""
  });


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
     })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newQuote = {...formData, id: uuid(), votes: 0}
    dispatch(addQuote(newQuote))
    setFormData("")
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      onChange={handleChange}
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      onChange={handleChange}
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
