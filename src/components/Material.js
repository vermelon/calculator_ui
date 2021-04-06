import React from "react"

import {Trash} from 'react-bootstrap-icons'

function Material (props) {

    const handleDelete= () => {
        console.log(props.id)
        props.onDelete("materials", props.id)
    } 

console.log(props)
    return(
       <div>
           {props.size}
           {props.wood}
           {props.price}
           <Trash onClick={handleDelete}/>
       </div> 
    )
}   

export default Material