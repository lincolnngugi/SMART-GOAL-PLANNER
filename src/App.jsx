import React, { useEffect, useState } from 'react';
import GoalList from './Components/GoalList';
import GoalForm from './Components/GoalForm';
import DepositForm from './Components/DepositForm';
import Overview from './Components/Overview';
import React from 'react';
export default function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
fetch('http://localhost:3001/goals')
      .then(res => res.json())
      .then(setGoals)
      .catch(console.error);
  }, []);

  return (
    <div className="planner-container">
      <h1>Smart Goal Planner</h1>
      <GoalForm setGoals={setGoals} />
      <DepositForm goals={goals} setGoals={setGoals} />
      <Overview goals={goals} />
      <GoalList goals={goals} setGoals={setGoals} />
    </div>
  );
}