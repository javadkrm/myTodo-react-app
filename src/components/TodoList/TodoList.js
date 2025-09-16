import React, { useState, useEffect } from 'react'
import Header from './Header'
import Todo from './Todo'

export default function TodoList() {



    const [todos, setTodos] = useState([])
    const [todoTitle, setTodotitle] = useState('')
    const [status, setStatus] = useState('all')

    useEffect(() => {
        console.log('TodoList.js => Update');
    })

    useEffect(() => {
        console.log('TodoList.js => Mount');
    }, [])


    const statusHandler = (event) => {
        setStatus(event.target.value)
    }

    const editTodo = (todoId) => {

        let todosArray = [...todos]

        todosArray.forEach(todo => {
            if (todo.id === todoId) {
                todo.completed = !todo.completed
            }
        })

        setTodos(todosArray)

    }

    const removeTodo = (todoId) => {

        let newTodosList = todos.filter(todo => {
            return todo.id !== todoId
        })


        setTodos(newTodosList)
    }

    const addTodo = (event) => {

        event.preventDefault()

        let newTodo = { id: todos.length + 1, title: todoTitle, completed: false }

        if (newTodo.title) {

            setTodos(prevState => {
                return [...prevState, newTodo]
            })

            setTodotitle('')


        } else {
            alert('Please Enter Value')
        }


    }

    const todoTitleHandler = (event) => {
        setTodotitle(event.target.value)
    }

    return (
        <>
            <Header />
            <form onSubmit={addTodo}>
                <input type="text" value={todoTitle} className="todo-input" maxLength="40" onChange={todoTitleHandler} />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">

                    {status === 'completed' && todos.filter(todo => todo.completed).map(todo => {
                        return <Todo key={todo.id} {...todo} onRemove={removeTodo} onComplete={editTodo} />
                    })}

                    {status === 'uncompleted' && todos.filter(todo => !todo.completed).map(todo => {
                        return <Todo key={todo.id} {...todo} onRemove={removeTodo} onComplete={editTodo} />
                    })}

                    {status === 'all' && todos.map(todo => {
                        return <Todo key={todo.id} {...todo} onRemove={removeTodo} onComplete={editTodo} />
                    })}


                </ul>
            </div>
        </>
    )

}
