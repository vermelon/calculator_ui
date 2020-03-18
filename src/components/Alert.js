import React from 'react'

import {useState} from "react"
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Alert(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        props.onAlertClose()
    }

        if (props.error != null) {
            setShow(true)
        }

    return (
        <>

                <Modal show={show} onHide={()=>handleClose()}>

                <Modal.Header closeButton>
                    <Modal.Title>Error </Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleClose()}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default Alert
