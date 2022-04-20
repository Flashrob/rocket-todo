import styled from 'styled-components';

const Input = styled.input`
width: 142px;`

const CreateTodoButton = styled.button`
width: 100px;`

const Form = styled.form`
margin-bottom: 20px;`

export const CreateTodoForm = ({ createTodo, input, setInput }) => {
    return (
    <Form onSubmit={createTodo}>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <CreateTodoButton type='submit' onClick={createTodo}>Create Todo</CreateTodoButton>
    </Form>
    )
}