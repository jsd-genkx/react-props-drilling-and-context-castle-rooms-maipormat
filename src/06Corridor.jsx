import React from 'react';
import Gallery from './07Gallery';

function Corridor({ onReply }) {
  return (
    <div>
      <h1>Corridor</h1>
      <Gallery onReply={onReply} />
    </div>
  );
}

export default Corridor;
