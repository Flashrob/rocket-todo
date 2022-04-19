export const CreateTodoForm = ({ createTodo, input, setInput }) => {
    return (
    <form onSubmit={createTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' onClick={createTodo}>Create Todo</button>
    </form>
    )
}