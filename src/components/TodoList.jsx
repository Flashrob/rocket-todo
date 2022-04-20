import styled from 'styled-components';
import { Todo } from "./Todo"

const Container = styled.div`
width: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
`

export const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (<Container>{todos.map((todo, index) => (
      <Todo key={todo} todo={todo} index={index} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    ))}</Container>)
}