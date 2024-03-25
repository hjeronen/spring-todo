import React from 'react'
import todoService from './services/todos'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
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
        {this.state.todos.length == 0
        ? <div>Nothing to do.</div>
        : this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>)
        }
      </div>
    )
  }
}

export default App