import React, { Component } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.todos.length == 0
          ? <div>Nothing to do.</div>
          : this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)
        }
      </div>
    )
  }

}

export default TodoList