import React from 'react';
import Tower from './02Tower';

function Castle({ message1, handleReply }) {
  return (
    <div>
      <h2>Castle</h2>
      <Tower message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Castle;
