function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        ABTalks
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;