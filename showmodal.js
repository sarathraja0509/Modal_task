import React,{useState} from 'react'
import Task from './task'


 const ShowModal=()=> {
    const [showModal, setShowModal] = useState(false)
    function modalopen(){
        setShowModal(!showModal)
    }
    console.log(showModal)
    return (
        <>
            
            {
            showModal ? <Task></Task> 
            : <div></div>
            }
            <button onClick={modalopen}>show Modal</button>
        </>
    )
}

export default ShowModal
