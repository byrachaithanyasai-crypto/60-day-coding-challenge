import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const TOTAL_DAYS = 60;

const challenges = [
  "Introduce yourself confidently.",
  "Speak about your daily routine.",
  "Talk about your favourite hobby.",
  "Describe your best friend.",
  "Talk about your favourite movie.",
  "Speak about your favourite food.",
  "Describe your hometown.",
  "Talk about your dream job.",
  "Speak about your future goals.",
  "Talk about a memorable day.",
  "Describe your morning routine.",
  "Talk about something you learned recently.",
  "Speak about a person who inspires you.",
  "Describe your favourite place.",
  "Talk about your strengths.",
  "Talk about something you want to improve.",
  "Describe your ideal weekend.",
  "Talk about your favourite book.",
  "Speak about your biggest achievement.",
  "Talk about a difficult situation you handled.",
  "Describe your dream vacation.",
  "Talk about technology in daily life.",
  "Speak about your favourite sport.",
  "Talk about healthy habits.",
  "Describe your perfect day.",
  "Talk about your school or college.",
  "Speak about your career goals.",
  "Talk about something that makes you happy.",
  "Describe your personality.",
  "Talk about your 30-day progress.",
  "Speak about what you learned from this challenge.",
  "Talk about your communication skills.",
  "Describe your dream lifestyle.",
  "Talk about a mistake that taught you something.",
  "Speak about your biggest motivation.",
  "Talk about your favourite season.",
  "Describe a person you admire.",
  "Talk about social media.",
  "Speak about your favourite childhood memory.",
  "Describe your future self.",
  "Talk about money and saving.",
  "Speak about your favourite festival.",
  "Talk about education.",
  "Describe your ideal workplace.",
  "Talk about leadership.",
  "Speak about your favourite activity.",
  "Talk about how you handle stress.",
  "Describe your biggest dream.",
  "Talk about your biggest fear.",
  "Speak about how you overcome challenges.",
  "Talk about your personal values.",
  "Describe your perfect morning.",
  "Talk about your communication journey.",
  "Speak about confidence.",
  "Talk about your favourite person.",
  "Describe your ideal career.",
  "Talk about something you are proud of.",
  "Speak about your future plans.",
  "Talk about what success means to you.",
  "Describe your 60-day transformation.",
];

function Dashboard() {
  const navigate = useNavigate();

  const [completedDays, setCompletedDays] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("abtalks_completed_days");

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          setCompletedDays(parsed);
        }
      }
    } catch (error) {
      console.error("Could not load progress:", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "abtalks_completed_days",
      JSON.stringify(completedDays)
    );
  }, [completedDays]);

  const currentDay = useMemo(() => {
    for (let day = 1; day <= TOTAL_DAYS; day++) {
      if (!completedDays.includes(day)) {
        return day;
      }
    }

    return TOTAL_DAYS;
  }, [completedDays]);

  const completedCount = completedDays.length;

  const progress = Math.min(
    (completedCount / TOTAL_DAYS) * 100,
    100
  );

  const completeCurrentDay = () => {
    if (completedDays.includes(currentDay)) {
      return;
    }

    const newCompletedDays = [
      ...completedDays,
      currentDay,
    ].sort((a, b) => a - b);

    setCompletedDays(newCompletedDays);

    setPopup({
      type: "success",
      day: currentDay,
    });
  };

  const resetChallenge = () => {
    const confirmed = window.confirm(
      "Are you sure you want to reset your 60-day challenge?"
    );

    if (!confirmed) {
      return;
    }

    setCompletedDays([]);
    localStorage.removeItem("abtalks_completed_days");

    setPopup({
      type: "reset",
    });
  };

  const getDayStatus = (day) => {
    if (completedDays.includes(day)) {
      return "completed";
    }

    if (day === currentDay) {
      return "current";
    }

    return "upcoming";
  };

  return (
    <main className="dashboard-page">
      <div className="section-label">
        YOUR JOURNEY
      </div>

      <h1>Your 60-Day Challenge</h1>

      <p className="section-subtitle">
        Stay consistent, complete your daily challenges,
        and build your communication skills one day at a time.
      </p>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <div className="dashboard-day-label">
            CURRENT STREAK
          </div>

          <h2>🔥 {completedCount} Days</h2>

          <p>
            {completedCount === 0
              ? "Start your challenge today and build your streak!"
              : `You have completed ${completedCount} ${
                  completedCount === 1 ? "day" : "days"
                }. Keep going!`}
          </p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-day-label">
            TODAY'S TASK
          </div>

          {completedCount >= TOTAL_DAYS ? (
            <>
              <h2>🎉 Challenge Complete</h2>

              <p>
                Congratulations! You completed all
                60 days of the ABTalks challenge.
              </p>
            </>
          ) : (
            <>
              <h2>
                Day {currentDay}
                <br />
                Challenge
              </h2>

              <p>
                {challenges[currentDay - 1]}
              </p>

              <button
                className="primary-btn"
                onClick={completeCurrentDay}
              >
                Complete Day {currentDay} ✅
              </button>
            </>
          )}
        </div>

        <div className="dashboard-card">
          <div className="dashboard-day-label">
            60-DAY PROGRESS
          </div>

          <h2>{progress.toFixed(2)}%</h2>

          <p>
            {completedCount} out of {TOTAL_DAYS} days completed.
          </p>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-day-label">
            COMPLETION
          </div>

          <h2>
            {completedCount} / {TOTAL_DAYS}
          </h2>

          <p>Days completed successfully.</p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-day-label">
            ACHIEVEMENT
          </div>

          <h2>
            {completedCount >= 60
              ? "🏆 60 Day Champion"
              : completedCount >= 30
              ? "🏆 30 Day Streak"
              : completedCount >= 14
              ? "🏆 14 Day Streak"
              : completedCount >= 7
              ? "🏆 7 Day Streak"
              : completedCount >= 1
              ? "🔥 First Day"
              : "🎯 Start Your Journey"}
          </h2>

          <p>
            Complete challenges to unlock achievements.
          </p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-day-label">
            MISSED DAYS
          </div>

          <h2>0</h2>

          <p>No missed days. Excellent work!</p>
        </div>

      </div>

      <section className="journey">

        <div className="journey-heading">
          <div className="section-label">
            YOUR 60 DAYS
          </div>

          <h2>Keep Moving Forward</h2>

          <p className="section-subtitle">
            Complete each challenge one day at a time.
          </p>
        </div>

        <div className="journey-grid">
          {Array.from(
            { length: TOTAL_DAYS },
            (_, index) => index + 1
          ).map((day) => {
            const status = getDayStatus(day);

            return (
              <div
                key={day}
                className={`journey-day ${status}`}
                onClick={() => {
                  if (status !== "upcoming") {
                    navigate(`/day/${day}`);
                  }
                }}
              >
                <div className="journey-day-header">

                  <div className="journey-day-number">
                    {day}
                  </div>

                  <div className="journey-day-icon">
                    {status === "completed"
                      ? "✓"
                      : status === "current"
                      ? "●"
                      : "🔒"}
                  </div>

                </div>

                <div className="journey-day-content">

                  <h3>
                    Day {day}
                  </h3>

                  <p>
                    {status === "completed"
                      ? "Completed ✓"
                      : status === "current"
                      ? "Today's Challenge"
                      : "Locked"}
                  </p>

                </div>
              </div>
            );
          })}
        </div>

      </section>

      <div
        style={{
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <button
          className="secondary-btn"
          onClick={resetChallenge}
        >
          Reset Challenge
        </button>
      </div>

      {popup && (
        <div
          className="day-popup-overlay"
          onClick={() => setPopup(null)}
        >
          <div
            className="day-popup"
            onClick={(e) => e.stopPropagation()}
          >

            {popup.type === "success" && (
              <>
                <div className="popup-icon">
                  🎉
                </div>

                <div className="section-label">
                  CHALLENGE COMPLETED
                </div>

                <h2>
                  Day {popup.day} Complete!
                </h2>

                <p>
                  Great job! You completed Day{" "}
                  {popup.day}.
                </p>

                {popup.day < TOTAL_DAYS ? (
                  <p>
                    🚀 Day {popup.day + 1} is now unlocked!
                  </p>
                ) : (
                  <p>
                    🏆 You completed all 60 days!
                  </p>
                )}

                <button
                  className="primary-btn"
                  onClick={() => setPopup(null)}
                >
                  Continue
                </button>
              </>
            )}

            {popup.type === "reset" && (
              <>
                <div className="popup-icon">
                  🔄
                </div>

                <div className="section-label">
                  CHALLENGE RESET
                </div>

                <h2>Starting Fresh</h2>

                <p>
                  Your 60-day challenge has been
                  reset successfully.
                </p>

                <button
                  className="primary-btn"
                  onClick={() => setPopup(null)}
                >
                  Start Again
                </button>
              </>
            )}

          </div>
        </div>
      )}

    </main>
  );
}

export default Dashboard;