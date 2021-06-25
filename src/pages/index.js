import React from "react"
import { Layout, Seo } from "components/common"
import { Intro, Skills, Contact, Projects } from "components/landing"

const Home = () => (
  <Layout>
    <main>
      <Seo />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </main>
  </Layout>
)

export default Home
