// Action Creators
// TODO: Create action creators as defined in tests
import { v4 as uuid } from "uuid";

const id = uuid()

export const addQuote = (newQuote) => {
  return {
    type: "quotes/add",
    payload: newQuote
  }
}

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id
  }
}

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id
  }
}

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    
    case "quotes/add":
      return [...state, action.payload]

    case "quotes/remove": 
      return state.filter(quote => quote.id !== action.payload)

    case "quotes/upvote":
      return state.map(quote => {
        if (quote.id === action.payload) {
        quote.votes += 1
        return quote
      } else {
        return quote
      }
    })

    case "quotes/downvote":
      return state.map(quote => {
        if (quote.id === action.payload && quote.votes !== 0) {
          quote.votes -= 1
          return quote
        } else {
          return quote
        }
      })
  }

  return state;
}
