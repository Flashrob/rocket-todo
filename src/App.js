import { useState } from 'react';
import { CreateTodoForm } from './components/CreateTodoForm';
import { DeleteTodosButton } from './components/DeleteTodosButton';
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
      <DeleteTodosButton setTodos={setTodos} />
      <CreateTodoForm
        createTodo={createTodoHandler}
        input={input}
        setInput={setInput}
      />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </>
  );
}

export default App;
