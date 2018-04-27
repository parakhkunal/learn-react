import React from 'react';

const useroutput = ( props ) => {
  return(
    <div className="UserOutput">
      <p>My username is {props.username} and I am {props.text}</p>
    </div>
  )
};

export default useroutput;
