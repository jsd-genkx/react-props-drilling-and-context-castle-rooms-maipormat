import React, { useState } from 'react';
import Castle from './01Castle';

function App() {
  const [reply, setReply] = useState('');

  const handleReply = (message) => {
    setReply(message);
  };

  return (
    <div>
      <h3>Message for JSD8: Do you love React?</h3>
      <p>Reply from the Secret Room: {reply ? reply : 'Waiting for reply...'}</p>
      <Castle onReply={handleReply} />
    </div>
  );
}

export default App;
