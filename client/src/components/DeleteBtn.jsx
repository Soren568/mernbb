import { navigate } from '@reach/router';
import axios from 'axios';
import React from 'react'

const DeleteButton = props => {
    const{ id, successCallback } = props;

    const handleClick = e => {
        if(window.confirm("Are you sure you want to delete this pirate?"))
        axios.delete('http://localhost:8000/api/pirates/' + id)
            .then(res => {
                console.log("User deleted: ", res)
                successCallback();
            })
            .catch( err => {
                console.log(err)
            })
    }
    return (
        <button onClick={handleClick} className="btn bg-red-400 btn-error">Walk the Plank</button>
    )
}

export default DeleteButton
