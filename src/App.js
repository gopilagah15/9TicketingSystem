// src/App.js
import React, { useState } from 'react';
import IssueReportingForm from './components/IssueReportingForm';
import StatusUpdateAlerts from './components/StatusUpdateAlerts';
import ResolutionTracker from './components/ResolutionTracker';
import TicketVolumeReport from './components/TicketVolumeReport';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleReportIssue = (issue) => {
    setTickets([...tickets, issue]);
  };

  const handleStatusUpdate = (ticketId, status) => {
    const updatedTickets = tickets.map((ticket) =>
      ticket.id === ticketId ? { ...ticket, status } : ticket
    );
    setTickets(updatedTickets);

    if (status === 'Resolved') {
      setResolvedTickets([...resolvedTickets, updatedTickets.find(ticket => ticket.id === ticketId)]);
    }

    setAlerts([...alerts, `Ticket #${ticketId} status updated to ${status}`]);
  };

  return (
    <div>
      <h1>Ticketing System</h1>
      <IssueReportingForm onReport={handleReportIssue} />
      <StatusUpdateAlerts alerts={alerts} />
      <ResolutionTracker tickets={tickets} onUpdateStatus={handleStatusUpdate} />
      <TicketVolumeReport tickets={tickets} resolvedTickets={resolvedTickets} />
    </div>
  );
};

export default App;
