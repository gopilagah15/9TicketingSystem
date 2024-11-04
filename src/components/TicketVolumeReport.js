// src/components/TicketVolumeReport.js
import React from 'react';

const TicketVolumeReport = ({ tickets, resolvedTickets }) => {
  const resolvedCount = resolvedTickets.length;
  const totalCount = tickets.length;

  return (
    <div>
      <h2>Ticket Volume Report</h2>
      <p>Total Tickets: {totalCount}</p>
      <p>Resolved Tickets: {resolvedCount}</p>
    </div>
  );
};

export default TicketVolumeReport;
