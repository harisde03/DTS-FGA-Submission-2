import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateTodo: {
        todo: this.props.todoList.todo,
        isDone: this.props.todoList.isDone
      },
      isModalOpen: false
    }
  }

  handleModal() {
    this.setState({
      isModalOpen: true
    });
  }

  handleSaveModal() {
    this.props.handleUpdateTodo(this.props.index, this.state.updateTodo);
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.setState({
      updateTodo: {
        todo: this.props.todoList.todo,
        isDone: this.props.todoList.isDone
      },
      isModalOpen: false
    });
  }

  handleChange(value) {
    this.setState({
      updateTodo: {
        todo: value,
        isDone: this.props.todoList.isDone
      }
    });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='Modal'>
          <div className='Modal-inner'>
            <div className='Modal-header'>
              <p>Update Todo {this.props.index + 1}</p>
            </div>
            <div className='Modal-input'>
              <input
                type={"text"}
                value={this.state.updateTodo.todo}
                onChange={e => { this.handleChange(e.target.value) }}
              />
            </div>
            <div className="Modal-btn">
              <button onClick={() => { this.handleSaveModal() }}>Save</button>
              <button onClick={() => { this.handleCloseModal() }}>Cancel</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <button className={"Check-todo"} onClick={() => { this.props.handleUpdateDone(this.props.index) }}>{this.props.todoList.isDone ? "✔️" : ""}</button>
        <input type={"text"} value={this.props.todoList.todo} disabled onClick={() => { this.handleModal() }}/>
        <button onClick={() => { this.handleModal() }}>Update</button>
        <button onClick={() => { this.props.handleDelete(this.props.index) }}>Delete</button>
        {modal}
      </div>
    );
  }
}

export default Todo;