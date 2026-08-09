import React, { useState } from "react";
import "./DAY12.css";

function Day12() {
  const [submitted, setSubmitted] = useState(false);

  const requirements = [
    "Complete the assigned Day 12 coding challenge",
    "Build a clean and responsive user interface",
    "Test the project on desktop and mobile",
    "Push the completed work to GitHub",
    "Share the completed challenge on LinkedIn",
  ];

  return (
    <div className="day12-page">
      <div className="day12-container">

        {/* HEADER */}
        <header className="day12-header">
          <span className="day12-badge">
            60-DAY CODING CHALLENGE
          </span>

          <h1>Day 12 Challenge</h1>

          <p>
            Build today. Learn today. Keep your 60-day coding streak alive.
          </p>
        </header>

        {/* PROGRESS */}
        <section className="day12-card">
          <div className="progress-top">
            <div>
              <span className="small-label">YOUR PROGRESS</span>
              <h2>Day 12 of 60</h2>
            </div>

            <span className="progress-number">20%</span>
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p>12 days completed • 48 days remaining</p>
        </section>

        {/* TODAY'S TASK */}
        <section className="day12-card">
          <span className="section-number">01</span>

          <h2>Today's Task 🎯</h2>

          <p>
            Complete today's coding challenge and create a working,
            responsive implementation that is ready for submission.
          </p>

          <div className="task-box">
            <h3>What to Build</h3>

            <p>
              Follow the assigned challenge requirements, complete the
              interface, test your work, and prepare the final project
              for GitHub submission.
            </p>
          </div>
        </section>

        {/* REQUIREMENTS */}
        <section className="day12-card">
          <span className="section-number">02</span>

          <h2>Requirements / Checklist ✅</h2>

          <div className="checklist">
            {requirements.map((item, index) => (
              <div className="check-item" key={index}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* GITHUB */}
        <section className="day12-card">
          <span className="section-number">03</span>

          <h2>GitHub Submission 💻</h2>

          <p>
            Push your completed Day 12 work to the GitHub repository.
          </p>

          <div className="link-box">
            <span>Repository</span>

            <strong>
              byrachaithanyasai-crypto/60-day-coding-challenge
            </strong>
          </div>

          <button
            className="day12-btn"
            onClick={() =>
              window.open(
                "https://github.com/byrachaithanyasai-crypto/60-day-coding-challenge",
                "_blank"
              )
            }
          >
            Open GitHub →
          </button>
        </section>

        {/* LINKEDIN */}
        <section className="day12-card">
          <span className="section-number">04</span>

          <h2>LinkedIn Submission 🔗</h2>

          <p>
            After completing the challenge, share your work,
            learning, and progress on LinkedIn.
          </p>

          <div className="task-box">
            <h3>Suggested Post</h3>

            <p>
              Day 12 of my 60-Day Coding Challenge 🚀
              <br />
              Built, tested and submitted today's challenge.
              <br />
              Continuing my journey one day at a time!
            </p>
          </div>
        </section>

        {/* SUBMISSION STATUS */}
        <section className="day12-card">
          <span className="section-number">05</span>

          <h2>Submission Status 📊</h2>

          <div
            className={
              submitted ? "day12-success" : "day12-error"
            }
          >
            {submitted
              ? "✓ Day 12 submitted successfully!"
              : "○ Day 12 is not submitted yet."}
          </div>

          <button
            className="day12-btn"
            onClick={() => setSubmitted(!submitted)}
          >
            {submitted ? "Mark as Pending" : "Mark as Submitted"}
          </button>
        </section>

        {/* FINAL MESSAGE */}
        <footer className="day12-footer">
          <h2>Keep Going 🔥</h2>

          <p>
            One day at a time. One project at a time.
            <br />
            Finish Day 12 strong!
          </p>
        </footer>

      </div>
    </div>
  );
}

export default Day12;