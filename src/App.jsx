import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: [
        {
          todo: 'Belajar Javascript',
          isDone: true
        },
        {
          todo: 'Selesaikan Project 1',
          isDone: true
        },
        {
          todo: 'Belajar React',
          isDone: true
        },
        {
          todo: 'Selesaikan Project 2',
          isDone: true
        },
        {
          todo: 'Belajar Lebih Banyak!',
          isDone: false
        }
      ]
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
    this.handleUpdateDone = this.handleUpdateDone.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    this.setState({
      todoLists: [
        ...this.state.todoLists,
        {
          todo: 'New Todo',
          isDone: false
        }
      ]
    })
  }

  handleUpdateTodo(index, newTodoList) {
    let newTodoLists = [...this.state.todoLists];
    newTodoLists[index] = newTodoList
    this.setState({
      todoLists: newTodoLists
    })
  }

  handleUpdateDone(index) {
    let newTodoLists = [...this.state.todoLists];
    newTodoLists[index].isDone = !newTodoLists[index].isDone;
    this.setState({
      todoLists: newTodoLists
    })
  }

  handleDelete(index) {
    let newTodoLists = [...this.state.todoLists];
    newTodoLists.splice(index, 1);
    this.setState({
      todoLists: newTodoLists
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">My Todo App</h1>
        {
          this.state.todoLists.map((todoList, index) =>
            <Todo
              key={index}
              todoList={todoList}
              index={index}
              handleUpdateTodo={this.handleUpdateTodo}
              handleUpdateDone={this.handleUpdateDone}
              handleDelete={this.handleDelete}
            />
          )
        }
        <div>
          <button className="Add-button" onClick={() => { this.handleAdd() }}>Add Todo List</button>
        </div>
      </div>
    )
  }
}

export default App
