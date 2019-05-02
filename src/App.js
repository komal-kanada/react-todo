import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CreateTodo from './component/CreateTodo';
import TodosList from './component/TodosList';

const todos = {
  items: [],
  Key: "todos",
  add(obj) {
    this.items.push(obj);
  },
  remove(id) {
    this.items.splice(id, 1);
  },
  update(id,task) {
    let todoItem = this.items[id];
    todoItem = task
  },
  toggle(id) {
    let todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
  },
};


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos.items
    };
  }

  createTask(task) {
    task = task.trim();
    todos.add({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  toggleTask() {
    this.setState({ todos: this.state.todos });
  }

  deleteTask(taskId) {
    todos.remove(taskId);
    this.setState({ todos: this.state.todos });
  }
  editTask(taskId, task) {
    todos.update(taskId, task);
    this.setState({ todos: this.state.todos });
  }

  render() {
    return (
      <div className="App">
        <CreateTodo createTask={this.createTask.bind(this)} />
        <TodosList
          todos={this.state.todos}
          deleteTask={this.deleteTask.bind(this)}
          editTask={this.editTask.bind(this)}
        />
      </div>
    );
  }
}

export default App;
