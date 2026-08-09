import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TOTAL_DAYS = 60;

function Day() {
  const navigate = useNavigate();
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "abtalks_completed_days"
    );

    if (saved) {
      try {
        setCompletedDays(JSON.parse(saved));
      } catch {
        setCompletedDays([]);
      }
    }
  }, []);

  const currentDay = (() => {
    for (let day = 1; day <= TOTAL_DAYS; day++) {
      if (!completedDays.includes(day)) {
        return day;
      }
    }

    return TOTAL_DAYS;
  })();

  return (
    <main className="dashboard-page">

      <div className="section-label">
        YOUR CHALLENGE
      </div>

      <h1>60-Day Challenge</h1>

      <p className="section-subtitle">
        Choose your challenge and keep your communication
        journey moving forward.
      </p>

      <div className="journey-grid">

        {Array.from(
          { length: TOTAL_DAYS },
          (_, index) => index + 1
        ).map((day) => {

          const completed =
            completedDays.includes(day);

          const current =
            day === currentDay;

          const locked =
            day > currentDay;

          return (
            <div
              key={day}
              className={`journey-day ${
                completed
                  ? "completed"
                  : current
                  ? "current"
                  : "upcoming"
              }`}
              onClick={() => {
                if (!locked) {
                  navigate(`/day/${day}`);
                }
              }}
              style={{
                cursor: locked
                  ? "default"
                  : "pointer",
              }}
            >

              <div className="journey-day-header">

                <div className="journey-day-number">
                  {day}
                </div>

                <div className="journey-day-icon">
                  {completed
                    ? "✓"
                    : current
                    ? "●"
                    : "🔒"}
                </div>

              </div>

              <div className="journey-day-content">

                <h3>
                  Day {day}
                </h3>

                <p>
                  {completed
                    ? "Completed ✓"
                    : current
                    ? "Today's Challenge"
                    : "Locked"}
                </p>

              </div>

            </div>
          );
        })}

      </div>

    </main>
  );
}

export default Day;