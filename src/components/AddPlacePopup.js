import PopupWithForm from "./PopupWithForm";
import { createRef } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const titleRef = createRef();
  const imageLinkRef = createRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name: titleRef.current.value,
      link: imageLinkRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
        ref={titleRef}
      />
      <span className="form__error" id="input-title-error"></span>
      <input
        type="url"
        id="input-url-card"
        name="image"
        className="form__input form__input_content_image"
        placeholder="Enlace a la imagen"
        required
        ref={imageLinkRef}
      />
      <span className="form__error" id="input-url-card-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
