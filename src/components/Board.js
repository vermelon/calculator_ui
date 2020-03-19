import React, {useEffect, useReducer, useState} from "react"

import Alert from "./Alert";
import BoardItem from "./BoardItem";

function Board(){
    const [render, setRender] = useState(false)
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(false);
    const[newValue, setNewValue] = useState("")
    const[error, setError] = useState(null)
    const [errorMessage, setErrorMessage] =useState(null)




useEffect(()=>{fetchList()},[render]);

async function fetchList() {
    console.log("fetching list")
    const response = await fetch(
        `http://localhost:8080/api/boards`)
    const json = await response.json();
    setBoards(json)
}


const handleChange = e => {
    setNewValue(e.target.value)
}



const handleSubmit = () => {
    setLoading(true);
    fetch(`http://localhost:8080/api/boards/`, {
        method: "POST",
        body: JSON.stringify({
            size: newValue
        }),
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then((res) => {
            if (res.status===200) {
                setLoading(false);
                setRender (!render)
            }
        })

};



function handleAlertClose(){
    setErrorMessage("error")
    setError(null)
    setRender(!render)
    }

return(
    <div>
        {error && <Alert {...error} onAlertClose = {()=>handleAlertClose()}/>}
        <ul>
            {boards.map(board => (
                <BoardItem board={board} key = {board.id}/>
            ))}

           {<form onSubmit = {handleSubmit}>
                <label>
                    Add New Size:
                   <br />
                    <input type="text" value={newValue} onChange = {handleChange} name="size" />
                    <br />
                </label>
                <input type="submit" value="Submit" />
            </form>}
        </ul>


    </div>
    );

}

export default Board