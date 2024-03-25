import React, { Component } from 'react'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'

class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={10}>
            <ListGroup variant='flush'>
              {this.props.todos.length == 0
                ? <ListGroup.Item>Nothing to do.</ListGroup.Item>
                : this.props.todos.map(todo => 
                    <ListGroup.Item key={todo.id}>

                      {todo.text}
                    </ListGroup.Item>
                  )
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }

}

export default TodoList