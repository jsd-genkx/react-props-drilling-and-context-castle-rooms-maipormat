import React from 'react';
import SecretRoom from './09SecretRoom';

function Nook({ message1, handleReply }) {
  return (
    <div>
      <h2>Nook</h2>
      <SecretRoom message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Nook;
