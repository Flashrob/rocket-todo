import styled from 'styled-components';

const DeleteAllTodosButton = styled.button`
width: 250px;
background-color: rgba(255, 0, 0, 0.5);`

export const DeleteTodosButton = ({ setTodos }) => <DeleteAllTodosButton onClick={() => setTodos([])}>Delete All Todos</DeleteAllTodosButton>