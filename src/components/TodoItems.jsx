import { useContext } from "react";
import "../App.css";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItems(){

  const contextObj = useContext(TodoItemsContext) ;
  let todoItemListFromContext = contextObj.itemsList ; 

  const handleOnClick = contextObj.handleOnClick ;
    return (<>
    {todoItemListFromContext.map((elem)=>{
       return <div class="container">
  

       <div class="row">
         <div class="col-6">{elem.item}</div>
         <div class="col-4">{elem.date}</div>
         <div class="col-2"><button type="button" class="btn btn-danger" onClick={()=>handleOnClick(elem)}>Delete</button></div>
       </div>
     </div>
    })}

</>)
}

export default TodoItems ;