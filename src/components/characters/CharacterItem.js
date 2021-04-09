import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <span className="strong">Actor Name: </span>
              {item.portrayed}
            </li>
            <li>
              <span className="strong">Nickname: </span>
              {item.nickname}
            </li>
            <li>
              <span className="strong">Birthday: </span>
              {item.birthday}
            </li>
            <li>
              <span className="strong">Status: </span>
              {item.status}
            </li>
          </ul>
        </div>
      </div>

      <div className="card-inner"></div>
    </div>
  );
};

export default CharacterItem;
