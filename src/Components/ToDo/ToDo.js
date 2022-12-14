import React from 'react';
import './ToDo.css'


function ToDo({ todo, toggleTask, removeTask }) {


    return (
        <div key={todo.id} className="todo">
            <div onClick={() => toggleTask(todo.id)}>{todo.task}</div>
            <div onClick={() => removeTask(todo.id)}>X</div>
        </div>

    )
}
export default ToDo