import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodoHandler = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <>
      <h1>Todo Application</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={createTodoHandler}>Create Todo</button>
      {todos.map((todo, index) => (
        <p key={todo + index}>{todo}</p>
      ))}
    </>
  );
}

export default App;
