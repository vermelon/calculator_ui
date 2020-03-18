import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Tabulation from "./components/Tabulation";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";



function App() {
  return (
    <div>
        <h1>Project calculator</h1>
        <Tabulation/>
    </div>

  );
}

export default App;
