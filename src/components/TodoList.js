import React from 'react'

function TodoList(props) {
    return (
        <form>
            <input
                type="checkbox"
                checked={props.isDone}
                onChange={() => props.onCheckChange(props.id)}
                className="App-check"
            />

            <span className="App-link" style={ props.isDone ? {textDecoration: 'line-through'} : null } >
                <span style={ props.isEditing ? {display: 'none'} : {display: 'inline'} }>{props.text}</span>
            </span>
                <input
                    type="text"
                    className="App-btn"
                    value={props.text}
                    onChange={(e) => props.onEditedInputChange(e, props.id)}
                    style={props.isEditing ? { display: 'inline'} : {display: 'none'} } />
            &nbsp;
            
            <button type="submit" className="App-todo-btn" onClick={(e) => props.onEditTodo(e, props.id)}>Edit</button>
            <button className="App-todo-btn" onClick={() => props.onDelete(props.id)}>Delete</button>
        </form>
    )
}

export default TodoList
