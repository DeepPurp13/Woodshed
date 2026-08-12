import "./Navstyling.css"
import "./public/logo.png"


function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar__title navbar__item"><a href="/"><img src="logo.png" /></a></div> 
      <div className="navbar__item link"><a href="/about">About Us</a></div>
      <div className="navbar__item link"><a href="/contact">Contact</a></div>
      <div className="navbar__item link"><a href="/catalog">Catalog</a></div>
    </header>
  );
}

export default Navbar;