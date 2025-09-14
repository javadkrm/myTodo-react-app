import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {

  constructor(props) {

    super(props)

    console.log('App => constructor');

  }

  render() {

    console.log('App => render')

    return (
      <div className="App">
        <TodoList />
      </div>
    )

  }
}

export default App;
