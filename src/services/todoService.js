import {
  createTodo,
  deleteTodo,
  updateTodo
} from '../graphql/mutations'
import {
  listTodos
} from '../graphql/queries'
import Amplify, {
  API,
  graphqlOperation
} from 'aws-amplify'

export const todoService = {
  query,
  addTodo,
  removeTodo,
  editTodo
}
async function query() {
  try {
    const todoData = await API.graphql(graphqlOperation(listTodos))
    const todos = todoData.data.listTodos.items
    return todos
  } catch (err) {
    console.log('error fetching todos')
  }
}

async function addTodo(todo) {
  try {
    await API.graphql(graphqlOperation(createTodo, {
      input: todo
    }))
  } catch (err) {
    console.log('error creating todo:', err)
  }
}
async function editTodo(todo) {
  console.log('todo:', todo);
  
  try {
    await API.graphql(graphqlOperation(updateTodo, {
      input: todo
    }))
  } catch (err) {
    console.log('error updating todo:', err)
  }
}



async function removeTodo(id) {

  try {
    await API.graphql(graphqlOperation(deleteTodo, {
      input: {
        id
      }
    }))
  } catch (err) {
    console.log('error removing todo:', err)
  }
}