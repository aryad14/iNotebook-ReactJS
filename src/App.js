import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/noteState";
// import NoteState from "./context/notes/noteState";

function App() {
  return (
    <>
    <NoteState>
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
        </Switch>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
