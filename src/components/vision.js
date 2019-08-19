import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Vision = () => {
  const data = useStaticQuery(graphql`
    query {
      vision: file(
        relativePath: { eq: "vision.pdf" },
        sourceInstanceName: { eq: "docs" }
      )
      {
        publicURL
      }
    }
  `)

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h1>Vision</h1>
          <p>Helped coordinate and scope research for a new kind a decentralized market. Read the paper <a href={data.vision.publicURL} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </Col>
        <Col sm={4}>
          Image goes here
        </Col>
      </Row>
    </Container>
  )
}

export default Vision
