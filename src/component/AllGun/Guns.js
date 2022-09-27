import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import Gun from '../Gun/Gun';
import './Guns.css'

const Guns = ({countIncrease}) => {
  const [guns, setGuns] = useState([])

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  }, [])

  return (
    <div>
      <div className='gun-details'> 
        <h1>Welcome To <span>Fake</span> Guns Store</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus doloremque molestias earum maxime debitis cum iusto eaque dolorem, sunt repudiandae nam distinctio natus voluptatibus eligendi? Quo neque placeat id vero.</p>
      </div>
      <div className='cart-generate grid grid-cols-1 md:grid-cols-3 gap-10 mx-10'>
        {
          guns.map(gun => <Gun gun={gun} countIncrease={countIncrease} />)
        }
      </div>
    </div>
  );
};

export default Guns;