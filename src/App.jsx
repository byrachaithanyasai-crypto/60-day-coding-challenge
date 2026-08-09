import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const goToAbout = () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  };

  const goToContact = () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  };

  const path = window.location.pathname;

  if (path === "/dashboard") {
    return (
      <>
        <Navbar />
        <Dashboard />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        <section className="hero">
          <h1>Ideas that inspire</h1>

          <p>
            Welcome to ABTalks — a place for ideas, conversations and
            inspiration.
          </p>

          <button onClick={goToAbout}>Explore More</button>
        </section>

        <section id="about" className="about">
          <h2>About ABTalks</h2>

          <p>
            We share ideas, stories and conversations that inspire people
            to think, learn and grow.
          </p>
        </section>

        <section id="contact" className="contact">
          <h2>Let's talk</h2>

          <p>Have an idea or want to connect with us?</p>

          <button onClick={goToContact}>Email us</button>
        </section>
      </main>
    </>
  );
}

export default App;