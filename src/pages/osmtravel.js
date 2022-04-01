import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ResourceHero from "../components/ResourceSection/ResourceHero"
import { SliderData } from "../data/SliderData"

import Featured from "../components/Featured/Featured"
import Services from "../components/Services/Services"
import Testimonials from "../components/Testimonial/Testimonials"
import Hero from "../components/Hero/Hero"

const OSMTravel = () => (
  <Layout>
    <Seo title="OSMTravel" />
    <ResourceHero slides={SliderData} />
    <Hero />
    <Services />
    <Featured />
    <Testimonials />
  </Layout>
)

export default OSMTravel
