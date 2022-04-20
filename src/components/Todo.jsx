import { useState } from 'react';
import './Todo.css';

export const Todo = ({ todo, index, deleteTodo, updateTodo }) => {
    const [isDone, setIsDone] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo);

    return (
    <div>
        {!isEditing && (
        <>
            <span {...(isDone && { className: 'done' })} key={todo + index} onClick={() => setIsDone(!isDone)}>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
        )}

        {isEditing && (
            <>
                    <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                    <button onClick={() => { 
                        updateTodo(editText, index);
                        setIsEditing(false); 
                    } }>Save</button>
            </>
        )}
    </div>
    )
}