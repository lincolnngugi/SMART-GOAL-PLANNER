
import React from 'react';

export default function GoalCard({ goal, onDelete }) {
  const progress = (goal.savedAmount / goal.targetAmount) * 100;
  const deadlineDays = Math.ceil(
    (new Date(goal.deadline) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>Category: {goal.category}</p>
      <p>Target: ${goal.targetAmount}</p>
      <p>Saved: ${goal.savedAmount}</p>
      <progress value={goal.savedAmount} max={goal.targetAmount} />
      <p>{goal.targetAmount - goal.savedAmount} left to save</p>

      {goal.savedAmount >= goal.targetAmount
        ? <span className="status-complete"> Goal completed</span>
        : deadlineDays < 0
          ? <span className="status-overdue"> Deadline passed</span>
          : deadlineDays <= 30
            ? <span className="status-warning"> {deadlineDays} days left</span>
            : <span>{deadlineDays} days remaining</span>
      }

      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  );
}