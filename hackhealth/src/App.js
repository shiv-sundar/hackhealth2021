import './App.css';
import firebase from "firebase/app";
import "firebase/database";
const keys = require('./keys.json');

// const list1 = [];

function App() {
  var database = firebase.database();
  database.ref("nationality/burmese").get().then(function(snapshot) {
    if (snapshot.exists()) {
      snapshot.forEach(function(childSnapshot) {
        // list1.push(childSnapshot.key);
        console.log(childSnapshot.key);
      })
    }
  });
  // const numbers = [1, 2, 3, 4, 5];
  // console.log(numbers);
  // console.log(list1);
  // // const listItems = list1.forEach()
  // const listItems = list1.map((value) =>
  //   return(
  //     <li>{value}</li>
  //   );
  // );

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
      </header>
    </div>
  );
}

export default App;
