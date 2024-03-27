import React, { Component } from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
    this.toggleDone = this.toggleDone.bind(this)
  }

  handleDelete = (todo) => {
    this.props.deleteTodo(todo)
  }

  toggleDone = (todo) => {
    const updated = { ...todo, done: !todo.done }
    this.props.updateTodo(updated)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={10}>
            <ListGroup variant='flush'>
              {this.props.todos.length == 0 ? (
                <ListGroup.Item>Nothing to do.</ListGroup.Item>
              ) : (
                this.props.todos
                  .sort((a, b) => {
                    if (!a.done && b.done) {
                      return -1
                    } else if (a.done && !b.done) {
                      return 1
                    } else {
                      return a.id - b.id
                    }
                  })
                  .map((todo) => (
                    <ListGroup.Item
                      key={todo.id}
                      className={todo.done ? 'list-group-item-done' : ''}
                    >
                      <Row>
                        <Col sm={1} onClick={() => this.toggleDone(todo)}>
                          <div className={todo.done ? 'check' : ''}></div>
                        </Col>
                        <Col
                          md={9}
                          className='col-todo'
                          onClick={() => this.toggleDone(todo)}
                        >
                          {todo.text}
                        </Col>
                        <Col md={2} style={{ paddingTop: 4 }}>
                          <Button
                            variant='danger'
                            onClick={() => this.handleDelete(todo)}
                          >
                            Delete
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))
              )}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TodoList
