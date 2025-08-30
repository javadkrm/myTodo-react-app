import React, { Component, PureComponent } from 'react'

export default class Todo extends PureComponent {

    constructor(props) {

        super(props)

        console.log('Todo => constructor');

        this.state = {
            todoId: '',
            todoTitle: '',
            todoComplete: false
        }

    }

    todoRemover(id) {
        this.props.onRemove(id)
    }

    todoEditor(id) {
        this.props.onComplete(id)
    }

    componentDidMount() {
        console.log('Todo => componentDidMount');

    }

    static getDerivedStateFromProps(props, state) {
        console.log('Todo => getDerviedStateFromProps')

        return {
            todoId: props.id,
            todoTitle: props.title,
            todoComplete: props.completed,
        }
    }

    shouldComponentUpdate(props, state) {
        console.log('Todo => shouldComponentUpdate')
        // if (this.props.title === props.title) {
        //     return false
        // } else {
            
        //     return true
        // }
    }

    render() {

        console.log('Todo => render')

        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.props.title}</li>

                <button className="check-btn" onClick={this.todoEditor.bind(this, this.props.id)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.todoRemover.bind(this, this.props.id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}