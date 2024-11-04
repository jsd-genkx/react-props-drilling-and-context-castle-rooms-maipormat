import React from 'react';
import Nook from './08Nook';

function Gallery({ onReply }) {
  return (
    <div>
      <h1>Gallery</h1>
      <Nook onReply={onReply} />
    </div>
  );
}

export default Gallery;
