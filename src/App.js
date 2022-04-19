import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  return (
    <>
      <h1>Todo Application</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button>Create Todo</button>
    </>
  );
}

export default App;
