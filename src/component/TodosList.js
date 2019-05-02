import React from "react";
import TodoItem from './TodoItem';

class TodosList extends React.Component {
    renderItems() {
        return this.props.todos.map((
            C, index) => {
            return (
                <TodoItem
                    key={index}
                    id={index}
                    {...C}
                    deleteTask={this.props.deleteTask}
                    editTask={this.props.editTask}
                    toggleTask={this.props.toggleTask}
                />
            )
        });
    }
    render() {

        return (
            <table>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        )
    }
}
export default TodosList;