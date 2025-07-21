// main.jsx
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import GoalList from './Components/GoalList';
import GoalForm from './Components/GoalForm';
import DepositForm from './Components/DepositForm';
import Overview from './Components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/goals')
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

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);