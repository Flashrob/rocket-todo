export const Todo = ({ todo, index, deleteTodo }) => {
    return (
    <div>
        <span key={todo + index}>{todo}</span>
        <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
    )
}