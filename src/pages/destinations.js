import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../src/components/layout.css"
import Hero from "../components/Hero/Hero"

const Destinations = () => (
  <Layout>
    <Seo title="Destinations" />
    <h1 className="destinations">Destinations</h1>
    <Hero />
    
  </Layout>
)

export default Destinations
