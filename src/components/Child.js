import React, { useState } from "react";

const Child = (props) => {
  return (
    <div className="child">
      <h1>Child Component</h1>
      <ul>
        <li>fdssf </li>
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
    </div>
  );
};

export default Child;
