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
    if (todos.includes(input)) return setInput('');
    setTodos([...todos, input]);
    setInput('');
  };

  const deleteTodoHandler = (indexToDelete) => {
    const todosAfterDelete = todos.filter(
      (_todo, todoIndex) => todoIndex !== indexToDelete,
    );
    setTodos(todosAfterDelete);
  };

  const updateTodo = (todo, index) => {
    const updatedTodos = todos.map((todoItem, todoIndex) => {
      if (todoIndex === index) return todo;
      return todoItem;
    });
    setTodos(updatedTodos);
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
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default App;
