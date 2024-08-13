import logo from "../images/Around_Vector_Header.svg";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" id="logo-image" src={logo} alt="logo" />
    </header>
  );
}
