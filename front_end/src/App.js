// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import Axios from "./axios";

function App() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassword] = useState("");

  const save = () => {
    const result = {
      userName: userName,
      passWord: passWord,
    };

    Axios.post("http://localhost:3000/", result)
      .then((req) => {
        console.log(req);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form">
      <div className="form__content">
        <div className="form__header">
          <p>First React App</p>
        </div>
        <div className="form__body">
          <div className="form__row">
            <div className="form__info row_2">
              <label>Username</label>
              <input
                type="text"
                placeholder="Type Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form__info row_2">
              <label>Password</label>
              <input
                type="text"
                placeholder="Type Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form__row footer">
            <button id="save" onClick={() => save()}>
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
