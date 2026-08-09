import Navbar from "./components/Navbar";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const goToAbout = () => {
    document.getElementById("about").scrollIntoView({
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
        {/* Home Section */}
        <section id="home" className="hero">
          <h1>Ideas that inspire</h1>

          <p>
            Welcome to ABTalks — a place for ideas, conversations and
            inspiration.
          </p>

          <button onClick={goToAbout}>Explore More</button>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <h2>About ABTalks</h2>

          <p>
            We share ideas, stories and conversations that inspire people
            to think, learn and grow.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact-content">
            <span className="contact-label">CONTACT</span>

            <h2>Let's talk</h2>

            <p>
              Have an idea, question, or just want to start a conversation?
              We'd love to hear from you.
            </p>

            <a
              className="contact-button"
              href="mailto:abtalks@gmail.com"
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