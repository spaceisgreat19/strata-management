import { useState } from 'react';

export default function Maintenance() {
  const [requests, setRequests] = useState([
    { id: 1, issue: 'Leaking pipe in Unit 203' },
    { id: 2, issue: 'Broken elevator' },
  ]);

  return (
    <div>
      <h1>Maintenance Requests</h1>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>{request.issue}</li>
        ))}
      </ul>
    </div>
  );
}