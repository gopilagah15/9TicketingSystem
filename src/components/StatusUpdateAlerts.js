// src/components/StatusUpdateAlerts.js
import React from 'react';

const StatusUpdateAlerts = ({ alerts }) => (
  <div>
    <h2>Status Update Alerts</h2>
    <ul>
      {alerts.map((alert, index) => (
        <li key={index}>{alert}</li>
      ))}
    </ul>
  </div>
);

export default StatusUpdateAlerts;
