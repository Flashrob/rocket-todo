import { useState } from 'react';
import styled from 'styled-components';

const Item = styled.span`
margin-right: 10px;
${(props) => props.isDone && `text-decoration: line-through;`}
`

const DeleteButton = styled.button`
background-color: red;
margin-right: 10px;`

const EditButton = styled.button`
background-color: rgba(0, 0, 255, 0.5);`

const SaveButton = styled.button`
background-color: rgba(0, 255, 0, 0.5);`

const Input = styled.input`
width: 195px;`

export const Todo = ({ todo, index, deleteTodo, updateTodo }) => {
    const [isDone, setIsDone] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo);

    return (
    <div>   
        {!isEditing && (
        <>
            <Item
                {...(isDone && { isDone: true })}
                key={todo + index}
                onClick={() => setIsDone(!isDone)}>
                {todo}
            </Item>
            <DeleteButton onClick={() => deleteTodo(index)}>Delete</DeleteButton>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
        </>
        )}

        {isEditing && (
            <>
                <Input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
                <SaveButton 
                    onClick={() => { 
                        updateTodo(editText, index);
                        setIsEditing(false); 
                    }}
                >
                    Save
                </SaveButton>
            </>
        )}
    </div>
    )
}