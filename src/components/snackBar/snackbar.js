import React from 'react';
import classes from './snackbar.css'

const SnackBar = (props) => {
    
    return(
        
        <div className={classes.Snackbar} >
            You can see maximum 200 images per word
            <button onClick = {props.btnClicked}>Got it!</button>
        </div>

    )
}

export default SnackBar;