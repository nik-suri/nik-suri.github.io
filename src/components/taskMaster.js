import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const TaskMaster = () => (
  <Container>
    <Row>
      <Col sm={8}>
        <h1>TaskMaster</h1>
        <p>A platform to help anyone create a weekly plan to manage their time.</p>
      </Col>
      <Col sm={4}>
        Image goes here
      </Col>
    </Row>
  </Container>
)

export default TaskMaster
