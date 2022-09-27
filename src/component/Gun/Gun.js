import React from 'react';
import './Gun.css'
const Gun = (props) => {
  const {countIncrease}=props
  const {action, category, img, price, name,} = props.gun
  return (
    <div className='guns-images'>
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className={"card-title"}>
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Price: ${price}</p>
    <p>If a dog chews guns whose guns does he choose?</p>
    <div className="card-actions m-4">
      <div className="badge badge-outline">{action}</div> 
      <div className="badge badge-outline">{category}</div>
      <div className=''>
      <button onClick={()=>countIncrease()} className="btn">Button</button>
      <button className="btn btn-primary m-4">Button</button>
      </div>
    </div>
  </div>
</div>    
    </div>
  );
};

export default Gun;