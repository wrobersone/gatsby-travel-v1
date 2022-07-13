import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../../src/components/layout.css"
import Benefits from "../components/Benefits/Benefits"
import Carousel from "../components/Carousel/Carousel"


const Destinations = () => (
  <Layout>
    <Seo title="OneStaff" />
    <h1 className="destinations">About Us</h1>
    <Benefits />
    <Carousel />
  </Layout>
)

export default Destinations
