import React from "react"

import {Trash} from 'react-bootstrap-icons'

function Finish (props) {

    const handleDelete= () => {
        console.log(props.id)
        props.onDelete("finishes", props.id)
    } 

console.log(props)
    return(
       <div>
           {props.finish} {props.stain} {props.price}
           <Trash onClick={handleDelete}/>
       </div> 
    )
}   

export default Finish