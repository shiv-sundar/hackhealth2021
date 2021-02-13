import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/database";
const keys = require('./keys.json');

function App() {
  const firebaseConfig = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
    appId: keys.appId
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  console.log(database.ref("test/password").key);
  console.log(database.ref("test/username").key);
  database.ref("test/xx/too_bad").get().then(function(snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    }
  });
  // database.ref("test/bruh").set({
  //   username: "bruh",
  //   password: "bruh2"
  // });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
