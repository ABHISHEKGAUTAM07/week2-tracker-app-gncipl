import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const HealthChart = ({ entries }) => {
  if (entries.length === 0) return null;

  const labels = entries.map((_, i) => `Entry ${i + 1}`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Calories',
        data: entries.map(e => e.calories),
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
      },
      {
        label: 'Sleep (hrs)',
        data: entries.map(e => e.sleep),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
      },
      {
        label: 'Workout (mins)',
        data: entries.map(e => e.workout),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Health Overview</h3>
      <Bar data={data} />
    </div>
  );
};

export default HealthChart;
