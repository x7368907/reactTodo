import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [list, setList] = useState([]);

  function addItem(text) {
    setList((prev) => {
      console.log(prev);
      return [...prev, text];
    });
  }

  function deleteItem(id) {
    setList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {list.map((item, index) => {
            return (
              <TodoItem
                key={index}
                text={item}
                onChecked={deleteItem}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
