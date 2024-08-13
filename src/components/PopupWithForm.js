export default function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_open" : ""
      }`}
    >
      <div className="popup__overlay"></div>
      <div className="popup__content">
        <button
          className="popup__close-btn"
          id="close-profile-form"
          onClick={props.onClose}
        ></button>
        <div className="popup__body">
          <h2 className="popup__title"> {props.title} </h2>
          <form
            className={` form popup__form popup__${props.name}`}
            name={props.name}
          >
            {props.children}

            <button type="submit" className="form__button">
              {props.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
