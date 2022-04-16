import React from 'react'

function CountShower({ counter }) {
  // return <h1 ref={h1}>Counter: {counter}</h1>;
  return <h1>Counter: {counter}</h1>;
}

// counter === counter
export default React.memo(CountShower);
// export default CountShower;
