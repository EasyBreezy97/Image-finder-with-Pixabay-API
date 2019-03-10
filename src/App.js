import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from './components/snackBar/snackbar';
import classes from './App.css';

class App extends Component {
 state ={
  hideSnackBar:false
}

 hideSnackBar = () => {
   this.setState({hideSnackBar:true})
 }


  render() {
    return (
      <div >
        <MuiThemeProvider>
          <React.Fragment>
            <NavBar/>
            <Search />   
            <div  className  = {this.state.hideSnackBar ?  classes.hide : null}>
          
              <Snackbar 
              btnClicked = {this.hideSnackBar}/>
            
            
            </div>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
