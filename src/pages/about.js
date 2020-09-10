import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About this website</h1>
    <p>This is my personal website. It's a writing project, coding project, and a design project. I'm having a lot of fun building it.</p>
    <h2>How I made it</h2>
    <p>This is actually the second version of the website. In summer 2020, I wanted to make a website, but knew nothing about coding, so I decided to learn how to do it from scratch rather than use a CMS like wordpress. The first version of the website was pretty barebones, and built with plain HTML and CSS. For this one I'm using React and Gatsby.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
