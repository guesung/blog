import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UseState from './component/UseState';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UseState />
    </>
  );
}

export default App;
