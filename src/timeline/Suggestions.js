import React from "react";
import "./Suggestions.css";
import { Avatar } from "@mui/material";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="username__info">
              <div className="username">Yash_</div>
              <div className="relation">New to Instagram</div>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="username__info">
              <div className="username">Yash_</div>
              <div className="relation">New to Instagram</div>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="username__info">
              <div className="username">Yash_</div>
              <div className="relation">New to Instagram</div>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>Y</Avatar>
            </span>
            <div className="username__info">
              <div className="username">Yash_</div>
              <div className="relation">New to Instagram</div>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
