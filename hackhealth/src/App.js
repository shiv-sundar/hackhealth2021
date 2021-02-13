import './App.css';
import firebase from "firebase/app";
import "firebase/database";
import React, { useState } from 'react';
const keys = require('./keys.json');

function App() {
  const [list, setList] = useState([]);
  var database = firebase.database();
  database.ref("nationality/Brazil").get().then(function(result) {
  if (result.exists()) {
      const newList = [];
      result.forEach(function(item) {
        newList.push(item.key);
      })
      setList(newList);
  }
});

  // const numbers = [...Array(list1.length).keys()];
  // console.log(numbers);
  // console.log(list);
  // const listItems = list1.forEach()
  const listItems = list.map((item, index) =>
      (<li key={index}>
        {item}
      </li>)
  );
  console.log(listItems);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>{listItems}</ul>
      </header>
    </div>
  );
}

export default App;
