import './App.css';
import firebase from "firebase/app";
import "firebase/database";
const keys = require('./keys.json');

function App() {
  var database = firebase.database();
  // console.log(new Database().getDatabase().ref("test/password").key);
  console.log(database.ref("test/password").key);
  // console.log(database.ref("test/username").key);
  // database.ref("test/xx/too_bad").get().then(function(snapshot) {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   }
  // });
  // database.ref("test/bruh").set({
  //   username: "bruh",
  //   password: "bruh2"
  // });
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
