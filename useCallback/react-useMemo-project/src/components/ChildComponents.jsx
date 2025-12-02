import React from 'react'

const ChildComponents = React.memo (
    (props) => {
        console.log("Child components go re-rendered again");
      return (
        <div>
            <button onClick={props.handleClick} >
                {props.buttonName}
            </button>
            </div>
      )
    }
);

export default ChildComponents

//React.memo -> wrap -> component -> component re-render
 //tabhi hoga jab props change honge nahi toh re-render 
// nahi to nahi hoga

/* if u r sending a function then react.memo wont be 
able to save you from re-rendering  */