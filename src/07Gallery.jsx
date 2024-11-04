import React from 'react';
import Nook from './08Nook';

function Gallery({ message1, handleReply }) {
  return (
    <div>
      <h2>Gallery</h2>
      <Nook message1={message1} handleReply={handleReply} />
    </div>
  );
}

export default Gallery;
