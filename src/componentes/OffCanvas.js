import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "../Styles/OffCanvas.css"


export default function OffCanvas({setCity}) {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [ searchValue , setSearchValue] = useState('')


const  searchResult =  () => {
    console.log(searchValue)
    setCity(searchValue)
    setShow(false)

}



return (
    <>
    <Button variant="secondary" onClick={handleShow}>
        Search for place
    </Button>

    <Offcanvas className="fondo" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className='d-flex gap-2'>
        <input type="text" placeholder="Search for location"  className="form-control" value={searchValue} onChange={(e)=> {setSearchValue(e.target.value)}} ></input>
        <Button variant='secondary' onClick={searchResult} >Search</Button>
        </div>
        <div>
            hola
        </div>
        
        </Offcanvas.Body>
    </Offcanvas>
    </>
);
}
