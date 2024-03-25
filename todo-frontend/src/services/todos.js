import axios from 'axios'

const baseUrl = 'http://localhost:8080/todos'

const getAll = () => {
    return axios.get(baseUrl)
}

const createTodo = (todo) => {
    return axios.post(baseUrl, todo)
}

const updateTodo = (todo) => {
    return axios.put(baseUrl, todo)
}

const deleteTodo = (todo) => {
    return axios.delete(baseUrl, todo)
}

export default { getAll, createTodo, updateTodo }