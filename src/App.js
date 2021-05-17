import React, { useEffect } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import { useState } from 'react/cjs/react.development';
import db from './firebase';

function App() {
  // setup state => useState hook
  // [<name of list>, <setVariableName>]
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // When the app loads, we need to listen to the db and fetch new todos as they are added/removed
  useEffect(() => {
    // this will fire up when app.js loads
    // everytime db changes, it returns 'snapshot'
    db.collection('todos').onSnapshot(snapshot => {
      // go thru every doc, 
      console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  
  const addTodo = event => {
    // Don't refresh page on submit
    event.preventDefault()

    // this will fire off when we click 'Add Todo' button
    // Use spread operator (...) in order to keep what's already in todos list & append input
    // Otherwise it will append to the entire todos object
    setTodos([...todos, input]);

    // clear input field after submitting
    setInput('');

    // store new todo in db
    db.collection('todos').add({
      todo: input
    });
    
  };

  return (
    <div className="App">
      <h1>My List</h1>
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          {/* es6 js - onChange => captures event every time key is pressed */}
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>


        <Button type='submit' onClick={addTodo} variant="contained" color="primary" disabled={!input}>Add Todo</Button>
        <ul>
          {/* map => looping function that returns each item */}
          {/* arrow function */}
          {/* list.map(listItem) */}
          {todos.map(todo => (
            <Todo todo={todo}/>
          ))}
        </ul>
        </form>

    </div>
  );
}

export default App;
