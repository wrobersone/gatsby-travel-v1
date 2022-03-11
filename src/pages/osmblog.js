import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../src/components/layout.css"

import AllBlog from '../components/Blog/AllBlog'

const Blog = () => (
  <Layout>
    <Seo title="OSMBlog" />
    <h1 className="destinations">Our Blog</h1>
    <h2>Wanna go?</h2>
    <p>This is a test</p>
    <AllBlog />
    
  </Layout>
)

export default Blog