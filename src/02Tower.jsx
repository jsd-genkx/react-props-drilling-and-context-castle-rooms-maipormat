import React from 'react';
import Chamber from './03Chamber';

function Tower({ message1, handleReply }) {
  return (
    <div>
      <h2>Tower</h2>
      <Chamber message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Tower;
