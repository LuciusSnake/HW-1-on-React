import React from 'react'

function Buttons({ increment, decrement }) {
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default React.memo(Buttons);
