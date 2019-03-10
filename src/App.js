import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from './components/snackBar/snackbar';

import './App.css';

class App extends Component {
  hide = () =>{
    
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <React.Fragment>
            <NavBar/>
            <Search/>   
            <Snackbar />
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
