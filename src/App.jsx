import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import Day12 from "./pages/Day12";

const TOTAL_DAYS = 60;
const INITIAL_CURRENT_DAY = 22;
const STORAGE_KEY = "abtalks_completed_days";

/* =========================
   PROGRESS HELPERS
========================= */

function defaultCompletedDays() {
  return Array.from(
    { length: INITIAL_CURRENT_DAY - 1 },
    (_, index) => index + 1
  );
}

function getCompletedDays() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return defaultCompletedDays();
    }

    const parsed = JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return defaultCompletedDays();
    }

    return [...new Set(
      parsed
        .map(Number)
        .filter(
          (day) =>
            Number.isInteger(day) &&
            day >= 1 &&
            day <= TOTAL_DAYS
        )
    )].sort((a, b) => a - b);
  } catch {
    return defaultCompletedDays();
  }
}

function saveCompletedDays(days) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        [...new Set(days)]
          .filter(
            (day) =>
              Number.isInteger(day) &&
              day >= 1 &&
              day <= TOTAL_DAYS
          )
          .sort((a, b) => a - b)
      )
    );
  } catch {
    // Ignore storage errors.
  }
}

function getCurrentDay(completedDays) {
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    if (!completedDays.includes(day)) {
      return day;
    }
  }

  return TOTAL_DAYS;
}

function getDayStatus(day, completedDays) {
  const currentDay = getCurrentDay(completedDays);

  if (completedDays.includes(day)) {
    return "completed";
  }

  if (day === currentDay) {
    return "current";
  }

  return "upcoming";
}

/* =========================
   NAVBAR
========================= */

function Navbar() {
  const completedDays = getCompletedDays();
  const currentDay = getCurrentDay(completedDays);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        60 DAYS
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <Link to={`/day/${currentDay}`}>
          Day {currentDay}
        </Link>

        <Link to="/day12">
          Day 12
        </Link>
      </div>

      <Link to="/dashboard" className="join-btn">
        Join the challenge →
      </Link>
    </nav>
  );
}

/* =========================
   HOME
========================= */

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app-page">
      <Navbar />

      <section className="hero">
        <div className="badge">
          60-DAY CODING CHALLENGE
        </div>

        <p className="small-title">
          Build every day.
        </p>

        <h1>
          Become impossible to ignore.
        </h1>

        <p className="hero-text">
          A 60-day coding journey for Indian college
          students to build, learn, and prove their
          skills in public.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            Start the challenge →
          </button>

          <a
            href="#how"
            className="secondary-btn"
          >
            Explore how it works
          </a>
        </div>

        <div className="dots">
          <span className="active" />
          <span />
          <span />
          <span />
          <span />
        </div>

        <p className="hero-bottom">
          60 days • 1 goal • Build in public
        </p>
      </section>

      <section className="how about" id="how">
        <p className="section-label">
          ABOUT ABTALKS
        </p>

        <h2>
          Build skills. Build proof. Build your future.
        </h2>

        <p className="section-subtitle">
          ABTalks is a 60-day coding challenge designed
          to help college students build consistently,
          share their progress publicly, and create real
          proof of their skills.
        </p>

        <div className="steps">
          <div className="step-card">
            <span>01</span>
            <h3>Learn by building</h3>
            <p>
              Stop waiting to become perfect.
              Learn through real projects and improve
              one day at a time.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Build in public</h3>
            <p>
              Share your journey, progress, mistakes,
              and wins so your work becomes visible
              to the world.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Create proof</h3>
            <p>
              By the end of 60 days, you have projects
              and consistent work that demonstrate
              what you can actually do.
            </p>
          </div>
        </div>
      </section>

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

      <footer>
        <div>
          <h3>60-DAY CODING CHALLENGE</h3>
          <p>
            Build every day. Become impossible to ignore.
          </p>
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")}
        >
          Start building →
        </button>
      </footer>
    </div>
  );
}

/* =========================
   DASHBOARD
========================= */

function Dashboard() {
  const [completedDays, setCompletedDays] =
    useState(getCompletedDays);

  const currentDay = getCurrentDay(completedDays);
  const completedCount = completedDays.length;
  const remainingDays =
    TOTAL_DAYS - completedCount;

  return (
    <div className="app-page">
      <Navbar />

      <main className="dashboard-page">
        <p className="section-label">
          YOUR PROGRESS
        </p>

        <h1>
          Challenge Dashboard
        </h1>

        <p className="section-subtitle">
          Track your 60-day coding journey and keep
          building every day.
        </p>

        <div className="dashboard-grid">
          <div className="stat-card">
            <strong>{currentDay}</strong>
            <span>Current Day</span>
          </div>

          <div className="stat-card">
            <strong>{completedCount}</strong>
            <span>Days Completed</span>
          </div>

          <div className="stat-card">
            <strong>{remainingDays}</strong>
            <span>Days Remaining</span>
          </div>
        </div>

        <div className="dashboard-card">
          <span>
            DAY {currentDay}
          </span>

          <h2>
            Keep the momentum going.
          </h2>

          <p>
            You have completed {completedCount} days.
            Continue building, learning, and sharing
            your progress.
          </p>

          <Link
            to={`/day/${currentDay}`}
            className="primary-btn"
          >
            View Day {currentDay} →
          </Link>
        </div>

        <Journey completedDays={completedDays} />
      </main>
    </div>
  );
}

/* =========================
   JOURNEY
========================= */

function Journey({ completedDays }) {
  const currentDay = getCurrentDay(completedDays);

  return (
    <section className="journey">
      <p className="section-label">
        YOUR 60-DAY JOURNEY
      </p>

      <h2>
        All Challenge Days
      </h2>

      <p className="section-subtitle">
        Choose a day and continue your coding journey.
      </p>

      <div className="journey-grid">
        {Array.from(
          { length: TOTAL_DAYS },
          (_, index) => {
            const day = index + 1;
            const status =
              getDayStatus(day, completedDays);

            return (
              <Link
                key={day}
                to={`/day/${day}`}
                className={`journey-day ${status}`}
                aria-current={
                  day === currentDay
                    ? "step"
                    : undefined
                }
              >
                <span className="day-number">
                  {String(day).padStart(2, "0")}
                </span>

                <span className="day-name">
                  Day {day}
                </span>

                <span className="day-status">
                  {status === "completed" &&
                    "✓ Completed"}

                  {status === "current" &&
                    "Current"}

                  {status === "upcoming" &&
                    "Upcoming"}
                </span>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
}

/* =========================
   DAY PAGE
========================= */

function DayPage() {
  const { day } = useParams();
  const navigate = useNavigate();

  const dayNumber = Number(day);

  const [completedDays, setCompletedDays] =
    useState(getCompletedDays);

  if (
    !Number.isInteger(dayNumber) ||
    dayNumber < 1 ||
    dayNumber > TOTAL_DAYS
  ) {
    return (
      <div className="app-page">
        <Navbar />

        <main className="day-page">
          <div className="day-card">
            <h1>
              Invalid Day
            </h1>

            <p>
              Please choose a day between 1 and 60.
            </p>

            <Link
              to="/dashboard"
              className="primary-btn"
            >
              ← Back to Dashboard
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const currentDay =
    getCurrentDay(completedDays);

  const isCompleted =
    completedDays.includes(dayNumber);

  const isCurrent =
    dayNumber === currentDay;

  const isUpcoming =
    dayNumber > currentDay;

  const previousDay =
    dayNumber > 1
      ? dayNumber - 1
      : null;

  const nextDay =
    dayNumber < TOTAL_DAYS
      ? dayNumber + 1
      : null;

  function completeCurrentDay() {
    if (!isCurrent || isCompleted) {
      return;
    }

    const updatedDays = [
      ...completedDays,
      dayNumber,
    ].sort((a, b) => a - b);

    setCompletedDays(updatedDays);
    saveCompletedDays(updatedDays);
  }

  function continueToNextDay() {
    if (nextDay) {
      navigate(`/day/${nextDay}`);
    }
  }

  function goPreviousDay() {
    if (previousDay) {
      navigate(`/day/${previousDay}`);
    }
  }

  let title = "Today's Challenge";

  let description =
    "Work on your project, document what you learned, and share your progress publicly.";

  let goal =
    "Make meaningful progress on your project.";

  let deliverable =
    "Complete one feature and push it to GitHub.";

  if (isUpcoming) {
    title = `Day ${dayNumber} — Coming Up`;

    description =
      "Keep building your skills and get ready for the next challenge.";

    goal =
      "Prepare yourself for the next stage of the journey.";

    deliverable =
      "Continue your current project and be ready for the next challenge.";
  }

  if (isCompleted) {
    title = `Day ${dayNumber} Completed`;

    description =
      "You completed this challenge. Keep the momentum going.";

    goal =
      "Review what you learned and build on your progress.";

    deliverable =
      "Reflect on your work and continue to the next day.";
  }

  return (
    <div className="app-page">
      <Navbar />

      <main className="day-page">
        <p className="section-label">
          DAY {dayNumber}
        </p>

        <h1>
          Build. Learn. Share.
        </h1>

        <p className="section-subtitle">
          {description}
        </p>

        <div className="day-card">
          <span className="day-progress">
            {dayNumber} / {TOTAL_DAYS}
          </span>

          <h2>
            {title}
          </h2>

          <p className="day-description">
            {description}
          </p>

          <div className="day-detail">
            <h3>Goal</h3>
            <p>{goal}</p>
          </div>

          <div className="day-detail">
            <h3>Deliverable</h3>
            <p>{deliverable}</p>
          </div>

          {isCurrent && !isCompleted && (
            <div className="current-day-area">
              <div className="current-badge">
                🎯 Day {dayNumber} — Current Challenge
              </div>

              <button
                type="button"
                className="primary-btn complete-btn"
                onClick={completeCurrentDay}
              >
                Complete Day {dayNumber} ✓
              </button>
            </div>
          )}

          {isCompleted && (
            <div className="completed-area">
              <div className="completed-badge">
                🎉 Day {dayNumber} Completed!
              </div>

              {nextDay && (
                <button
                  type="button"
                  className="primary-btn"
                  onClick={continueToNextDay}
                >
                  Continue to Day {nextDay} →
                </button>
              )}
            </div>
          )}

          {isUpcoming && (
            <div className="upcoming-area">
              <div className="upcoming-badge">
                🔒 Day {dayNumber} — Upcoming
              </div>

              <p>
                Complete Day {currentDay} first.
              </p>
            </div>
          )}

          <div className="day-actions">
            <Link
              to="/dashboard"
              className="secondary-btn"
            >
              ← Dashboard
            </Link>

            {previousDay && (
              <button
                type="button"
                className="secondary-btn"
                onClick={goPreviousDay}
              >
                ← Previous Day
              </button>
            )}

            {nextDay && (
              <button
                type="button"
                className="secondary-btn"
                onClick={continueToNextDay}
              >
                Next Day →
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

/* =========================
   APP
========================= */

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/day/:day"
          element={<DayPage />}
        />

        <Route
          path="/day12"
          element={<Day12 />}
        />

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;