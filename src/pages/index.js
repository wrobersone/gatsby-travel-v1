import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/Hero/Hero"
import Services from "../components/Services/Services"
import CTA from "../components/CTA/CTA"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <HeroSection /> */}
    <Hero />
    <Services />
    
    <CTA />
    
  </Layout>
)

export default IndexPage
