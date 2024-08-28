import editButton from "../images/Edit_button_Vector.png";
import avatarButton from "../images/icono_edicion.png";
import addButton from "../images/Vector_+.png";
import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__img"
          alt="profile photo"
          src={currentUser.avatar}
        />
        <button className="profile__avatar-button">
          <img
            className="profile__icon-edit"
            src={avatarButton}
            alt="icono editar"
            onClick={props.onEditAvatarClick}
          />
        </button>
        <div className="profile__container">
          <div className="profile__name-button">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button">
              <img
                src={editButton}
                className="profile__vector-edit"
                alt="vector editar"
                onClick={props.onEditProfileClick}
              />
            </button>
          </div>
          <p className="profile__about">{currentUser.about}</p>
        </div>
        <button className="profile__add-button">
          <img
            src={addButton}
            className="profile__vector-add"
            alt="vector más"
            onClick={props.onAddPlaceClick}
          />
        </button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            name={card.name}
            likes={card.likes}
            link={card.link}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}
