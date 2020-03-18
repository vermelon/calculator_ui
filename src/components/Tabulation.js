import React from "react";
import Board from './Board'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";



function Tabulation (){
    return(
        <Tabs defaultActiveKey="boards" id="uncontrolled-tab-example">
            <Tab eventKey="boards" title="Boards">
                <Board/>
            </Tab>
            <Tab eventKey="woods" title="Woods">
                <p>some text</p>
            </Tab>
            <Tab eventKey="materials" title="Materials">
                <p>some text</p>
            </Tab>
            <Tab eventKey="finishes" title="Finishes">
                <p>some text</p>
            </Tab>
            <Tab eventKey="products" title="Products">
                <p>some text</p>
            </Tab>
            <Tab eventKey="projects" title="Projects">
                <p>some text</p>
            </Tab>
        </Tabs>
    )
}
export default Tabulation