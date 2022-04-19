import { useState } from 'react';
import { TodoList } from './components/TodoList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodoHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteTodoHandler = (indexToDelete) => {
    const todosAfterDelete = todos.filter(
      (_todo, todoIndex) => todoIndex !== indexToDelete,
    );
    setTodos(todosAfterDelete);
  };

  return (
    <>
      <h1>Todo Application</h1>
      <button onClick={() => setTodos([])}>Delete All Todos</button>
      <form onSubmit={createTodoHandler}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit' onClick={createTodoHandler}>
          Create Todo
        </button>
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </>
  );
}

export default App;
