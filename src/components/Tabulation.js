import React from "react";
import Boards from './Boards'
import Woods from './Woods'
import Materials from './Materials'
import Finishes from './Finishes'
import Products from './Products'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";



function Tabulation (props){

const onTabClick = (eventKey) => {
        props.onClick(eventKey)
    } 



    return(
        <Tabs defaultActiveKey="boards" onSelect={onTabClick}>
            <Tab eventKey="boards" title="Boards" >
             <Boards boards = {props.boards} onDelete={props.onDelete}/>
            </Tab>
            <Tab eventKey="wood" title="Wood">
               <Woods woods = {props.woods} onDelete={props.onDelete}/>
            </Tab>
            <Tab eventKey="materials" title="Materials">
                <Materials materials = {props.materials} onDelete={props.onDelete}/>
            </Tab>
            <Tab eventKey="finishes" title="Finishes">
                <Finishes finishes = {props.finishes} onDelete={props.onDelete}/>
            </Tab>
            <Tab eventKey="products" title="Products">
                <Products products = {props.products} onDelete={props.onDelete}/>
            </Tab>
        </Tabs>
    )
}
export default Tabulation