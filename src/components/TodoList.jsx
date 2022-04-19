import { Todo } from "./Todo"

export const TodoList = ({ todos, deleteTodo }) => {
    return todos.map((todo, index) => (
        <Todo todo={todo} index={index} deleteTodo={deleteTodo} />
      ))
}