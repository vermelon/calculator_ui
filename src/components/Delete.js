import React from "react"
import {Trash} from 'react-bootstrap-icons';


function Delete({onClick}) {

    return(
        <Trash onClick = {()=> onClick}/>
    )
}

export default Delete