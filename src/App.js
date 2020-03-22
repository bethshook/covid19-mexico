import './App.css';
import React, { Component } from 'react';
import NavBar from './compoments/NavBar'
import {  BrowserRouter as Router, Route, Switch} from "react-router-dom";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <header className="App-header">
          <Router>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
          <h3>Recursos</h3>
        </header>
        <div>
          <h2>Cómo Ayudar</h2>
          <div style={{ width: '100%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1F2SSHTJxy8znHus4qOosLcqas__A6j4j" width="640" height="480">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

function Home() {
  return <h2>Apoyo Mutuo - Roma Norte</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
