import React from 'react';
import Chamber from './03Chamber';

function Tower({ onReply }) {
  return (
    <div>
      <h1>Tower</h1>
      <Chamber onReply={onReply} />
    </div>
  );
}

export default Tower;
