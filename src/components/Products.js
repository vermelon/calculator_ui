import React, { useState, useRef, useEffect } from "react"
import Product from './Product';


function Materials (props){

console.log(props)


return(
    <div>
        <ul>
        {props.products.map((product) => (
          <Product
            key={product.id} 
            name={product.name}
            materials={product.Materials}
            finish={product.finish}
            hours={product.hours}
            fees={product.fees}
            total={product.total}
            id={product.id}
            onDelete = {props.onDelete}
            />
        ))}

        </ul>
    </div>
    );

}

export default Materials