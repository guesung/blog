import { useState } from 'react';

export default function UseState() {
  const [counter, setCounter] = useState(0);
  console.log(1);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };
  return (
    <div>
      <button onClick={handleClick}></button>
    </div>
  );
}
