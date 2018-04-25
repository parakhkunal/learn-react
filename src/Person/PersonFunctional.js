import React from 'react';
import './PersonFunctional.css';

// const person = () => {
//   return <p>I am a Person and I am {Math.floor(Math.random() * 30)} year old!</p>
// }

const person = ( props ) => {
  return(
    <div className="PersonFunctional">
      <p onClick={props.click}>I am {props.name} and I am {props.age} year old!</p>
      <p>{props.children}</p>
      <input type = "text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
