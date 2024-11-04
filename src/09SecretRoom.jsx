import React, { useState } from 'react';

function SecretRoom({ onReply }) {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    onReply(message);
  };

  return (
    <div>
      <h1>SecretRoom</h1>
      <p>Message for JSD8: Do you love React?</p>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your reply here"
      />
      <button onClick={handleSubmit}>Send Reply</button>
    </div>
  );
}

export default SecretRoom;
