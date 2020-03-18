import React, { useState, useRef, useEffect } from "react"
import {Trash} from 'react-bootstrap-icons'
import InlineEdit from 'react-ions/lib/components/InlineEdit'

import Alert from "./Alert";

function Board(){
    const [render, setRender] = useState(false)
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isEditing, setEdit] = useState(false)
    const [value, setValue] = useState("")
    const[newValue, setNewValue] = useState("")
    const[error, setError] = useState(null)
    const prevValue = usePrevious(value)


    function useAsyncHook(setState, trigger) {
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

const handleDelete = (id) => {
    setLoading(true);
    fetch(`http://localhost:8080/api/boards/` + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
            .then((res) => {
                if (res.status===200) {
                    setLoading(false)
                    setRender (!render)
                }
            })

    };

const handleSave= (e, id, setState) => {
        setEdit(false);
        setValue(e.target.value);
        setLoading(true);
        fetch(`http://localhost:8080/api/boards/`+id, {
        method: "PUT",
        body: JSON.stringify({
            size: e.target.value
        }),
        headers: {
        "Content-Type": "application/json"
    },

}
)
.then(async(res) => {
        if (res.status===200) {
            setRender(!render)
        }else{
            e.target.value = prevValue
            const err = await res.json();
            setState(err);
        }
    })
};

const handleChange = e => {
    setNewValue(e.target.value)
}

function usePrevious (val){
    const ref = useRef()
    useEffect(() => {
        ref.current = val
    }, [val]);
    console.log(val)
    return ref.current;
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

    console.log(error)
    setError(null)
    console.log(error)
   setRender(!render)
    }


return(
    <div>
        {error && <Alert {...error} onAlertClose = {()=>handleAlertClose()}/>}
        <ul>

            {boards.map(board => (

            <li key={board.id}>
                    <InlineEdit value={board.size} isEditing={isEditing} changeCallback={(event)=>handleSave (event, board.id, setError)} />
                    <Trash onClick={()=>handleDelete(board.id)}/>
                </li>

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