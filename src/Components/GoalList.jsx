import React from 'react';
import GoalCard from './GoalCard';

export default function GoalList({ goals, setGoals }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: 'DELETE'
    }).then(() => {
      setGoals(prev => prev.filter(goal => goal.id !== id));
    });
  };

  return (
    <div className="goal-list">
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} onDelete={handleDelete} />
      ))}
    </div>
  );
}