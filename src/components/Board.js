import React from 'react'
import {Trash} from 'react-bootstrap-icons'

function Board (props) {

    const handleDelete= () => {
        console.log(props.id)
        props.onDelete("boards", props.id)
    } 
    

    return(
       <div>
           {props.size}
           <Trash onClick={handleDelete}/>
       </div> 
    )
}   

export default Board