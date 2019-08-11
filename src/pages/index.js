import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"
import Tetroid from "../components/tetroid"
import Vision from "../components/vision"
import IlpMonitor from "../components/ilpMonitor"
import TaskMaster from "../components/taskMaster"

import 'bootstrap/dist/css/bootstrap.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutMe />
    <Tetroid />
    <Vision />
    <IlpMonitor />
    <TaskMaster />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
