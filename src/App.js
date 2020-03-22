import './App.css';
import React, { Component } from 'react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div>
      <header className="App-header">
          <h1>Apoyo Mutuo - Roma Norte</h1>
          <h3>Recursos</h3>
          <ul>
            <li>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </li>
          </ul>
        </header>
        <div style={{ width: '100%', display: 'flex',  justifyContent:'center', alignItems:'center' }}>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1F2SSHTJxy8znHus4qOosLcqas__A6j4j" width="640" height="480">
          </iframe>

        </div>
      </div>
    );
  }
}

export default SimpleMap;
