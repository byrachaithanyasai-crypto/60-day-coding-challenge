import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const goToAbout = () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <h1>Ideas that inspire</h1>

          <p>
            Welcome to ABTalks — a place for ideas, conversations and
            inspiration.
          </p>

          <button onClick={goToAbout}>
            Explore More
          </button>
        </section>

        {/* ABOUT */}
        <section id="about" className="about">
          <h2>About ABTalks</h2>

          <p>
            We share ideas, stories and conversations that inspire people
            to think, learn and grow.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <span className="contact-label">GET IN TOUCH</span>

            <h2>Let's talk.</h2>

            <p>
              Have an idea, question, or just want to start a conversation?
              We'd love to hear from you.
            </p>

            <a
              className="contact-button"
              href="mailto:hello@abtalks.com"
            >
              Email us →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;