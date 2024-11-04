import React from 'react';
import Hall from './05Hall';

function Room({ onReply }) {
  return (
    <div>
      <h1>Room</h1>
      <Hall onReply={onReply} />
    </div>
  );
}

export default Room;
