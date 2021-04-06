import React, { useState, useRef, useEffect } from "react"
import Board from './Board';
import Alert from "./Alert";

function Boards(props){

    const[error, setError] = useState(null)



    
/*    function useAsyncHook(setState, trigger) {
        const [result] = useState([]);
        const [loading, setLoading] = useState("false");
        useEffect(() => {
            async function fetchList() {
                try {
                    setLoading("true");
                    const response = await fetch(
                        `http://localhost:8080/api/boards`
                    );
                    const json = await response.json();
                    setState(json)
                } catch (error) {
                    setLoading("null");
                }
            }
        fetchList()
        }, trigger);
        return [result, loading];
    }
    useAsyncHook(setBoards, [render])
*/
function handleAlertClose() {
    console.log("alert close")
}

function handleDelete() {
    console.log("delete")
}


return(
    <div>
        <ul>
        {props.boards.map((board) => (
          <Board
            key={board.id} 
            id={board.id}
            size={board.board_size} 
            onDelete = {props.onDelete}
            />
        ))}

        </ul>
    </div>
    );

}

export default Boards