import PopupWithForm from "./PopupWithForm";
import { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}
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
        value={name || ""}
        minLength="2"
        maxLength="40"
        required
        onChange={handleChangeName}
      />
      <span className="form__error" id="input-name-error"></span>

      <input
        className="form__input form__input_content_about"
        type="text"
        name="about"
        id="input-about"
        placeholder="Acerca de mí"
        value={description || ""}
        minLength="2"
        maxLength="200"
        required
        onChange={handleChangeDescription}
      />
      <span className="form__error" id="input-about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
