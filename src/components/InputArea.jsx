import React, { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="form">
      <input type="text" value={text} onChange={handleChange} />
      <button
        onClick={() => {
          props.onAdd(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
