import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

function reducer(state = { postData: [] }, action) {
  const newData = [...state.postData];

  if (action.type === "ADD") {
    newData.push(action.add_newPost);
    return { postData: newData };
  }
  if (action.type === "DELETE") {
    newData.splice(state.postData.indexOf(action.add_newPost), 1);
    return { postData: newData };
  }
  if (action.type === "CHANGE") {
    newData.splice(
      state.postData.indexOf(action.add_newPost),
      1,
      action.add_newPost
    );

    return { postData: newData };
  }

  return state;
}

let store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
