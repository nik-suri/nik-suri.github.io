import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Tetroid = () => (
  <Container>
    <Row>
      <Col sm={8}>
        <h1>Tetroid</h1>
        <p>A Tetris reinforcement learning agent that clears on average 500+ lines per game.</p>
      </Col>
      <Col sm={4}>
        Image goes here
      </Col>
    </Row>
  </Container>
)

export default Tetroid
