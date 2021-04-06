import React from 'react'
import {Trash} from 'react-bootstrap-icons'

function Wood (props) {

    const handleDelete= () => {
        console.log(props.id)
        props.onDelete("wood", props.id)
    } 

    return(
       <div>
            {props.type} 
            <Trash onClick={handleDelete}/>
       </div> 
    )
}   

export default Wood