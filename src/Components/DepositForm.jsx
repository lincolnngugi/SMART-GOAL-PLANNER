import React, { useState } from 'react';

function DepositForm({ goals, setGoals }) {
  const [deposit, setDeposit] = useState({ goalId: '', amount: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const goal = goals.find(g => g.id === deposit.goalId);
    if (!goal) return;

    const updatedGoal = {
      ...goal,
      savedAmount: goal.savedAmount + Number(deposit.amount)
    };

    fetch(`http://localhost:3000/goals/${goal.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ savedAmount: updatedGoal.savedAmount })
    }).then(res => res.json())
      .then(goal => {
        setGoals(prev =>
          prev.map(g => (g.id === goal.id ? goal : g))
        );
      });

    setDeposit({ goalId: '', amount: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select name="goalId" value={deposit.goalId} onChange={e => setDeposit(prev => ({ ...prev, goalId: e.target.value }))}>
        <option value="">Select goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input name="amount" value={deposit.amount} onChange={e => setDeposit(prev => ({ ...prev, amount: e.target.value }))} placeholder="Amount" required />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;