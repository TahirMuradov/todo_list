import React, { useState } from 'react'
import "../../src/index.css"
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from '../redux/todolistSlice'
import Todolist from './Todolist'

const Form = () => {
  const [list,setList]=useState('');  
  const [filteredValue,setFilterdValue]=useState([]);
  const todos=useSelector((state)=>state.todoList.todos)
const value=(e)=>{
  setList(
    e.target.value
   
  )
    }

    const dispathc=useDispatch();
    const addTodo=(e)=>{
  
        e.preventDefault()
  
  dispathc(
    todoActions.addTodo({
      
        id:Math.random(),
        text:list,
        completed:false,
    })
    )
    }


  return (<>
    <form>
    <div className="search">
        <input  type="text" className="todo-input" placeholder="Add..." onChange={value}/>
        <button className="todo-button" type="submit"onClick={addTodo}>
            <i className="fas fa-plus-circle"></i>
        </button>
    </div>


</form>
<Todolist dispatch={dispathc} />
  </>
  )
}

export default Form