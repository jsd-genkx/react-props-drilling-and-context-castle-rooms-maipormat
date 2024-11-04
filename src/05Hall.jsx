import React from 'react';
import Corridor from './06Corridor';

function Hall({ onReply }) {
  return (
    <div>
      <h1>Hall</h1>
      <Corridor onReply={onReply} />
    </div>
  );
}

export default Hall;
