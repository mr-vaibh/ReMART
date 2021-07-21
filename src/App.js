import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Wiki from './components/Wiki'
import './App.css'

export class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          newTodoInput: '',
          editedTodoInput: '',
          todos : []
      };
  }

  onInputChange = (e) => {
      this.setState({
          newTodoInput: e.target.value,
      })
  }

  onSubmit = (e) => {
      e.preventDefault();
      const todoText = this.state.newTodoInput;

      if (todoText.length > 0) {
          const newTodo = {
              id: Date.now(),
              text: todoText,
              isDone: false,
              isEditing: false
          };
          const newTodoList = [...this.state.todos, newTodo];
          
          this.setState({
              todos: newTodoList,
              newTodoInput : "",
              editedTodoInput : "",
          });
          document.getElementById("todoText").blur();
      }
  }

  onCheckChange = (id) => {
    const existingTodos = this.state.todos;
    const todo = existingTodos.find(item => item.id === id)

    if (todo['isDone'] === true) {
      todo['isDone'] = false
    } else {
      todo['isDone'] = true
    }
    
    this.setState({ todos: existingTodos });
  }

  onEditedInputChange = (e, id) => {
    const existingTodos = this.state.todos;
    const todo = existingTodos.find(item => item.id === id)

    todo['text'] = e.target.value;

    this.setState({ todos: existingTodos });
  }

  onEditTodo = (e, id) => {
    e.preventDefault();

    const existingTodos = this.state.todos;
    const todo = existingTodos.find(item => item.id === id)

    if (todo['isEditing'] === true) {
      todo['isEditing'] = false
    } else {
      todo['isEditing'] = true
    }
    
    this.setState({ todos: existingTodos });
  }
  
  onDelete = (id) => {
    const existingTodos = this.state.todos;
    const newTodoList = existingTodos.filter(item => item.id !== id);
    this.setState({todos: newTodoList});
  }
  


  render() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>ReMART</h1>

          <AddTodo
            newTodoInput={this.state.newTodoInput}
            onInputChange={this.onInputChange}
            onSubmit={this.onSubmit}
            disabled={!this.state.newTodoInput.length > 0}
          />
        
        <br />
        
        <section>
            {
              this.state.todos.map(item =>
                  <TodoList
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  isDone={item.isDone}
                  isEditing={item.isEditing}
                  onCheckChange={this.onCheckChange}

                  editedTodoInput={item.editedTodoInput}
                  onEditedInputChange={this.onEditedInputChange}
                  
                  onEditTodo={this.onEditTodo}
                  onDelete={this.onDelete}
                  />)
          }
        </section>
      </header>

      <Wiki />

    </div>
    );
  }
}

export default App;
