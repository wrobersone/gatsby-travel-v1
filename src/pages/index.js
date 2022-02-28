import * as React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <Image />
  </Layout>
)

export default IndexPage
