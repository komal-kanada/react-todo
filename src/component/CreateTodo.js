import React, { Component } from "react";


class CreateTodo extends Component {
    onSubmit(e) {
        e.preventDefault();
        this.props.createTask(this.refs.Todomessage.value);
        this.refs.Todomessage.value = "";
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" placeholder="Todo" ref="Todomessage" autoFocus />
                <button>Add</button>
            </form>
        );
    }
}
export default CreateTodo;
