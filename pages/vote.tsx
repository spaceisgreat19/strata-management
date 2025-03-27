import { useState } from 'react';

export default function Vote() {
  const [votes, setVotes] = useState({ yes: 0, no: 0 });

  const handleVote = (option: 'yes' | 'no') => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  return (
    <div>
      <h1>Vote on Strata Issues</h1>
      <button onClick={() => handleVote('yes')}>Vote Yes</button>
      <button onClick={() => handleVote('no')}>Vote No</button>
      <p>Yes: {votes.yes}</p>
      <p>No: {votes.no}</p>
    </div>
  );
}