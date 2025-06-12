import { createContext } from "react" ;
import { useReducer } from "react";

export const TodoItemsContext = createContext() ;

const todoItemReducer = (currTodoItems, action) => {

    let newTodoItems = currTodoItems ;
  
    if(action.type === 'NEW_ITEM'){
      newTodoItems =[...currTodoItems, { item: action.payload.item, date: action.payload.date }] ;
      
      
    }
    else if(action.type === 'DELETE_ITEM'){
      console.log("deleye")
      newTodoItems = currTodoItems.filter((currentElem)=>{return action.payload.item.item!==currentElem.item});
     
    }
    return newTodoItems ;
  }

 const TodoItemsContextProvider = ({children})=>{
    const [items, dispatchTodoItems] = useReducer(todoItemReducer, []) ;
    let handleNewItems = (newItem, newDate) => {
    const newItemAction = {
        type : "NEW_ITEM",
        payload : {
          item : newItem,
          date : newDate
        }
    }
      dispatchTodoItems(newItemAction) ;
    }
  
    let handleDeleteButton=(elem)=>{
       console.log('delete') ;
       const deleteItemAction = {
        type : "DELETE_ITEM",
        payload : {
          item : elem
        }
      }
      dispatchTodoItems(deleteItemAction) ;
    } 

    return  <TodoItemsContext.Provider value={{itemsList : items,  onNewItem : handleNewItems, handleOnClick : handleDeleteButton}}>
     {children}
  </TodoItemsContext.Provider>
}


 

 export default TodoItemsContextProvider ;