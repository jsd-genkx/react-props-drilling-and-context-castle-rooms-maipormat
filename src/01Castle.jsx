import React from 'react';
import Tower from './02Tower';

function Castle({ onReply }) {
  return (
    <div>
      <h1>Castle</h1>
      <Tower onReply={onReply} />
    </div>
  );
}

export default Castle;
