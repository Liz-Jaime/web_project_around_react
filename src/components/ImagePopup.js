export default function ImagePopup(props) {
  return (
    <section
      className={`popup  ${props.isOpen ? "popup_open" : ""}`}
      id="popup-image"
    >
      <div className="popup__overlay"></div>
      <div className="popup__container-image">
        <button
          type="button"
          className="popup__close-btn"
          id="close-image-popup"
          onClick={props.onClose}
        ></button>
        <div className="popup__body">
          <img className="popup__image" src={props.link} alt=" " />
          <h2 className="popup__image-title">{props.name} </h2>
        </div>
      </div>
    </section>
  );
}
