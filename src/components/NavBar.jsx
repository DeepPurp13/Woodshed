import "./Navstyling.css"


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__title navbar__item">Moon Valley</div>
      <div className="navbar__item link">About Us</div>
      <div className="navbar__item link">Contact</div>
      <div className="navbar__item link">Catalog</div>
    </header>
  );
}

export default Navbar;