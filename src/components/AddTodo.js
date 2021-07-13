import React from 'react'


function AddTodo(props) {
    return (
        <form>
            <label htmlFor="todoText">Add Todo: </label>
            <input
                type="text"
                className="App-input"
                id="todoText"
                value={props.newTodoInput}
                onChange={props.onInputChange}
                required
            />
            <button
                // type="submit"
                className="App-btn"
                onClick={props.onSubmit}
                disabled={props.disabled}
            >Submit</button>
        </form>
    )
}

export default AddTodo
