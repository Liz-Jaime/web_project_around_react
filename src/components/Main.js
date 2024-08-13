import editButton from "../images/Edit_button_Vector.png";
import avatarButton from "../images/icono_edicion.png";
import addButton from "../images/Vector_+.png";
import { useState, useEffect } from "react";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const response = await api.getUserInfo();
      setUserName(response.name);
      setUserDescription(response.about);
      setUserAvatar(response.avatar);
    }
    getUserInfo();
  }, []);
  useEffect(() => {
    async function getCards() {
      const response = await api.getInitialCards();
      setCards(response);
    }
    getCards();
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <img
          className="profile__img"
          // src={profileAvatar}
          alt="profile photo"
          style={{ backgroundImage: `url(${userAvatar})` }}
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
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button">
              <img
                src={editButton}
                className="profile__vector-edit"
                alt="vector editar"
                onClick={props.onEditProfileClick}
              />
            </button>
          </div>
          <p className="profile__about">{userDescription}</p>
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
        {cards.map((card) => (
          <Card
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
            name={card.name}
            likes={card.likes}
            link={card.link}
          />
        ))}
      </section>
    </main>
  );
}
