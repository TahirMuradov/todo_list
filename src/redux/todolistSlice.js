import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    todos: [],
    };
  JSON.parse(localStorage.getItem("todos"))===null?localStorage.setItem("todos",JSON.stringify(initialState.todos)):
  initialState.todos=JSON.parse(localStorage.getItem("todos"))
  const todoSlice = createSlice({
    name: "todoList",
    initialState, 
    reducers: {
      addTodo: (state, action) => {
        const newTodo = action.payload;
        state.todos.push({
          id: newTodo.id,
          text: newTodo.text,
          completed: false,
        });

      },
      deleteTodo: (state, action) => {
        const deletedTodo = action.payload;
        state.todos = state.todos.filter((todo) => todo.id !== deletedTodo.id); 
      },
      completedTodo:(state,action)=>{
        const completedTodos=action.payload;
             state.todos.map((item,index)=>{
item.id===completedTodos.id?state.todos.splice(index,1,completedTodos) :<></>;
     })

      },
 
  }});
  
  export const todoActions = todoSlice.actions;
  export default todoSlice.reducer;
  