import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoLists: localStorage.getItem('todoLists') ? JSON.parse(localStorage.getItem('todoLists')) : [
        {
          todo: 'New Todo',
          isDone: false
        }
      ]
    }

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
    });
  }

  handleUpdateTodo(index, newTodoList) {
    let newTodoLists = [...this.state.todoLists];
    newTodoLists[index] = newTodoList
    this.setState({
      todoLists: newTodoLists
    });
  }

  handleUpdateDone(index) {
    let newTodoLists = [...this.state.todoLists];
    newTodoLists[index].isDone = !newTodoLists[index].isDone;
    this.setState({
      todoLists: newTodoLists
    });
  }

  handleDelete(index) {
    let newTodoLists = [...this.state.todoLists];
    newTodoLists.splice(index, 1);
    this.setState({
      todoLists: newTodoLists
    });
  }

  render() {
    localStorage.setItem('todoLists', JSON.stringify(this.state.todoLists));
    
    let empty;
    if (!this.state.todoLists.length) {
      empty = <div>Nothing Todo</div>
    }

    return (
      <div className="App">
        <h1 className="App-title">My Todo List</h1>
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
        {empty}
        <div>
          <button className="Add-button" onClick={() => { this.handleAdd() }}>Add Todo List</button>
        </div>
      </div>
    )
  }
}

export default App
