import React, { Component } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ text: '' })
  }

  render() {
    return (
      <Container style={{ padding: 20 }}>
        <Row>
          <Col md={10}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Row>
                  <Col>
                    <Form.Label style={{ padding: 5 }}>
                      Add new Todo:
                    </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col md='10'>
                    <Form.Control
                      type='text'
                      name='text'
                      id='text'
                      value={this.state.text}
                      onChange={this.handleChange}
                    />
                  </Col>
                  <Col>
                    <Button type='submit'>Add</Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TodoForm
