import React, { useState } from "react";
import "./../styles/App.css";
import Child from "./Child";
const App = () => {
  const [items, setItems] = useState([]);
  const [prices, setPrices] = useState([]);

  const deleteItem = (index) => {
    setItems(
      items.filter((v, i) => {
        return i !== index;
      })
    );
    setPrices(
      prices.filter((v, i) => {
        return i !== index;
      })
    );
  };
  return (
    <div>
      {/* Do not remove the main div */}

      <h1>Parent Component</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setItems([...items, e.target.item.value]);
          setPrices([...prices, e.target.price.value]);
        }}
      >
        <label htmlFor="itemName">Item Name</label>
        <input type="text" id="itemName" name="item" />
        <label htmlFor="itemPrice">Item Price</label>
        <input type="number" id="itemPrice" name="price" />
        <button>Add Item</button>
      </form>
      <Child item={items} price={prices} func={deleteItem}/>
    </div>
  );
};

export default App;
