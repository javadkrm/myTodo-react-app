import React, { Component } from 'react'

export default class Todo extends Component {

    todoRemover (id) {
        this.props.onRemove(id)
    }

    todoEditor (id) {
        this.props.onComplete(id)
    }

    render() {

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