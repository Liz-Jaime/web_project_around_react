import React from "react";

export default function Card({ likes, name, link, onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img className="element__item" src={link} alt=" " onClick={handleClick} />
      <button className="element__trash-button"></button>
      <div className="element__photo-caption">
        <h2 className="element__caption"> {name} </h2>
        <span className="element__like-number">{likes.length}</span>
        <button className="element__like"></button>
      </div>
    </div>
  );
}
