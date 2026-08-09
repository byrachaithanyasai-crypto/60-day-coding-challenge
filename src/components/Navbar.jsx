function Navbar() {
  const goHome = () => {
    window.location.href = "/#home";
  };

  const goAbout = () => {
    window.location.href = "/#about";
  };

  const goContact = () => {
    window.location.href = "/#contact";
  };

  const goDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <nav className="navbar">
      <a
        href="/#home"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          goHome();
        }}
      >
        ABTalks
      </a>

      <div className="nav-links">
        <a
          href="/#home"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
        >
          Home
        </a>

        <a
          href="/#about"
          onClick={(e) => {
            e.preventDefault();
            goAbout();
          }}
        >
          About
        </a>

        <a
          href="/dashboard"
          onClick={(e) => {
            e.preventDefault();
            goDashboard();
          }}
        >
          Dashboard
        </a>

        <a
          href="/#contact"
          onClick={(e) => {
            e.preventDefault();
            goContact();
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;