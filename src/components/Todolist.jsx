import React, { useEffect } from 'react'
import Todo from "./Todo"
import { useSelector } from 'react-redux'


const Todolist = ({dispatch}) => {
  const todos=useSelector((state)=>state.todoList.todos)

  return (
    <div>
    <div className="todo-container">
    <ul className="todo-list">
      {

todos.map((todo,key)=>(

<Todo todo={todo} key={key} dispatch={dispatch}/>


))
      }
        
    </ul>
    </div>
  
</div>
  )
}

export default Todolist