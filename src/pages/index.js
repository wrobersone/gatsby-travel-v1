import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"
import Hero from "../components/Hero/Hero"
import Featured from "../components/Featured/Featured"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <HeroSection /> */}
    <Hero />
    <Featured />
  </Layout>
)

export default IndexPage
