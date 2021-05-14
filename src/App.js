import React from 'react';
import './App.css';
import { useState } from 'react/cjs/react.development';

function App() {
  // setup state => useState hook
  // [<name of list>, <setVariableName>]
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = event => {
    // Don't refresh page on submit
    event.preventDefault()

    // this will fire off when we click 'Add Todo' button
    // Use spread operator (...) in order to keep what's already in todos list & append input
    // Otherwise it will append to the entire todos object
    setTodos([...todos, input]);

    // clear input field after submitting
    setInput('');
    
  };

  return (
    <div className="App">

      <h1>My Todo List</h1>
      <form>
        {/* es6 javascript */}
        {/* onChange => captures event every time key is pressed */}
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type='submit' onClick={addTodo}>Add Todo</button>
        <ul>
          {/* map => looping function that returns each item */}
          {/* arrow function */}
          {/* list.map(listItem) */}
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
        </form>

    </div>
  );
}

export default App;
