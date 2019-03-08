import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


class Search extends Component {

    state = {
        seatchText :'',
        imageAmount : 15,
        apiUrl : 'https://pixabay.com/api/docs/',
        apiKey : '11815340-1d1f4823a2d53b0def1fb95dc',
        images : []
    }

  render() {
    return (
      <React.Fragment>
          <TextField 
          name = 'searchText' 
          value = {this.state.searchText}
          onChange = {this.onTextChange}
          floatingLabelText = 'Search for images'
          fullWidth = {true} />
          <SelectField/>
      </React.Fragment>
    )
  }
}

export default Search;