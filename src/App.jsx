import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import Condition from "./components/Condition" ;
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";




function App() {
 
  

  
    
  return (
   <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo ></AddTodo>
      <Condition ></Condition>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContextProvider>
  );
}

export default App;
