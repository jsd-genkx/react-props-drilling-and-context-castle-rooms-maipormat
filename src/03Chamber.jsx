import React from 'react';
import Room from './04Room';

function Chamber({ message1, handleReply }) {
  return (
    <div>
      <h2>Chamber</h2>
      <Room message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Chamber;
