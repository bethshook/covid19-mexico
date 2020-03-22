import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <a
              className="App-link"
              href="/"
              rel="noopener noreferrer"
            >
              Apoyo Mutuo - Roma Norte
            </a>
          </Typography>
        </Toolbar>
        <Tabs>
          <Tab label="Home" />
          <Tab label="About" />
        </Tabs>
      </AppBar>
    </div>
  )
}

export default NavBar;
