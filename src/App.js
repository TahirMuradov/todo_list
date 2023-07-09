
import Form from "./components/Form"
import './index.css';
import {  useSelector } from "react-redux";


function App() {
  const todosState=useSelector((state)=>state.todoList.todos)
 
  localStorage.setItem("todos",JSON.stringify(todosState))



 


  return (
<div className="App">
  <header>
    <h1>My Todo List</h1>
  </header>

<Form/>


</div>
  );
}

export default App;
