import { useState } from 'react';
import './Todo.css';

export const Todo = ({ todo, index, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false);

    return (
    <div>
        <span {...(isDone && { className: 'done' })} key={todo + index} onClick={() => setIsDone(!isDone)}>{todo}</span>
        <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
    )
}