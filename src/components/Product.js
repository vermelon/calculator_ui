import React from "react"

import {Trash} from 'react-bootstrap-icons'

function Product (props) {

    const handleDelete= () => {
        console.log(props.id)
        props.onDelete("products", props.id)
    } 

console.log(props)
    return(
       <div>
           {props.name}
           {props.materials.map((material)=> 
            <li key={material.id}>
           {material.board}
            {material.wood}</li>)}
            {props.finish}
            {props.hours}
            {props.fees}
            {props.total}
            
            <Trash onClick={handleDelete}/>
       </div> 
    )
}   

export default Product 