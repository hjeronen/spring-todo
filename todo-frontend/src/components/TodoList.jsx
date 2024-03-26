import React, { Component } from 'react'
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = (todo) => {
    this.props.deleteTodo(todo)
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
                this.props.todos.map((todo) => (
                  <ListGroup.Item key={todo.id}>
                    <Row>
                      <Col md={10}>{todo.text}</Col>
                      <Col md={2}>
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
