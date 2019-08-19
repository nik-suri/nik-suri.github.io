import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const IlpMonitor = () => {
  const data = useStaticQuery(graphql`
    query {
      ilpMonitor: file(
        relativePath: { eq: "ilpMonitor.pdf" },
        sourceInstanceName: { eq: "docs" }
      )
      {
        publicURL
      }
      ilpMonitorImg: file(
        relativePath: { eq: "ilp-monitor.png" },
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
          <h1>IlpMonitor</h1>
          <p>Researched the issue of trust in decentralized financial systems and built a novel solution. Read the paper <a href={data.ilpMonitor.publicURL} target="_blank" rel="noopener noreferrer">here</a>.</p>
        </Col>
        <Col sm={4}>
          <Img fluid={data.ilpMonitorImg.childImageSharp.fluid} />
        </Col>
      </Row>
    </Container>
  )
}

export default IlpMonitor
