import React, { useState, useRef, useEffect } from "react"
import Wood from './Wood';
import Alert from "./Alert";

function Woods (props){



return(
    <div>
        <ul>
        {props.woods.map((type) => (
          <Wood
            key={type.id} 
            type={type.wood} 
            onDelete = {props.onDelete}
            id = {type.id}
            />
        ))}

        </ul>
    </div>
    );

}

export default Woods