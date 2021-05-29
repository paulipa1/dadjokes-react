import React, { useState } from 'react';
import { jokes } from '../jokes';
import './style.css';

export const Joke = (props) => {
  return (
    <div>
      {jokes.map((user) => {
        const [upLikes, setUpLikes] = useState([user.likes]);
        const [downLikes, setDownLikes] = useState([user.dislikes]);

        return (
          <div key={user.id} className="container">
            <div className="joke">
              <div className="joke__body">
                <div className="joke__user">
                  <img className="user-avatar" src={user.avatar} />
                  <p className="user-name">{user.name}</p>
                </div>

                <p className="joke__text">{user.text}</p>
              </div>
              <div className="joke__likes">
                <button
                  id="btn-up"
                  className="btn-like btn-like--up"
                  onClick={() => setUpLikes((user.likes += 1))}
                ></button>
                <span id="likes-up" className="likes-count likes-count--up">
                  {upLikes}
                </span>
                <button
                  id="btn-down"
                  className="btn-like btn-like--down"
                  onClick={() => setDownLikes((user.dislikes += 1))}
                ></button>
                <span id="likes-down" className="likes-count likes-count--down">
                  {downLikes}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
