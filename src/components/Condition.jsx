import { useContext } from "react";
import style from "./Condition.module.css" ;
import { TodoItemsContext } from "../store/todo-items-store";

let Condition = ()=>{
    const ContextObj = useContext(TodoItemsContext) ;
    let todoItemsFromContext = ContextObj.itemsList ;
    console.log(todoItemsFromContext) ;
    
    return <>{todoItemsFromContext.length==0 && <p className={style.para}>Enjoy your day</p>}
    </>
}

export default Condition ;