import React, { useEffect, useState, useRef, useCallback } from "react";
import Buttons from "./_elements/Buttons";
import CountShower from "./_elements/Counter";

function Counter() {
  const [ counter, setCounter ] = useState(0);
  const [ isChangeValue, setChangeValue ] = useState(false);
  const [ isRender, setRender ] = useState(false);

  // const h1 = useRef(null);

  const increment = useCallback(() => {
    setCounter((prevState) => prevState + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter((prevState) => prevState - 1);
  }, []);

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
      <CountShower counter={counter} />

      {isRender && <h2>Component was rendered</h2>}
      {isChangeValue && <h4>Counter was changed</h4>}

      <Buttons increment={increment} decrement={decrement} />
    </div>
  );
}

export default Counter;
