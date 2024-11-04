// src/components/IssueReportingForm.js
import React, { useState } from 'react';

const IssueReportingForm = ({ onReport }) => {
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('');
  const [reporter, setReporter] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newIssue = {
      id: Date.now(),
      description,
      severity,
      reporter,
      status: 'Open',
    };
    onReport(newIssue);
    setDescription('');
    setSeverity('');
    setReporter('');
  };

  return (
    <div>
      <h2>Issue Reporting</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="text" placeholder="Severity" value={severity} onChange={(e) => setSeverity(e.target.value)} required />
        <input type="text" placeholder="Reporter" value={reporter} onChange={(e) => setReporter(e.target.value)} required />
        <button type="submit">Report Issue</button>
      </form>
    </div>
  );
};

export default IssueReportingForm;
