import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }
    deleteTask() {
        this.props.deleteTask(this.props.id);
    }
    editTask(e) {
        this.props.editTask(this.props.id, this.refs.task.value);
        this.setState({
            isEditing: false
        });
        e.preventDefault();
    }

    setEditState = (isEditing) => {
        this.setState({
            isEditing
        });
    }
    toggleTask = () => {
        this.props.toggleTask(this.props.id);
    }
    renderAction = () => {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.editTask.bind(this)}>Save</button>
                    <button onClick={this.setEditState.bind(this, false)}>Cancel</button>
                </td>
            );
        }
        else {
            return (
                <td>
                    <button onClick={this.deleteTask.bind(this)}>Delete</button>
                    <button onClick={this.setEditState.bind(this, true)}>Edit</button>
                </td>
            );
        }
    }
    renderTask() {
        const { task, isCompleted } = this.props;
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
                </td>
            );
        }
        return (

            <td onClick={this.toggleTask.bind(this)}>{task}</td>
        );
    }
    render() {
        const { isCompleted } = this.props;
        return (
            <tr className={"todo-" + (isCompleted ? "completed" : "not-completed")}>
                {this.renderTask()}
                {this.renderAction()}
            </tr>
        )
    }


}
export default TodoItem;