import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Hero from "../components/Hero/Hero"
import Featured from "../components/Featured/Featured"
import Services from "../components/Services/Services"
import Testimonials from "../components/Testimonial/Testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <HeroSection /> */}
    <Hero />
    <Services />
    <Featured />
    <Testimonials />
  </Layout>
)

export default IndexPage
