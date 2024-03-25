import React from 'react'
import todoService from './services/todos'
import TodoList from './components/TodoList'
import { Container, Navbar } from 'react-bootstrap'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
  }

  componentDidMount = () => {
    todoService
      .getAll()
      .then(response => {
        this.setState({ todos: response.data })
      })
  }

  render() {
    return (
      <Container fluid>
        <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
          <Container>
            <Navbar.Brand href='/'>Spring Boot ToDo</Navbar.Brand>
          </Container>
        </Navbar>
        <TodoList todos={this.state.todos}/>
      </Container>
    )
  }
}

export default App