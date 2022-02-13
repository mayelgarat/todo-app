import React from 'react'
import {GrAddCircle} from 'react-icons/gr'
import { todoService } from '../services/todoService';
export class TodoAdd extends React.Component {
    state = {
        todo: {
            name: "",
            description: ""
        }
    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({
            todo: { ...prevState.todo, [field]: value },
        }));
    }

    onAddTodo = async (ev) => {
        ev.preventDefault();
        const { todo } = this.state;
        await todoService.addTodo(todo);
        this.setState({
            todo: {
                name: "",
                description: ""
            }
        })
        this.props.loadTodos()
    }

    render() {

        return <section className="todo-add">
            <div className="todo-container">
                <h1>Add new todo</h1>
                <form className="todo-form" onSubmit={this.onAddTodo}>
                    <div>
                        <input
                            placeholder="Enter Todo"
                            value={this.state.todo.name}
                            name="name"
                            onChange={this.onHandleChange}
                        ></input>
                    </div>
                    <div>
                        <input
                            placeholder="Enter Description"
                            value={this.state.todo.description}
                            name="description"
                            onChange={this.onHandleChange}
                        ></input>
                    </div>
                        <button className="add-todo-btn">Add <GrAddCircle style={{transform: 'translateY(2px)'}}/></button>
                </form>
            </div>
        </section>



    }


}