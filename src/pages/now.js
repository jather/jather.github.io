import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
    <h1>Now</h1>
    <p>Working on this website, going to the gym, reading up for my university course. Still pretty unsure on what this term is really going to look like.</p>
    <h2> What is a “now page”?</h2>
    <p>The idea is that's it's a page that answers the question of "what have you been up to these days?". Similar to the convention of "/about" pages and a "/contact" pages. Credit to <a href="https://sivers.org/nowff" target="_blank" rel="noreferrer">Derek Sivers</a> for starting it.  More on "now pages", and to also see examples of it on other websites: <a href= "https://nownownow.com/about" target="_blank" rel="noreferrer">nownownow.com</a> </p> 
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NowPage