import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="dashboard">
      <h1>Your 60-Day Challenge</h1>

      <div className="dashboard-grid">

        <div className="card">
          <h2>🔥 Current Streak</h2>
          <p>12 Days</p>
        </div>

        <div className="card">
          <h2>📅 Today's Task</h2>
          <p>Complete Day 12 Challenge</p>

          <button
            className="complete-btn"
            onClick={() => setCompleted(true)}
          >
            {completed ? "Task Completed ✅" : "Complete Task"}
          </button>
        </div>

        <div className="card">
          <h2>📈 60-Day Progress</h2>
          <p>20%</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>

        <div className="card">
          <h2>🏆 Completion</h2>
          <p>12 / 60 Days</p>
        </div>

        <div className="card">
          <h2>🏆 Achievements</h2>
          <p>🔥 12 Day Streak</p>
        </div>

        <div className="card">
          <h2>⚠️ Missed Day</h2>
          <p>No missed days</p>
        </div>

        <div className="card">
          <h2>🔄 Recovery Mode</h2>
          <p>Not active</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;