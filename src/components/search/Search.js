import React, { Component } from 'react'
import ImageResults from '../image-results/ImageResults';
import TextField from 'material-ui/TextField';
import  SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';


class Search extends Component {

    state = {
        seatchText :'',
        amount : 15,
        apiUrl : 'https://pixabay.com/api',
        apiKey : '11815340-1d1f4823a2d53b0def1fb95dc',
        images : []
    }

    onTextChange = (e) =>{
      const val = e.target.value;
     this.setState({[e.target.name]:val} , ()=> {
      if(val == ''){
        this.setState({images:[]});
      }
      else{
        axios
        .get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=
        ${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
        .then(res => this.setState({images:res.data.hits}))
        .catch(err=> console.log(err));
      }
     })
    }

    onAmountChange = (e,index,newAmount) =>{
      this.setState({amount:newAmount}, ()=>{
        if(this.state.images.length > 0){
          this.setState({images:[]});
          this.setState({searchText :''})
        }
      })
    }

  render() {
    console.log(this.state.images);
    return (
      <React.Fragment>
          <TextField  
          name = 'searchText'
          style={{marginLeft: '25px'}} 
          value = {this.state.searchText}
          onChange = {this.onTextChange}
          floatingLabelText = 'Search for images'
           />
          <br/>
          
          <SelectField floatingLabelText="amount"
            value={this.state.amount}
            onChange={this.onAmountChange} style={{marginLeft: '25px'}}>
            
            <MenuItem value={5} primaryText="5"/>
            <MenuItem value={10} primaryText="10"/>
            <MenuItem value={15} primaryText="15"/>
            <MenuItem value={30} primaryText="30"/>
            <MenuItem value={50} primaryText="50"/>
            <MenuItem value={100} primaryText="100"/>
            <MenuItem value={200} primaryText="200"/>
          </SelectField>
          <br/>
          {this.state.images.length > 0 ? <ImageResults images = {this.state.images}/> : null }
     
      
      </React.Fragment>
    )
  }
}

export default Search;