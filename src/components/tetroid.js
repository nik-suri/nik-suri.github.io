import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Tetroid = () => {
  const data = useStaticQuery(graphql`
    query {
      tetroid: file(
        relativePath: { eq: "tetroid.pdf" },
        sourceInstanceName: { eq: "docs" }
      )
      {
        publicURL
      }
      tetroidStill: file(
        relativePath: { eq: "tetroid-still.png" },
        sourceInstanceName: { eq: "images" }
      )
      { childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <h1>Tetroid</h1>
          <p>A Tetris reinforcement learning agent that clears on average 500+ lines per game. Read the paper <a href={data.tetroid.publicURL} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </Col>
        <Col sm={4}>
          <Img fluid={data.tetroidStill.childImageSharp.fluid} />
        </Col>
      </Row>
    </Container>
  )
}

export default Tetroid
