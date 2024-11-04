// src/components/ResolutionTracker.js
import React from 'react';

const ResolutionTracker = ({ tickets, onUpdateStatus }) => {
  return (
    <div>
      <h2>Resolution Tracker</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <strong>{ticket.description}</strong> - Severity: {ticket.severity} - Status: {ticket.status}
            <button onClick={() => onUpdateStatus(ticket.id, 'In Progress')}>In Progress</button>
            <button onClick={() => onUpdateStatus(ticket.id, 'Resolved')}>Resolved</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResolutionTracker;
