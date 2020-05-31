import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'


const IndexPage = () => (
  <div>
    <Layout>
      <h2>I am Anvar, a fullstack developer</h2>
      <p>Need a Developer <Link to="/contact">Contact me.</Link></p>
    </Layout>
  </div>
)

export default IndexPage;