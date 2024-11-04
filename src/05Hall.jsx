import React from 'react';
import Corridor from './06Corridor';

function Hall({ message1, handleReply }) {
  return (
    <div>
      <h2>Hall</h2>
      <Corridor message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Hall;
