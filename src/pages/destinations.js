import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../src/components/layout.css"
import Hero from "../components/Hero/Hero"
import Featured from '../components/Featured/Featured'

const Destinations = () => (
  <Layout>
    <Seo title="Destinations" />
    <h1 className="destinations">Resources</h1>
    <Hero />
    <Featured />
    
  </Layout>
)

export default Destinations
