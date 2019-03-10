import React from 'react';
import classes from './snackbar.css'

const SnackBar = (props) => {
    return(
        <div className='Snackbar'>
            You can see maximum 200 images per word
            <button>Got it!</button>
        </div>

    )
}

export default SnackBar;