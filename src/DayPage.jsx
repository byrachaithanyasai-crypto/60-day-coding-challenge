import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

function DayPage() {
  const { dayNumber } = useParams();
  const navigate = useNavigate();

  const day = Number(dayNumber);

  const [completedDays, setCompletedDays] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(
        "abtalks_completed_days"
      );

      const parsed = saved
        ? JSON.parse(saved)
        : [];

      setCompletedDays(parsed);
      setCompleted(parsed.includes(day));
    } catch {
      setCompletedDays([]);
      setCompleted(false);
    }
  }, [day]);

  if (
    !Number.isInteger(day) ||
    day < 1 ||
    day > TOTAL_DAYS
  ) {
    return (
      <main className="dashboard-page">

        <h1>Day Not Found</h1>

        <button
          className="primary-btn"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </main>
    );
  }

  const currentDay = (() => {
    for (let i = 1; i <= TOTAL_DAYS; i++) {
      if (!completedDays.includes(i)) {
        return i;
      }
    }

    return TOTAL_DAYS;
  })();

  const locked =
    day > currentDay && !completed;

  const completeDay = () => {
    if (locked || completed) {
      return;
    }

    const updated = [
      ...completedDays,
      day,
    ]
      .filter(
        (value, index, array) =>
          array.indexOf(value) === index
      )
      .sort((a, b) => a - b);

    localStorage.setItem(
      "abtalks_completed_days",
      JSON.stringify(updated)
    );

    setCompletedDays(updated);
    setCompleted(true);
  };

  return (
    <main className="dashboard-page">

      <div className="section-label">
        DAILY CHALLENGE
      </div>

      <h1>Day {day}</h1>

      <p className="section-subtitle">
        Complete today's communication challenge
        and keep building your confidence.
      </p>

      <div
        className="dashboard-card"
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          textAlign: "center",
        }}
      >

        <div className="popup-icon">
          {completed
            ? "✅"
            : locked
            ? "🔒"
            : "🎯"}
        </div>

        <div className="dashboard-day-label">
          DAY {day} CHALLENGE
        </div>

        <h2>
          {challenges[day - 1]}
        </h2>

        {locked ? (
          <>
            <p>
              Complete the previous days first to
              unlock this challenge.
            </p>

            <button
              className="secondary-btn"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </button>
          </>
        ) : completed ? (
          <>
            <p>
              🎉 You have already completed Day {day}.
            </p>

            {day < TOTAL_DAYS ? (
              <button
                className="primary-btn"
                onClick={() =>
                  navigate(`/day/${day + 1}`)
                }
              >
                Go to Day {day + 1} →
              </button>
            ) : (
              <p>
                🏆 Congratulations! You completed all
                60 days!
              </p>
            )}
          </>
        ) : (
          <>
            <p>
              Take a few minutes and speak about the
              topic confidently.
            </p>

            <button
              className="primary-btn"
              onClick={completeDay}
            >
              Complete Day {day} ✅
            </button>
          </>
        )}

        <br />

        <button
          className="secondary-btn"
          onClick={() => navigate("/dashboard")}
          style={{
            marginTop: "15px",
          }}
        >
          ← Dashboard
        </button>

      </div>

    </main>
  );
}

export default DayPage;