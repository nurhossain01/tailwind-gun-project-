
import { useState } from 'react';
import './App.css';
import Guns from './component/AllGun/Guns';

import Navber from './component/Navber/Navber';


function App() {
  const [count, setCount] = useState(0);

const countIncrease = () => {
  setCount(count + 1)
  
}

  return (
    <div className="App">
    <Navber count = {count} />
    <Guns countIncrease = {countIncrease} />
    </div>
  );
}

export default App;
