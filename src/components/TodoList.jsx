import { Todo } from "./Todo"

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return todos.map((todo, index) => (
        <Todo key={todo} todo={todo} index={index} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      ))
}