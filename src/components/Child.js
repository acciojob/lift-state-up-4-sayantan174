import React, { useState } from "react";

const Child = (props) => {
  return (
    <>
      <h1>Child Component</h1>
      <ul className="child">
        {/* <li> <button onClick={}>Remove</button></li> */}
        {props.item.map((value, i) => {
          return (
            <li key={i + 1}>
              {value} - ${props.price[i]}
              <button
                onClick={(i) => {
                  props.func(i);
                  console.log("gghgh")
                }}
              >
                Remove Item
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Child;
