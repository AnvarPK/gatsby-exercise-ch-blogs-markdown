import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => (
    <div>
        <Layout>
            <h1>About</h1>
            <p>Bio</p>
            <p>Need a Developer <Link to="/contact">Contact me.</Link></p>
        </Layout>
    </div>
)

export default AboutPage;