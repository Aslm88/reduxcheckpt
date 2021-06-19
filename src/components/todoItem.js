import React, {UseRef}from 'react';

const TodoItem = (props) => {
    const {item,updateTodo,removeTodo,completeTodo}= props;
    const inputRef = UseRef;

     const changeFocus = () => {
         inputRef.current.disabled =false;
         inputRef.Current.focus()
     }

     const update = (id,value,e)=> {

        if ((e).which === 13){
            updateTodo({ id, item: value});
            inputRef.current.disabled = true;
        }
     };
    return (
        <li key={item.id} className="card">
                            <textarea 
                             ref={inputRef} 
                             disabled={inputRef}
                             defaultValue={item.item}
                             onKeyPress={(e) => update(item.id, inputRef.current.value, (e))}
                             />
                            <div >
                            <button onClick={()=>changeFocus()}>
                                Edit</button> 
                            <button onClick={()=>completeTodo(item.id)}>
                                Done</button>
                            <button onClick={()=>removeTodo(item.id)}>
                                Delete</button>{" "}
                                </div>
                                {item.completed && <span className="completed">Finished</span>}
                            </li>
    )
}

    export default TodoItem;
