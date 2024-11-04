import React from 'react';
import Gallery from './07Gallery';

function Corridor({ message1, handleReply }) {
  return (
    <div>
      <h2>Corridor</h2>
      <Gallery message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Corridor;
