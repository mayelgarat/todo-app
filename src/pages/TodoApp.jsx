/* src/App.js */
import React from 'react'
import Amplify from 'aws-amplify'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import { todoService } from '../services/todoService';
import awsExports from "../aws-exports";
import { TodoAdd } from '../cmps/TodoAdd';
Amplify.configure(awsExports);


export class TodoApp extends React.Component {

    state = {
        todos: null,
        isEdit: false,
        todoToEdit: null,

    }

    componentDidMount() {
        this.loadTodos()
        console.log('this.state.todos:', this.state.todos);

    }

    loadTodos = async () => {
        const todos = await todoService.query();
        this.setState({ todos })
    }

    deleteTodo = async (todoId) => {

        await todoService.removeTodo(todoId)
        this.loadTodos()
    }


    openUpdateTodo = (todoId) => {
        const { todos } = this.state
        const todoToEdit = todos.find(todo => todo.id === todoId)
        this.setState({ isEdit: true, todoToEdit })
    }

    onHandleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({
            todoToEdit: { ...prevState.todoToEdit, [field]: value }})
        )
    }

    onAddTodo = async (ev) => {
        ev.preventDefault();
        this.setState({ isEdit: false })
        const { todoToEdit } = this.state;
        await todoService.editTodo({ id: todoToEdit.id, name: todoToEdit.name, description: todoToEdit.description });
        this.loadTodos()

    }

    closeModal=()=>{
        this.setState({ isEdit: false })
    }

    render() {
        const { todos, isEdit } = this.state
        console.log('todos:', todos);

        return <section className="todo-app">
            <TodoAdd loadTodos={this.loadTodos} />
            <div className='todos-container'>

                {todos && todos.map((todo, idx) => {
                    return <div key={idx} className='todo-card'>
                        <p className='name'>{todo.name}</p>
                        <p className='desc'>{todo.description}</p>
                        <div>
                            <button onClick={() => this.deleteTodo(todo.id)}><AiFillDelete /></button>
                            <button onClick={() => this.openUpdateTodo(todo.id)}><AiFillEdit /></button>
                        </div>
                    </div>
                })}
            </div>
            {isEdit &&
            <div className='edit-container'>

                <form className="todo-edit" onSubmit={this.onAddTodo}>
                    <div>
                        <label htmlFor="name">name: </label>
                        <input
                            placeholder="Todo"
                            value={this.state.todoToEdit.name}
                            name="name"
                            onChange={this.onHandleChange}
                            ></input>
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input
                            placeholder="description"
                            value={this.state.todoToEdit.description}
                            name="description"
                            onChange={this.onHandleChange}
                            ></input>
                    </div>

                    <div className="edit-todo-btn-container">
                        <button type='submit' className="add-todo-btn">Save</button>
                        <button onClick={this.closeModal}> Back</button>
                    </div>
                </form>
                            </div>
            }
        </section>
    }

}

