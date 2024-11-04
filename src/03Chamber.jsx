import React from 'react';
import Room from './04Room';

function Chamber({ onReply }) {
  return (
    <div>
      <h1>Chamber</h1>
      <Room onReply={onReply} />
    </div>
  );
}

export default Chamber;
