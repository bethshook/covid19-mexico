import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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
      </AppBar>
    </div>
  )
}

export default NavBar;
