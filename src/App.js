import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {

  constructor(props) {

    super(props)

    console.log('App => constructor');

  }

  static getDerivedStateFromProps() {
    console.log('App => getDerivedStateFromProps')
  }
  
  shouldComponentUpdate () {
    console.log('App => shouldComponentUpdate')
  }

  componentDidMount() {
    console.log('App => componentDidMount');

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
