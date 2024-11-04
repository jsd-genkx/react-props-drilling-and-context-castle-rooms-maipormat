import React from 'react';
import SecretRoom from './09SecretRoom';

function Nook({ onReply }) {
  return (
    <div>
      <h1>Nook</h1>
      <SecretRoom onReply={onReply} />
    </div>
  );
}

export default Nook;
