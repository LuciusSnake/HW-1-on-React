import React, { useEffect, useState, useRef } from "react";

function Counter() {
  const [ counter, setCounter ] = useState(0);
  const [ isChangeValue, setChangeValue ] = useState(false);
  const [ isRender, setRender ] = useState(false);

  const h1 = useRef(null);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  }

  const decrement = () => {
    setCounter((prevState) => prevState - 1);
  }

  useEffect(() => { setRender(true); }, [])

  useEffect(() => {
    if (counter !== 0) {
      setChangeValue(true);
    } else {
      setChangeValue(false);
    }
  }, [counter]);

  return (
    <div>
      <h1 ref={h1}>Counter: {counter}</h1>

      {isRender && <h2>Component was rendered</h2>}
      {isChangeValue && <h4>Counter was changed</h4>}

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Counter;
