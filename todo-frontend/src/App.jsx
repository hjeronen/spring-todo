import React from 'react'
import todoService from './services/todos'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import { Container, Navbar } from 'react-bootstrap'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  componentDidMount = () => {
    todoService.getAll().then((response) => {
      this.setState({ todos: response.data })
    })
  }

  addNewTodo = (todo) => {
    todoService.createTodo(todo).then((response) => {
      this.setState({ todos: this.state.todos.concat(response.data) })
    })
  }

  deleteTodo = (todo) => {
    todoService.deleteTodo(todo).then((response) => {
      this.setState({ todos: this.state.todos.filter((t) => t.id != todo.id) })
    })
  }

  render() {
    return (
      <Container fluid>
        <Navbar expand='lg'>
          <Container>
            <Navbar.Brand href='/'>Spring Boot ToDo</Navbar.Brand>
          </Container>
        </Navbar>
        <TodoForm addTodo={this.addNewTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </Container>
    )
  }
}

export default App
