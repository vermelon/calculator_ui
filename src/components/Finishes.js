import React, { useState, useRef, useEffect } from "react"
import Finish from './Finish'

function Finishes (props){


return(
    <div>
        <ul>
        {props.finishes.map((finish) => (
          <Finish
            key={finish.id} 
            finish={finish.finish}
            stain={finish.stain}
            price={finish.price}
            onDelete = {props.onDelete}
            id = {finish.id}
            />
        ))}

        </ul>
    </div>
    );

}

export default Finishes