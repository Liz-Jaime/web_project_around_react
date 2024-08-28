import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({
  likes,
  name,
  link,
  onCardClick,
  card,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = useContext(CurrentUserContext);
  function handleClick() {
    onCardClick(card);
  }

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = ` ${
    isOwn ? "element__trash-button" : "element__trash-button_hidden"
  }`;

  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like-active"
  }`;

  function handleLike() {
    onCardLike(card);
  }

  function handleDelete() {
    onCardDelete(card);
  }

  return (
    <div className="element">
      <img className="element__item" src={link} alt=" " onClick={handleClick} />
      <button
        className={cardDeleteButtonClassName}
        onClick={handleDelete}
      ></button>
      <div className="element__photo-caption">
        <h2 className="element__caption"> {name} </h2>
        <span className="element__like-number">{likes.length}</span>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLike}
        ></button>
      </div>
    </div>
  );
}
