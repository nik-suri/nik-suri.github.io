import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MyImage from "../components/my-image"

const AboutMe = () => (
  <Container>
    <Row>
      <Col sm={8}>
        <h1>Nikhil Suri</h1>
        <p>Hey! I'm Nikhil, a rising senior at Harvard College studying Computer Science.</p>
      </Col>
      <Col sm={4}>
        <div style={{ marginBottom: `1.45rem` }}>
          <MyImage />
        </div>
      </Col>
    </Row>
  </Container>
)

export default AboutMe
