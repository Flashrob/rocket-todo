import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodoHandler = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteTodoHandler = (indexToDelete) => {
    const todosAfterDelete = todos.filter((_todo, todoIndex) => todoIndex !== indexToDelete)
    setTodos(todosAfterDelete);
  };

  return (
    <>
      <h1>Todo Application</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={createTodoHandler}>Create Todo</button>
      {todos.map((todo, index) => (
        <div>
          <span key={todo + index}>{todo}</span>
          <button onClick={() => deleteTodoHandler(index)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
