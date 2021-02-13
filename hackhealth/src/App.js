import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function SignIn() {
  return (
    <Router>
      <div>
        <Link to="/nationality">Sign In</Link>
      </div>
    </Router>
  );
}

function App() {

}
