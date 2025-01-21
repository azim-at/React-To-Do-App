import React, {useState} from "react";

function App() {

  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleInput(event) {
    const iText = event.target.value;
    setInputText(iText);
  }

  function handleClick() {
    setItems( (prevItem) => {
      return [...prevItem, inputText]
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( (eachItem) => {
            return <li>{eachItem}</li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
