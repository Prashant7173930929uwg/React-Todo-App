import { useState, useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo(){
  
  let contextObj = useContext(TodoItemsContext) ;
  const onNewItem = contextObj.onNewItem ;
  
  const todoNameElement = useRef("") ;
  const todoDateElement = useRef("") ; 

  let handleOnClick = ()=>{
     let inputTodoItem = todoNameElement.current.value ;
     let inputDate = todoDateElement.current.value ;
     if(inputTodoItem=="" || inputDate==""){
      alert("please Enter the date and Todo") ;
     }
     else{
     onNewItem(inputTodoItem, inputDate) ;
     todoNameElement.current.value = "" ;
     todoDateElement.current.value = "" ;
     } 
  }

  return(
      
    <div class="container text-center">
     <div class="row">
      <div class="col-6">
        <input type="text" ref={todoNameElement} className="inputBox" placeholder="Enter Todo here" />
      </div>
      <div className="col-4">
        <input type="date" ref={todoDateElement}  />
      </div>
      <div className="col-2">
      <button type="button" className="btn btn-success" onClick={handleOnClick}>ADD</button>
      </div>
     </div>
    </div>
    )

}

export default AddTodo ;