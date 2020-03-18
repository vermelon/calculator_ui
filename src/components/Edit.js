import React from "react"
import {Pencil} from 'react-bootstrap-icons';

function Edit ({onClick}){

    return(
        <Pencil onClick = {()=> onClick()}/>
    )
}

export default Edit