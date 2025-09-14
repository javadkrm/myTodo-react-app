import React, { useState } from 'react'

export default function Todo(props) {

    const todoRemover = (id) => {
        props.onRemove(id)
    }

    const todoEditor = (id) => {
        props.onComplete(id)
    }

    return (
        // 'completed' class for completed todos
        <div className={`todo ${props.completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">{props.title}</li>

            <button className="check-btn" onClick={() => todoEditor(props.id)}>
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={() => todoRemover(props.id)}>
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    )
}
