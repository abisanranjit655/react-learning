import React from 'react';

function Bio() {
const element = React.createElement(
  "button",
  {
    
    onClick: () =>alert(`${fN} ${lN}`),
  },
  "Click Me"
);
const fN = 'Rohit';
const lN = 'Sharma';
const Welcome =(props) =>{
  return <div>{props.children}</div>;
};

 return (
    <Welcome>
   <div>{element}</div>
   
    </Welcome>
 );
}

export default Bio;