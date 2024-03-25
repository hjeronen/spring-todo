import React from 'react'
import todoService from './services/todos'
import TodoList from './components/TodoList'


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
      <div>
        <h1>Spring Boot ToDo</h1>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default App