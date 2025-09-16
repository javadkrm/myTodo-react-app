import React from 'react';
import { useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {

  useEffect(() => {
    console.log('app.js => Mount');
  })
  
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}

export default App;
