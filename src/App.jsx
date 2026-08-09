import "./App.css";

function App() {
  const scrollToChallenge = () => {
    document.getElementById("challenge")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">60 DAYS</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#challenge">Challenge</a>
          <a href="#how">How it works</a>
        </div>

        <button className="join-btn" onClick={scrollToChallenge}>
          Join the challenge →
        </button>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">
        <div className="badge">60-DAY CODING CHALLENGE</div>

        <p className="small-title">Build every day.</p>

        <h1>Become impossible to ignore.</h1>

        <p className="hero-text">
          A 60-day coding journey for Indian college students to build,
          learn, and prove their skills in public.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={scrollToChallenge}>
            Start the challenge →
          </button>

          <a href="#how" className="secondary-btn">
            Explore how it works
          </a>
        </div>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p className="hero-bottom">
          60 days • 1 goal • Build in public
        </p>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about" id="challenge">
        <p className="section-label">ABOUT ABTALKS</p>

        <h2>Build skills. Build proof. Build your future.</h2>

        <p className="section-subtitle">
          ABTalks is a 60-day coding challenge designed to help college
          students build consistently, share their progress publicly, and
          create real proof of their skills.
        </p>

        <div className="steps">
          <div className="step-card">
            <span>01</span>

            <h3>Learn by building</h3>

            <p>
              Stop waiting to become perfect. Learn through real projects and
              improve one day at a time.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>

            <h3>Build in public</h3>

            <p>
              Share your journey, progress, mistakes, and wins so your work
              becomes visible to the world.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>

            <h3>Create proof</h3>

            <p>
              By the end of 60 days, you have projects and consistent work
              that demonstrate what you can actually do.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="stat-card">
          <strong>60</strong>
          <span>Days of coding</span>
        </div>

        <div className="stat-card">
          <strong>1</strong>
          <span>Project every day</span>
        </div>

        <div className="stat-card">
          <strong>∞</strong>
          <span>Possibilities</span>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how" id="how">
        <p className="section-label">HOW IT WORKS</p>

        <h2>Show up. Build. Repeat.</h2>

        <p className="section-subtitle">
          No complicated rules. Just consistent work, shared publicly, for
          60 days.
        </p>

        <div className="how-grid">
          <div className="how-card">
            <span>01</span>

            <h3>Pick a goal</h3>

            <p>
              Choose one skill or project you want to improve during the
              challenge.
            </p>
          </div>

          <div className="how-card">
            <span>02</span>

            <h3>Build every day</h3>

            <p>
              Spend time coding every day and keep moving your project
              forward.
            </p>
          </div>

          <div className="how-card">
            <span>03</span>

            <h3>Share your progress</h3>

            <p>
              Post what you built, what you learned, and what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div>
          <h3>60-DAY CODING CHALLENGE</h3>

          <p>Build every day. Become impossible to ignore.</p>
        </div>

        <button className="primary-btn" onClick={scrollToChallenge}>
          Start building →
        </button>
      </footer>
    </div>
  );
}

export default App;