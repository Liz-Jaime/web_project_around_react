import React, { createRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = createRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Cambiar foto de perfil"
      name="avatar"
      buttonText="Guardar"
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        id="input-url-avatar"
        name="avatar"
        className="form__input form__input_content_image"
        placeholder="Enlace a la imagen"
        ref={inputRef}
        required
      />
      <span className="form__error" id="input-url-avatar-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
