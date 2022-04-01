import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../src/components/layout.css"
import Hero from "../components/Hero/Hero"
import Benefits from "../components/Benefits/Benefits"

const Destinations = () => (
  <Layout>
    <Seo title="OneStaff" />
    <h1 className="destinations">About Us</h1>
    <Benefits />
    
  </Layout>
)

export default Destinations
