import React from 'react';
import './Table.css';

const HealthTable = ({ entries }) => {
  if (entries.length === 0) return <p>No entries yet.</p>;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Calories</th>
            <th>Sleep (hrs)</th>
            <th>Workout (mins)</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.calories}</td>
              <td>{entry.sleep}</td>
              <td>{entry.workout}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthTable;
