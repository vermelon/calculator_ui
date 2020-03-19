import React, {useEffect, useReducer, useRef, useState} from "react"
import {Trash} from 'react-bootstrap-icons'
import InlineEdit from 'react-ions/lib/components/InlineEdit'


function BoardItem (props) {
    const [size, setSize] = props.board.size
    const [isEditing, setEdit] = useState(false)
    const id = props.board.id
    const [_count, forceUpdate] = useReducer(x => x + 1, 0);


   // console.log(inlineValue)
const handleDelete = (id) => {
    //    setLoading(true);
        fetch(`http://localhost:8080/api/boards/` + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => {
                if (res.status===200) {
                props.onDelete()
               //    setRender (!render)
                }
            })

    };

function handleSave(e, id, callback) {
        setEdit(false);
       // setSize(size)
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
                if (res.status!==200) {
                    //setRender(!render)
                    const err = await res.json();
                    console.log(err.message)
                }
            })
           return callback

}


return(
        <div> <InlineEdit value={size} isEditing={isEditing} changeCallback={(event) => handleSave(event, id, forceUpdate())}/>
            <p>Updated {_count} times</p>
            <Trash onClick={() => handleDelete(id)}/>
        </div>
    )
}
export default BoardItem