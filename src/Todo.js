import React, { useEffect, useRef, useState } from 'react'
import './todo.css'
import {AiFillDelete} from "react-icons/ai"

function Todo() {
    const[input, setInput] = useState('')
    const[todo, setTodo] = useState([])
    const addTodo =()=>{
        setTodo([...todo,input])
        setInput(''); 
    }


   const Delete = (keyId) =>{
        const allItems = [...todo]
        allItems.splice(keyId,1);
        setTodo(allItems)
   }
  return (
    <div>
        <div className="container">
            <div className="todo">
                <h1>TODO APP</h1>
                <div className='input'>
                   
                        <input type='text'  placeholder='Enter Your Task...' value={input} onChange={(event)  => setInput(event.target.value)}/>
                        <button type='button' onClick={addTodo}>ADD</button>
                
                </div>
               
                <ul>
                    {todo.map((to , id) => (
                         <li className='list-items' key={id}>
                            <div className='list-item'>{to}</div>
                            <span>
                                    <AiFillDelete className='list-icons' title='Delete' onClick={() =>Delete(id)}/>
                            </span>
                         </li>
                    ))}
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo