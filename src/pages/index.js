import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home Page</h1>
    <p>Currently rebuilding my website with gatsby</p>
    <p>Check back in a week</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about/">About</Link> <br />
    <Link to="/now/">Now</Link><br />
    <Link to="/contact/">Contact</Link> <br />
  </Layout>
)

export default IndexPage
