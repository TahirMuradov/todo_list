import React, { useEffect } from 'react'
import { todoActions } from '../redux/todolistSlice'

const Todo = ({todo,dispatch}) => {
  const deletedTodos=()=>{

    dispatch(
      todoActions.deleteTodo(
        {
          id:todo.id,
          text:todo.text,
          completed:todo.completed
          }
      ),
   
    
    )

  }
  const completedTodo=()=>{

  dispatch(todoActions.completedTodo(
    {
      id:todo.id,
      text:todo.text,
      completed:!todo.completed
    }
  ))

   
  }

  return (
    <>


        <div className={`todo ${todo.completed==true? "completed":""}`}>
      
        <button className="complete-btn" onClick={completedTodo}>
            <i className={`fas fa-check-circle${todo.completed==true?"hidden":""}`}></i>
            <i className={`fa-solid fa-rotate-right${todo.completed==true?"":"hidden"}`}></i>
        </button>
        <li className="todo-item">{todo.text}</li>
        <button className="trash-btn" onClick={deletedTodos}>
            <i className="fa fa-minus-circle"></i>
        </button>
    </div>
      

    
    </>

  )
}

export default Todo