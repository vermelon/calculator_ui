import React, { useState, useRef, useEffect } from "react"
import Material from './Material';

function Materials (props){

function handleDelete() {
    console.log("delete")
}
console.log(props)


return(
    <div>
        <ul>
        {props.materials.map((material) => (
          <Material
            key={material.id} 
            size={material.board}
            wood={material.wood}
            price={material.price}
            id = {material.id}
            onDelete = {props.onDelete}
            />
        ))}

        </ul>
    </div>
    );

}

export default Materials