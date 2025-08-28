import React, { useState } from 'react';
import './Form.css';

const HealthForm = ({ onAdd }) => {
  const [calories, setCalories] = useState('');
  const [sleep, setSleep] = useState('');
  const [workout, setWorkout] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ calories: +calories, sleep: +sleep, workout: +workout });
    setCalories('');
    setSleep('');
    setWorkout('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="number" placeholder="Calories" value={calories} onChange={(e) => setCalories(e.target.value)} required />
      <input type="number" placeholder="Sleep (hrs)" value={sleep} onChange={(e) => setSleep(e.target.value)} required />
      <input type="number" placeholder="Workout (mins)" value={workout} onChange={(e) => setWorkout(e.target.value)} required />
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default HealthForm;
