import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <NavBar/>
      <Search/>        
      </MuiThemeProvider>
       
       
     
       
      </div>
    );
  }
}

export default App;
