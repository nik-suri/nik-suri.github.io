import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"
import Tetroid from "../components/tetroid"

import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
    <Tetroid />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
