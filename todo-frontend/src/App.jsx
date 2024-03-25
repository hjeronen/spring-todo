import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  

  componentDidMount = () => {
    axios.get('http://localhost:8080/todos')
      .then(response => {
        this.setState({ todos: response.data })
      })
  }

  render() {
    console.log(this.state.todos)
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