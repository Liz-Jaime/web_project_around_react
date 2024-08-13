import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Cambiar foto de perfil"
        name="avatar"
        buttonText="Guardar"
      >
        <input
          type="url"
          id="input-url-avatar"
          name="avatar"
          className="form__input form__input_content_image"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="form__error" id="input-url-avatar-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Editar Perfil"
        name="profile"
        buttonText="Guardar"
      >
        <input
          className="form__input form__input_content_name"
          type="text"
          name="name"
          id="input-name"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__error" id="input-name-error"></span>

        <input
          className="form__input form__input_content_about"
          type="text"
          name="about"
          id="input-about"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__error" id="input-about-error"></span>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Nuevo Lugar"
        name="place"
        buttonText="Crear"
      >
        <input
          type="text"
          className="form__input form__input_content_title"
          name="title"
          id="input-title"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__error" id="input-title-error"></span>
        <input
          type="url"
          id="input-url-card"
          name="image"
          className="form__input form__input_content_image"
          placeholder="Enlace a la imagen"
          required
        />
        <span className="form__error" id="input-url-card-error"></span>
      </PopupWithForm>
      <ImagePopup
        link={selectedCard.link}
        name={selectedCard.name}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
