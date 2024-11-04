import React from 'react';
import Hall from './05Hall';

function Room({ message1, handleReply }) {
  return (
    <div>
      <h2>Room</h2>
      <Hall message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Room;
