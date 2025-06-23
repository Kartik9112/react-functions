import React, { useState, useRef, useEffect } from 'react';

const ShowPreviousCount = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h2>Current Value: {count}</h2>
      <h2>Previous Count Value: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Value</button>
    </div>
  );
};

export default ShowPreviousCount;
