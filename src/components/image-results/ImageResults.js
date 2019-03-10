import React, {Component} from 'react';
import propTypes from 'prop-types';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog/Dialog';
import FlatButton from 'material-ui/FlatButton/FlatButton';



class ImageResults extends Component {

    state ={
        open:false,
        currentImg : ''
    }

    openDialog = (img)=> {
        this.setState({open:true, currentImg:img});
    }

    closeDialog = () => {
        this.setState({open:false})
    }
    render(){

        let imageList;
        const images = this.props.images;

        if(images){
            
            imageList =(
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile 
                           title = {img.tags}
                            key = {img.id}
                            subtitle = {
                                <span>By <strong>{img.user}</strong></span>
                            }
                            actionIcon = {
                                <IconButton onClick = {()=> this.openDialog(img.largeImageURL)}>
                                    <ZoomIn color="white"/>
                                    
                                </IconButton>
                            }>
                        <img src = {img.largeImageURL} alt="img"/>
                        </GridTile>
                    ))
                    }
                     
                </GridList>

              
            ) 
        }
        else{
            imageList = <div className='Spinner'></div>
        }

        const actions = [
            <React.Fragment>
                <FlatButton label='Close' primary={true} onClick = {this.closeDialog}/>

            </React.Fragment>
            
        ]
        return(
            <React.Fragment>
                {imageList}
                <Dialog
                modal = {false}
                open={this.state.open}
                onRequestClose = {this.closeDialog}
                actions={actions}>

                <img src = {this.state.currentImg} alt="img"  style = {{width:'100%'}}/>
                </Dialog>
            </React.Fragment>
        )
    }
}

ImageResults.propTypes = {
    images: propTypes.array.isRequired
}
export default ImageResults;