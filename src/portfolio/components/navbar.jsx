import '../styles/navbar.scss';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Z</div>
      <div className="navbar__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
